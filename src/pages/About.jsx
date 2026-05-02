import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Award, BookOpen, Feather } from 'lucide-react';

const About = () => {
    return (
        <div style={{ paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-paper)' }}>

            {/* 1. Hero Section (Deep Maroon Background) */}
            <div style={{
                background: 'linear-gradient(135deg, #2c0404 0%, #4a0e0e 100%)',
                padding: '40px 24px 120px', // Extra bottom padding for overlap
                color: '#fff',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative Background Elements */}
                <div style={{ position: 'absolute', top: '-20%', right: '-10%', opacity: 0.05, transform: 'rotate(15deg)' }}>
                    <Feather size={300} color="#fff" />
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#E5C560', marginBottom: '32px', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
                        <ArrowLeft size={18} /> Back to Home
                    </Link>

                    <h1 style={{
                        fontFamily: 'var(--font-heading)',
                        color: '#fff',
                        fontSize: 'clamp(32px, 5vw, 48px)', // Responsive text
                        marginBottom: '16px',
                        lineHeight: '1.2'
                    }}>
                        About <br />
                        <span style={{ color: '#E5C560' }}>Sahitya Sanskriti Hub</span>
                    </h1>
                    <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '600px', lineHeight: '1.6', fontFamily: 'serif', fontStyle: 'italic' }}>
                        "Preserving the soul of literature in a digital age."
                    </p>
                </div>
            </div>

            {/* 2. Main Content Card (Overlapping the Hero) */}
            <div style={{
                maxWidth: '800px',
                margin: '-80px auto 0', // Negative margin for overlap
                padding: '0 24px'
            }}>
                <div className="texture-paper" style={{
                    padding: '32px',
                    borderRadius: '24px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(139, 0, 0, 0.1)',
                    backgroundColor: '#fff',
                    position: 'relative'
                }}>
                    {/* Mission Section */}
                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--primary-maroon)',
                            fontSize: '24px',
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <BookOpen size={24} color="var(--accent-gold)" />
                            The Hub's Mission
                        </h3>
                        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '16px' }}>
                            <strong>SahityaSanskritiHub</strong> is a digital sanctuary for literature, culture, and human values. In an era of fleeting digital noise, we strive to offer content that pauses time, provokes thought, and touches the soul.
                        </p>
                    </div>

                    <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, var(--accent-gold), transparent)', opacity: 0.3, margin: '40px 0' }}></div>

                    {/* Community Section */}
                    <div>
                        <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--primary-maroon)',
                            fontSize: '24px',
                            marginBottom: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <Award size={24} color="var(--accent-gold)" />
                            The Community
                        </h3>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <div>
                                <h4 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--text-charcoal)' }}>A Collective Vision</h4>
                                <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>Identity through Literature</p>
                                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#555' }}>
                                    We are passionate about Indian literature and social values. Our platform explores themes of human resilience, nature, and the subtle emotions of daily life. Through the collective voice of our contributors, we aim to preserve and celebrate our shared cultural heritage.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Developer Credit (Subtle & Clean) */}
                <div style={{
                    marginTop: '40px',
                    textAlign: 'center',
                    padding: '24px',
                }}>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        Designed & Developed By
                    </p>
                    <div style={{
                        background: '#fff',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 24px',
                        borderRadius: '50px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        border: '1px solid rgba(0,0,0,0.05)',
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--primary-maroon)' }}>Rajtilak Chamlagain</span>
                            <span style={{ fontSize: '11px', color: '#888' }}>B.Tech CSE Student</span>
                        </div>
                        <a href="mailto:rjtiksrm@gmail.com" style={{
                            background: 'var(--bg-paper-dark)',
                            padding: '8px',
                            borderRadius: '50%',
                            display: 'flex',
                            color: 'var(--text-charcoal)',
                            cursor: 'pointer',
                            textDecoration: 'none'
                        }}>
                            <Mail size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
