import { BookOpen, Bell, Clock, Star } from 'lucide-react';

const StudyMaterial = () => {
    return (
        <div style={{ minHeight: '100vh', paddingBottom: '80px' }}>

            {/* Disclaimer / Coming Soon Context */}
            <div style={{ padding: '0 16px', marginTop: '24px' }}>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', color: 'var(--primary-maroon)', marginBottom: '8px' }}>
                    Study Material
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
                    Academic resources for students and scholars.
                </p>
            </div>

            {/* Premium Hero Card */}
            <div style={{
                margin: '24px 16px',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                height: '400px',
                backgroundColor: '#2C2C2C',
                boxShadow: 'var(--shadow-soft)'
            }}>
                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop"
                    alt="Study Discipline"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.6
                    }}
                />

                {/* Overlay Content */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '32px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center',
                        marginBottom: '16px',
                        background: 'rgba(255,255,255,0.1)',
                        width: 'fit-content',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        backdropFilter: 'blur(4px)'
                    }}>
                        <Clock size={14} color="var(--accent-gold)" />
                        <span style={{ color: 'white', fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px' }}>COMING SOON</span>
                    </div>

                    <h2 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '32px',
                        color: 'white',
                        lineHeight: 1.3,
                        marginBottom: '16px'
                    }}>
                        "The beautiful thing about learning is that no one can take it away from you."
                    </h2>

                    <p style={{
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '14px',
                        fontStyle: 'italic',
                        marginBottom: '0'
                    }}>
                        — B.B. King
                    </p>
                </div>
            </div>

            {/* Functional Placeholder Area */}
            <div style={{ padding: '0 16px', textAlign: 'center' }}>
                <div style={{
                    padding: '40px 24px',
                    borderRadius: '16px',
                    backgroundColor: 'white',
                    border: '1px dashed rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px'
                }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        backgroundColor: '#FFF5F5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <BookOpen size={32} color="var(--primary-maroon)" />
                    </div>

                    <div>
                        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-charcoal)' }}>Curating Resources</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6, maxWidth: '300px', margin: '0 auto' }}>
                            We are currently compiling comprehensive notes, question banks, and syllabus guides for Nepali Literature students.
                        </p>
                    </div>

                    <button style={{
                        marginTop: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        backgroundColor: 'var(--primary-maroon)',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '30px',
                        fontSize: '14px',
                        fontWeight: 500,
                        boxShadow: '0 4px 12px rgba(128,0,0,0.2)'
                    }}>
                        <Bell size={16} />
                        <span>Notify Me When Ready</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default StudyMaterial;
