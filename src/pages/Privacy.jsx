import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, Server, Cookie, Bell } from 'lucide-react';

const Privacy = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const policies = [
        {
            icon: Eye,
            title: "Information We Collect",
            content: "We believe in privacy by default. You do not need an account to read stories or poems. However, to enhance your experience, we may collect:",
            bullets: [
                "Usage Analytics: Anonymous, aggregated data via Vercel and Umami Analytics to help us understand which literary pieces and search topics resonate most with our readers.",
                "Tribute Interactions: On special sections (e.g., Zubeen Garg Hub), we track 'Likes' and 'Shares' to display global engagement counters. This data is fully anonymized and not linked to individual identities.",
                "Multilingual pSEO: Our reach expansion system utilizes non-tracking landing pages to serve content in regional languages (Assamese, Hindi) without capturing user-specific identifiers.",
                "Push Notifications: Device tokens are securely managed by OneSignal if you explicitly opt-in to receive alerts for new releases."
            ]
        },
        {
            icon: Shield,
            title: "How We Protect It",
            content: "We implement rigorous, industry-standard security protocols (including HSTS, CSP, and end-to-end HTTPS Encryption) to protect your browsing session. We fundamentally oppose data brokerage algorithms; we do not sell, trade, or share your usage data with any advertisers or third-party networks. Our commitment is strictly to literature, culture, and your peace of mind."
        },
        {
            icon: Server,
            title: "Cookies & Local Storage",
            content: "We deeply respect your digital footprint. Instead of tracking cookies, we prioritize Local Storage on your personal device to seamlessly remember your \"Liked\" poems, reading progress, and UI preferences. This decentralized approach ensures your literary favorites stay with you securely, without necessitating a centralized cloud account. Clearing your browser cache will gracefully reset these preferences."
        },
        {
            icon: Lock,
            title: "Your Rights & Ultimate Control",
            content: "You possess the absolute right to browse this repository anonymously. If you have contributed a comment to a story and subsequently wish for it to be removed, or if you wish to revoke push notification access at any moment, you maintain full overriding control through your browser's native settings or by contacting our administration directly."
        }
    ];

    return (
        <div style={{ paddingBottom: '80px', minHeight: '100vh', backgroundColor: 'var(--bg-paper)' }}>

            {/* 1. Premium Hero Section */}
            <div style={{
                position: 'relative',
                background: 'linear-gradient(135deg, var(--primary-maroon) 0%, #4A0E17 100%)',
                padding: '80px 24px 100px', // Extra bottom padding for the cards to overlap
                color: '#fff',
                overflow: 'hidden',
                textAlign: 'center'
            }}>
                {/* Subtle Background Pattern / Ambient Glow */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '800px',
                    height: '800px',
                    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%',
                    pointerEvents: 'none'
                }} />

                <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
                    <Link
                        to="/"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: 'var(--accent-gold)',
                            marginBottom: '32px',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: 600,
                            padding: '8px 16px',
                            backgroundColor: 'rgba(212, 175, 55, 0.1)',
                            borderRadius: '50px',
                            border: '1px solid rgba(212, 175, 55, 0.2)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <ArrowLeft size={18} /> Return to Sanctum
                    </Link>

                    <h1 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '48px',
                        marginBottom: '16px',
                        color: '#ffffff',
                        textShadow: '0 4px 12px rgba(0,0,0,0.3)'
                    }}>
                        Privacy Policy
                    </h1>

                    <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        fontFamily: 'var(--font-body)',
                        letterSpacing: '1px'
                    }}>
                        Transparency, Security, and Respect for the Reader.
                        <br />
                        <span style={{ fontSize: '13px', opacity: 0.7, marginTop: '8px', display: 'block' }}>Last Updated: April 19, 2026</span>
                    </p>
                </div>
            </div>

            {/* 2. Main Content Grid (Overlapping the Hero) */}
            <div style={{
                maxWidth: '800px',
                margin: '-60px auto 0',
                padding: '0 24px',
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
            }}>
                {policies.map((policy, index) => (
                    <div
                        key={index}
                        className="card-base"
                        style={{
                            padding: '40px',
                            backgroundColor: '#ffffff',
                            borderRadius: '20px',
                            boxShadow: '0 12px 40px rgba(0,0,0,0.06)',
                            borderTop: '0',
                            borderLeft: '4px solid var(--accent-gold)'
                        }}
                    >
                        {/* Section Header */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '14px',
                                backgroundColor: 'rgba(212, 175, 55, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <policy.icon size={24} color="var(--accent-gold)" />
                            </div>
                            <h2 style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--primary-maroon)',
                                fontSize: '24px',
                                margin: 0
                            }}>
                                {policy.title}
                            </h2>
                        </div>

                        {/* Section Content */}
                        <div style={{ paddingLeft: '64px' }}> {/* Align with text, not icon */}
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: 'var(--text-charcoal)',
                                opacity: 0.9,
                                marginBottom: policy.bullets ? '16px' : '0'
                            }}>
                                {policy.content}
                            </p>

                            {/* Optional Bullets */}
                            {policy.bullets && (
                                <ul style={{
                                    paddingLeft: '20px',
                                    fontSize: '15px',
                                    lineHeight: '1.8',
                                    color: 'var(--text-muted)'
                                }}>
                                    {policy.bullets.map((bullet, i) => {
                                        const [boldPart, restPart] = bullet.split(': ');
                                        return (
                                            <li key={i} style={{ marginBottom: '12px' }}>
                                                <strong style={{ color: 'var(--text-charcoal)' }}>{boldPart}</strong>: {restPart}
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}

                {/* Footer Note */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '48px',
                    color: 'var(--text-muted)',
                    fontSize: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <Shield size={24} color="rgba(139, 0, 0, 0.2)" />
                    <p>Protected by SahityaSanskritiHub & Enterprise-grade Edge Security.</p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
