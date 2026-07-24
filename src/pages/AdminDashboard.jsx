import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db, storage } from '../firebase';
import { LogOut, LayoutDashboard, Feather, BookOpen, FileText, Image as ImageIcon, FileClock, Newspaper } from 'lucide-react';
import { compressImage } from '../utils/imageCompressor';
import { uploadImageToImgBB } from '../utils/imageUploader';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('poems');
  
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const adminEmails = ['rjtiksrm@gmail.com', 'rajtilakchamlagain@gmail.com'];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && adminEmails.includes(currentUser.email)) {
        setUser(currentUser);
      } else {
        navigate('/admin');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    
    try {
      let fileUrl = '';
      
      // Upload file if exists
      if (file) {
        // Compress admin images to 1200px max width and 80% quality
        const compressedImage = await compressImage(file, 1200, 0.8);
        
        // Upload to ImgBB instead of Firebase Storage
        fileUrl = await uploadImageToImgBB(compressedImage);
      }

      // Add to Firestore
      const dataToSave = {
        ...formData,
        createdAt: serverTimestamp(),
      };
      
      if (fileUrl) {
        dataToSave.imageUrl = fileUrl; // or fileUrl based on context
      }

      await addDoc(collection(db, activeTab), dataToSave);
      
      setMessage('Successfully published! 🎉');
      setFormData({});
      setFile(null);
      e.target.reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      setMessage('Error: Could not publish.');
    }
    setIsSubmitting(false);
  };

  if (!user) return <div style={{ padding: '100px', textAlign: 'center' }}>Checking admin access...</div>;

  const tabs = [
    { id: 'poems', label: 'Poems', icon: Feather },
    { id: 'stories', label: 'Stories', icon: BookOpen },
    { id: 'articles', label: 'Articles', icon: FileText },
    { id: 'research', label: 'Research', icon: FileClock },
    { id: 'news', label: 'News / Notices', icon: Newspaper },
    { id: 'photos', label: 'Gallery Photos', icon: ImageIcon },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '80vh', backgroundColor: '#f9f9f9' }}>
      <Helmet>
        <title>Admin Dashboard - Sahitya Hub</title>
      </Helmet>
      
      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: 'white', borderRight: '1px solid #eee', padding: '24px 0' }}>
        <h2 style={{ padding: '0 24px', fontSize: '18px', color: 'var(--primary-maroon)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
          <LayoutDashboard size={20} />
          Admin Panel
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setMessage(''); setFormData({}); setFile(null); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 24px',
                  backgroundColor: activeTab === tab.id ? 'rgba(159, 18, 57, 0.08)' : 'transparent',
                  color: activeTab === tab.id ? 'var(--primary-maroon)' : '#555',
                  border: 'none', borderRight: activeTab === tab.id ? '4px solid var(--primary-maroon)' : '4px solid transparent',
                  cursor: 'pointer', textAlign: 'left', fontSize: '15px', fontWeight: activeTab === tab.id ? 600 : 500,
                  transition: 'all 0.2s'
                }}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            )
          })}
        </div>
        
        <button 
          onClick={() => signOut(auth)}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 24px', backgroundColor: 'transparent', color: '#e74c3c', border: 'none', cursor: 'pointer', marginTop: 'auto', width: '100%', textAlign: 'left', fontWeight: 600 }}
        >
          <LogOut size={18} />
          Exit Admin
        </button>
      </div>
      
      {/* Main Content */}
      <div style={{ flex: 1, padding: '40px' }}>
        <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', maxWidth: '700px' }}>
          <h1 style={{ marginTop: 0, color: '#333', textTransform: 'capitalize', marginBottom: '24px' }}>
            Add New {activeTab.replace('s', '')}
          </h1>
          
          {message && (
            <div style={{ padding: '16px', backgroundColor: message.includes('Error') ? '#fee' : '#efe', color: message.includes('Error') ? '#c0392b' : '#27ae60', borderRadius: '8px', marginBottom: '24px', fontWeight: 500 }}>
              {message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Common Fields */}
            {activeTab !== 'news' && activeTab !== 'photos' && (
              <>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#555' }}>Title</label>
                  <input type="text" name="title" required onChange={handleInputChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                </div>
                {activeTab !== 'poems' && (
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#555' }}>Author</label>
                    <input type="text" name="author" required onChange={handleInputChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                  </div>
                )}
              </>
            )}

            {/* Content Field */}
            {activeTab === 'poems' && (
              <>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#555' }}>Nepali Text</label>
                  <textarea name="nepaliText" required rows="6" onChange={handleInputChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', resize: 'vertical' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#555' }}>English Translation (Optional)</label>
                  <textarea name="englishText" rows="6" onChange={handleInputChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', resize: 'vertical' }} />
                </div>
              </>
            )}

            {(activeTab === 'stories' || activeTab === 'articles') && (
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#555' }}>Content</label>
                <textarea name="content" required rows="10" onChange={handleInputChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', resize: 'vertical' }} />
              </div>
            )}
            
            {activeTab === 'research' && (
              <>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#555' }}>Abstract</label>
                  <textarea name="abstract" required rows="4" onChange={handleInputChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', resize: 'vertical' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#555' }}>Link to PDF (Optional)</label>
                  <input type="url" name="pdfLink" onChange={handleInputChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                </div>
              </>
            )}
            
            {activeTab === 'news' && (
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#555' }}>News / Notice Text</label>
                <textarea name="content" required rows="4" onChange={handleInputChange} placeholder="Breaking: New poetry collection released!" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', resize: 'vertical' }} />
              </div>
            )}
            
            {activeTab === 'photos' && (
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#555' }}>Photo Caption / Title</label>
                <input type="text" name="title" required onChange={handleInputChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
              </div>
            )}

            {/* Image Upload Field */}
            {(activeTab === 'stories' || activeTab === 'articles' || activeTab === 'photos') && (
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#555' }}>Upload Image</label>
                <input type="file" accept="image/*" required={activeTab === 'photos'} onChange={handleFileChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px dashed #aaa', background: '#fafafa', cursor: 'pointer' }} />
              </div>
            )}

            <button type="submit" disabled={isSubmitting} style={{
              padding: '16px', background: 'var(--primary-maroon)', color: 'white', border: 'none', borderRadius: '8px',
              fontSize: '16px', fontWeight: 600, cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1, transition: 'all 0.2s',
              marginTop: '16px'
            }}>
              {isSubmitting ? 'Publishing...' : `Publish ${tabLabelSingular(activeTab)}`}
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
}

function tabLabelSingular(id) {
  if (id === 'news') return 'News';
  if (id === 'research') return 'Research';
  if (id === 'stories') return 'Story';
  if (id === 'photos') return 'Photo';
  return id.slice(0, -1);
}
