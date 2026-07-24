import React, { useState, useEffect } from 'react';
import { Mail, Award, MapPin, User as UserIcon, Phone, Calendar, CheckCircle, Edit3, Camera } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db, storage } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Helmet } from 'react-helmet-async';
import { compressImage } from '../utils/imageCompressor';
import { uploadImageToImgBB } from '../utils/imageUploader';

const Profile = () => {
    const { currentUser } = useAuth();
    
    const [profileData, setProfileData] = useState({
        phone: '',
        dob: '',
        bio: '',
        location: '',
        customPhotoURL: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [loading, setLoading] = useState(true);
    const [photoFile, setPhotoFile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            if (currentUser) {
                const docRef = doc(db, 'users', currentUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProfileData(prev => ({ ...prev, ...docSnap.data() }));
                }
            }
            setLoading(false);
        };
        fetchProfile();
    }, [currentUser]);

    const handleChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    const handlePhotoChange = (e) => {
        if (e.target.files[0]) {
            setPhotoFile(e.target.files[0]);
        }
    };

    const handleSave = async () => {
        if (!currentUser) return;
        setIsSaving(true);
        try {
            let finalPhotoUrl = profileData.customPhotoURL;

            // If they selected a new photo, upload it first
            if (photoFile) {
                // Compress the image before uploading (Max width 800px, 70% quality)
                const compressedImage = await compressImage(photoFile, 800, 0.7);
                
                // Upload to ImgBB instead of Firebase Storage
                finalPhotoUrl = await uploadImageToImgBB(compressedImage);
            }

            const dataToSave = {
                ...profileData,
                customPhotoURL: finalPhotoUrl,
                name: currentUser.displayName || 'Unknown Reader',
                email: currentUser.email || 'No Email',
            };

            // Also fallback to Google photo if they don't have a custom one
            if (!dataToSave.customPhotoURL && currentUser.photoURL) {
                 dataToSave.photoURL = currentUser.photoURL;
            }

            await setDoc(doc(db, 'users', currentUser.uid), dataToSave, { merge: true });
            
            setProfileData(prev => ({ ...prev, customPhotoURL: finalPhotoUrl }));
            setPhotoFile(null);
            setIsEditing(false);
        } catch (error) {
            console.error("Error saving profile:", error);
            alert("Could not save profile. Please check your internet connection.");
        }
        setIsSaving(false);
    };

    // Calculate Gamification Progress
    const calculateProgress = () => {
        let score = 0;
        const total = 5; // 5 requirements for 100%
        
        if (currentUser?.displayName) score += 1;
        if (currentUser?.email) score += 1;
        if (profileData.phone && profileData.phone.trim() !== '') score += 1;
        
        // Either DOB or Location counts as 1 point
        if ((profileData.dob && profileData.dob.trim() !== '') || (profileData.location && profileData.location.trim() !== '')) score += 1; 
        
        // A photo (custom or Google) AND a Bio is required for the final point
        const hasPhoto = profileData.customPhotoURL || currentUser?.photoURL;
        if (hasPhoto && profileData.bio && profileData.bio.trim() !== '') score += 1; 
        
        return (score / total) * 100;
    };

    const progress = calculateProgress();
    const isVerified = progress === 100;
    const displayPhoto = photoFile ? URL.createObjectURL(photoFile) : (profileData.customPhotoURL || currentUser?.photoURL);

    if (!currentUser) {
        return (
            <div style={{ padding: '100px 20px', textAlign: 'center', minHeight: '60vh' }}>
                <h2>Please Sign In</h2>
                <p>You need to sign in with Google to view and edit your profile.</p>
            </div>
        );
    }

    return (
        <div style={{ paddingBottom: '100px', fontFamily: 'var(--font-body)' }}>
            <Helmet>
                <title>My Profile - Sahitya Hub</title>
            </Helmet>

            {/* Profile Header */}
            <div style={{
                backgroundColor: 'var(--bg-paper-dark)',
                padding: '40px 24px',
                textAlign: 'center',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {isVerified && (
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '5px', background: 'linear-gradient(90deg, #FFD700, #FDB931, #FFD700)' }} />
                )}
                
                <div style={{ position: 'relative', width: '130px', margin: '0 auto 16px' }}>
                    <div style={{
                        width: '130px',
                        height: '130px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: isVerified ? '4px solid #FFD700' : '4px solid white',
                        boxShadow: isVerified ? '0 0 20px rgba(255, 215, 0, 0.4)' : 'var(--shadow-soft)',
                        backgroundColor: '#f0f0f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        {displayPhoto ? (
                            <img src={displayPhoto} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} referrerPolicy="no-referrer" />
                        ) : (
                            <UserIcon size={64} color="#ccc" />
                        )}
                    </div>
                    
                    {isEditing && (
                        <label style={{
                            position: 'absolute', bottom: '0', right: '0', background: 'var(--primary-maroon)', color: 'white',
                            width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.2)', border: '2px solid white'
                        }}>
                            <Camera size={18} />
                            <input type="file" accept="image/*" onChange={handlePhotoChange} style={{ display: 'none' }} />
                        </label>
                    )}
                </div>

                <h1 style={{ fontSize: '26px', marginBottom: '8px', color: 'var(--primary-maroon)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    {currentUser.displayName}
                    {isVerified && <CheckCircle size={22} color="#FFD700" title="Verified Reader" />}
                </h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', color: 'var(--text-muted)', fontSize: '15px', fontWeight: 500 }}>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                        <Award size={16} color={isVerified ? "#FFD700" : "currentColor"} /> 
                        {isVerified ? "Verified Reader" : "Community Member"}
                    </span>
                </div>
            </div>

            <div className="container" style={{ marginTop: '32px', maxWidth: '800px' }}>
                
                {/* Gamification Progress Bar */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '24px',
                    borderRadius: '16px',
                    boxShadow: 'var(--shadow-card)',
                    marginBottom: '32px',
                    border: isVerified ? '2px solid #FFD700' : '1px solid rgba(128,0,0,0.1)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                        <h3 style={{ margin: 0, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            Profile Completeness
                            {isVerified && <span style={{ fontSize: '20px' }}>🎉</span>}
                        </h3>
                        <span style={{ fontWeight: 'bold', color: isVerified ? '#d4af37' : 'var(--primary-maroon)' }}>{progress}%</span>
                    </div>
                    
                    <div style={{ width: '100%', backgroundColor: '#eee', borderRadius: '10px', height: '12px', overflow: 'hidden' }}>
                        <div style={{
                            height: '100%',
                            width: `${progress}%`,
                            background: isVerified ? 'linear-gradient(90deg, #FFD700, #FDB931)' : 'var(--primary-maroon)',
                            transition: 'width 0.5s ease-in-out'
                        }} />
                    </div>
                    
                    <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--text-muted)' }}>
                        {isVerified 
                            ? "Congratulations! You are a Verified Reader. Enjoy your golden badge!" 
                            : "Upload a photo, write a bio, and add your details to reach 100% and unlock the golden Verified Reader badge!"}
                    </p>
                </div>

                {/* Profile Details Form */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '16px',
                    boxShadow: 'var(--shadow-card)',
                    border: '1px solid rgba(128,0,0,0.1)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <h2 style={{ fontSize: '22px', margin: 0 }}>Personal Details</h2>
                        <button 
                            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                            disabled={isSaving}
                            style={{
                                background: isEditing ? 'var(--primary-maroon)' : 'transparent',
                                color: isEditing ? 'white' : 'var(--primary-maroon)',
                                border: `1px solid var(--primary-maroon)`,
                                padding: '8px 16px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontWeight: 600,
                                transition: 'all 0.2s'
                            }}
                        >
                            {isEditing ? (isSaving ? "Saving..." : "Save Changes") : <><Edit3 size={16} /> Edit Profile</>}
                        </button>
                    </div>

                    {loading ? (
                        <div>Loading profile data...</div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
                            
                            {/* Read-Only Google Info */}
                            <div className="form-group" style={{ marginBottom: '10px' }}>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-muted)' }}>
                                    <Mail size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }}/> Email Address (From Google)
                                </label>
                                <input type="text" value={currentUser.email} disabled style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', background: '#f9f9f9', color: '#666' }} />
                            </div>

                            {/* Editable Fields */}
                            <div className="form-group" style={{ marginBottom: '10px' }}>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-main)' }}>
                                    <Phone size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }}/> Phone Number
                                </label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    value={profileData.phone} 
                                    onChange={handleChange}
                                    disabled={!isEditing} 
                                    placeholder="+91 9876543210"
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', background: isEditing ? 'white' : '#f9f9f9' }} 
                                />
                            </div>

                            <div className="form-group" style={{ marginBottom: '10px' }}>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-main)' }}>
                                    <Calendar size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }}/> Date of Birth
                                </label>
                                <input 
                                    type="date" 
                                    name="dob"
                                    value={profileData.dob} 
                                    onChange={handleChange}
                                    disabled={!isEditing} 
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', background: isEditing ? 'white' : '#f9f9f9' }} 
                                />
                            </div>

                            <div className="form-group" style={{ marginBottom: '10px' }}>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-main)' }}>
                                    <MapPin size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }}/> Location
                                </label>
                                <input 
                                    type="text" 
                                    name="location"
                                    value={profileData.location} 
                                    onChange={handleChange}
                                    disabled={!isEditing} 
                                    placeholder="e.g. Kathmandu, Nepal"
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', background: isEditing ? 'white' : '#f9f9f9' }} 
                                />
                            </div>

                            <div className="form-group" style={{ marginBottom: '10px' }}>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-main)' }}>
                                    Bio / About Me
                                </label>
                                <textarea 
                                    name="bio"
                                    value={profileData.bio} 
                                    onChange={handleChange}
                                    disabled={!isEditing} 
                                    placeholder="Tell us a little bit about yourself and your interest in literature..."
                                    rows="4"
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', background: isEditing ? 'white' : '#f9f9f9', resize: 'vertical' }} 
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;

