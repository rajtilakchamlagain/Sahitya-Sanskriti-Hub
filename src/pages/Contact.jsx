import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <div style={{ paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-paper)' }}>
            {/* 1. Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #2c0404 0%, #4a0e0e 100%)',
                padding: '40px 24px 120px', // Extra bottom padding for overlap
                color: '#fff',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative Elements */}
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', opacity: 0.05 }}>
                    <MessageSquare size={300} color="#fff" />
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#E5C560', marginBottom: '24px', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
                        <ArrowLeft size={18} /> Back to Home
                    </Link>
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', marginBottom: '16px' }}>Contact Us</h1>
                    <p style={{ opacity: 0.9, fontSize: '18px', maxWidth: '500px', lineHeight: '1.6', fontFamily: 'serif' }}>
                        We'd love to hear from you. Share your thoughts, suggestions, or just say hello.
                    </p>
                </div>
            </div>

            {/* 2. Main Content Card */}
            <div style={{ maxWidth: '900px', margin: '-80px auto 0', padding: '0 24px' }}>
                <div className="texture-paper" style={{
                    borderRadius: '24px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                    backgroundColor: '#fff',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column', // Mobile First
                    border: '1px solid rgba(139, 0, 0, 0.1)'
                }}>

                    {/* Desktop Split Layout logic handled via flex-wrap/media queries equivalent */}
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                        {/* Left: Contact Info (Dark Panel) */}
                        <div style={{
                            flex: '1 1 300px',
                            background: '#F9F5F0', // Light parchment
                            padding: 'clamp(24px, 5vw, 40px)',
                            borderRight: '1px solid rgba(0,0,0,0.05)'
                        }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-maroon)', fontSize: '24px', marginBottom: '32px' }}>
                                Get in Touch
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{
                                        width: '48px', height: '48px',
                                        borderRadius: '12px',
                                        background: 'var(--bg-paper)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                        color: 'var(--primary-maroon)',
                                        flexShrink: 0
                                    }}>
                                        <Mail size={24} />
                                    </div>
                                    <div style={{ minWidth: 0 }}>
                                        <h4 style={{ margin: '0 0 4px', fontSize: '14px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</h4>
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tilaksarmah@gmail.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: 'clamp(16px, 4vw, 18px)', fontWeight: 600, color: 'var(--text-charcoal)', textDecoration: 'none', wordBreak: 'break-word' }}>
                                            tilaksarmah@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{
                                        width: '48px', height: '48px',
                                        borderRadius: '12px',
                                        background: 'var(--bg-paper)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                        color: 'var(--primary-maroon)',
                                        flexShrink: 0
                                    }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ margin: '0 0 4px', fontSize: '14px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</h4>
                                        <p style={{ margin: 0, fontSize: '18px', fontWeight: 600, color: 'var(--text-charcoal)' }}>
                                            Assam, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Message Form */}
                        <div style={{ flex: '999 1 300px', padding: 'clamp(24px, 5vw, 40px)' }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-maroon)', fontSize: '24px', marginBottom: '24px' }}>
                                Send a Message
                            </h3>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#666', textTransform: 'uppercase' }}>Name</label>
                                        <input type="text" placeholder="Your Name" style={{
                                            width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #eee', background: '#FAFAFA', fontSize: '15px', boxSizing: 'border-box'
                                        }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#666', textTransform: 'uppercase' }}>Email</label>
                                        <input type="email" placeholder="Your Email" style={{
                                            width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #eee', background: '#FAFAFA', fontSize: '15px', boxSizing: 'border-box'
                                        }} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#666', textTransform: 'uppercase' }}>Message</label>
                                    <textarea rows="5" placeholder="Write your thoughts here..." style={{
                                        width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #eee', background: '#FAFAFA', fontSize: '15px', fontFamily: 'sans-serif', resize: 'vertical', boxSizing: 'border-box'
                                    }}></textarea>
                                </div>

                                <button type="button" style={{
                                    marginTop: '8px',
                                    backgroundColor: 'var(--primary-maroon)',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '16px 32px',
                                    borderRadius: '12px',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    transition: 'transform 0.2s',
                                    boxShadow: '0 4px 12px rgba(139, 0, 0, 0.2)',
                                    width: '100%'
                                }}>
                                    <Send size={18} /> Send Message
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
