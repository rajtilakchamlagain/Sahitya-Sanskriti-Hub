import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, Server } from 'lucide-react';

const Privacy = () => {
    return (
        <div style={{ paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-paper)' }}>
            {/* 1. Hero Section */}
            <div style={{
                background: 'var(--primary-maroon)',
                padding: '40px 24px 80px', // Extra bottom padding for overlap
                color: '#fff',
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#E5C560', marginBottom: '24px', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
                        <ArrowLeft size={18} /> Back to Home
                    </Link>
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', marginBottom: '8px' }}>Privacy Policy</h1>
                    <p style={{ opacity: 0.8, fontSize: '14px' }}>Last Updated: February 2026</p>
                </div>
            </div>

            {/* 2. Main Content (Legal Scroll) */}
            <div style={{ maxWidth: '800px', margin: '-40px auto 0', padding: '0 24px' }}>
                <div className="texture-paper" style={{
                    padding: '40px',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    backgroundColor: '#fff',
                    borderTop: '4px solid var(--accent-gold)'
                }}>

                    {/* Section 1 */}
                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-maroon)', fontSize: '20px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Eye size={20} color="var(--accent-gold)" /> Information We Collect
                        </h3>
                        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#444' }}>
                            We believe in privacy by default. You do not need an account to read stories or poems. However, to enhance your experience, we may collect:
                        </p>
                        <ul style={{ marginTop: '12px', paddingLeft: '24px', fontSize: '15px', lineHeight: '1.8', color: '#555' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Usage Analytics:</strong> Anonymous data via Vercel Analytics to understand popular content.</li>
                            <li><strong>Interaction Data:</strong> Comments and Likes are stored securely but are not linked to a personal profile unless you provide your name.</li>
                        </ul>
                    </div>

                    {/* Section 2 */}
                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-maroon)', fontSize: '20px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Shield size={20} color="var(--accent-gold)" /> How We Protect It
                        </h3>
                        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#444' }}>
                            We implement industry-standard security measures (HSTS, CSP, Encryption) to protect your browsing session. We do **not** sell, trade, or share your data with advertisers or third parties.
                        </p>
                    </div>

                    {/* Section 3 (New Info) */}
                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-maroon)', fontSize: '20px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Server size={20} color="var(--accent-gold)" /> Cookies & Storage
                        </h3>
                        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#444' }}>
                            We use <strong>Local Storage</strong> on your device to remember your "Liked" poems. This ensures your favorites stay with you without needing a cloud account. Clearing your browser cache will reset these preferences.
                        </p>
                    </div>

                    {/* Section 4 */}
                    <div>
                        <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-maroon)', fontSize: '20px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Lock size={20} color="var(--accent-gold)" /> Your Rights
                        </h3>
                        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#444' }}>
                            You have the right to browse anonymously. If you have commented on a story and wish for it to be removed, simply contact us, and we will delete it promptly.
                        </p>
                    </div>

                </div>

                {/* Footer Note */}
                <div style={{ textAlign: 'center', marginTop: '40px', color: 'var(--text-muted)', fontSize: '13px' }}>
                    <p>Protected by SahityaSanskritiHub & Vercel Security.</p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
