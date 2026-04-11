import { Mail, Award, BookOpen, MapPin } from 'lucide-react';

const Profile = () => {
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
                    boxShadow: 'var(--shadow-soft)'
                }}>
                    <img src="/profile.jpg" alt="Dr. Tilak Sarmah" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <h1 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--primary-maroon)' }}>
                    Dr. Tilak Sarmah
                </h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', color: 'var(--text-muted)', fontSize: '14px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                        <Award size={16} /> M.A., Ph.D.
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                        <BookOpen size={16} /> Writer, Author & Assistant Professor
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                        <MapPin size={16} /> Assam, India
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
                        <h3 style={{ fontSize: '14px', marginBottom: '2px' }}>Get in Touch</h3>
                        <p style={{ fontSize: '16px', fontWeight: 500, color: 'var(--primary-maroon)' }}>
                            tilaksarmah@gmail.com
                        </p>
                    </div>
                </div>

                {/* About Section */}
                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '20px', marginBottom: '16px', borderLeft: '4px solid var(--accent-gold)', paddingLeft: '12px' }}>
                        About Me
                    </h2>
                    <div style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: 'var(--text-charcoal)'
                    }}>
                        <p style={{ marginBottom: '16px' }}>
                            Dr. Tilak Sarmah is a distinguished scholar, author, and Assistant Professor based in Assam, India. With an M.A. and Ph.D. in Literature, his work bridges the gap between academic rigor and creative expression.
                        </p>
                        <p style={{ marginBottom: '16px' }}>
                            Through <strong>SahityaSanskritiHub</strong>, Dr. Sarmah curates a digital archive of his literary contributions, research journals, and creative writings. This platform serves as a reflection of his enduring dialogue with society, culture, and the written word.
                        </p>
                        <p>
                            He invites you to explore this collection and share in the journey of preservation and creation.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Profile;
