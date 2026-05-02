import { Mail, Award, BookOpen, MapPin, User as UserIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const { currentUser } = useAuth();
    // Falls back to dummy data if user is not provided
    const profileData = {
        name: currentUser?.displayName || "Reader & Contributor",
        title: currentUser?.email ? "Community Member" : "Guest Reader",
        email: currentUser?.email || "Connect your account",
        photoURL: currentUser?.photoURL || "/default-avatar.png",
        location: "Planet Earth"
    };

    return (
        <div style={{ paddingBottom: '100px' }}>
            {/* Profile Header */}
            <div style={{
                backgroundColor: 'var(--bg-paper-dark)',
                padding: '40px 24px',
                textAlign: 'center',
                borderBottom: '1px solid rgba(0,0,0,0.05)'
            }}>
                <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    margin: '0 auto 16px',
                    overflow: 'hidden',
                    border: '4px solid white',
                    boxShadow: 'var(--shadow-soft)',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {currentUser?.photoURL ? (
                        <img src={profileData.photoURL} alt={profileData.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        <UserIcon size={64} color="#ccc" />
                    )}
                </div>

                <h1 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--primary-maroon)' }}>
                    {profileData.name}
                </h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', color: 'var(--text-muted)', fontSize: '14px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                        <Award size={16} /> {profileData.title}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                        <MapPin size={16} /> {profileData.location}
                    </span>
                </div>
            </div>

            <div className="container" style={{ marginTop: '32px' }}>

                {/* Contact info card */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '24px',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-card)',
                    marginBottom: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    border: '1px solid rgba(128,0,0,0.1)'
                }}>
                    <div style={{
                        backgroundColor: 'rgba(128,0,0,0.1)',
                        padding: '12px',
                        borderRadius: '50%',
                        color: 'var(--primary-maroon)'
                    }}>
                        <Mail size={24} />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '14px', marginBottom: '2px' }}>Identity</h3>
                        <p style={{ fontSize: '16px', fontWeight: 500, color: 'var(--primary-maroon)' }}>
                            {profileData.email}
                        </p>
                    </div>
                </div>

                {/* About Section */}
                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '20px', marginBottom: '16px', borderLeft: '4px solid var(--accent-gold)', paddingLeft: '12px' }}>
                        Community Status
                    </h2>
                    <div style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: 'var(--text-charcoal)'
                    }}>
                        <p style={{ marginBottom: '16px' }}>
                            Welcome to your personal identity portal on <strong>SahityaSanskritiHub</strong>. This is your space to manage your contributions, track your interactions, and engage with the global literary community.
                        </p>
                        <p>
                            Start your journey by exploring stories, poems, and research or by submitting your own creative work to the hub.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Profile;

