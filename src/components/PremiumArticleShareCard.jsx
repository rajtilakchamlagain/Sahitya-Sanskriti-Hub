import React, { forwardRef } from 'react';
import { Quote } from 'lucide-react';

const PremiumArticleShareCard = forwardRef(({ title, excerpt, author }, ref) => {
    return (
        <div
            ref={ref}
            style={{
                width: '1080px',
                height: '1080px',
                background: 'linear-gradient(135deg, #1A1A1A 0%, #2A1111 100%)',
                padding: '80px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                fontFamily: 'auto', // We will rely on inline standard fonts like Georgia/system
                color: '#ffffff',
                boxSizing: 'border-box',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Ambient Background Glows */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-20%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                zIndex: 0
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-20%',
                left: '-20%',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(139, 0, 0, 0.2) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                zIndex: 0
            }} />

            {/* Content Container */}
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>

                {/* Header: Logo & Site Name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '80px' }}>
                    <img src="/logo.png" alt="Logo" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                    <div style={{ borderLeft: '3px solid #D4AF37', paddingLeft: '24px', height: '50px', display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '36px', letterSpacing: '4px', textTransform: 'uppercase', color: '#D4AF37', fontWeight: 'bold', fontFamily: 'system-ui, sans-serif' }}>
                            SahityaSanskriti.online
                        </span>
                    </div>
                </div>

                {/* Main Content Area */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                    {/* Giant Decorative Quote Icon */}
                    <div style={{ marginBottom: '32px', color: 'rgba(212, 175, 55, 0.4)' }}>
                        <Quote size={80} strokeWidth={1} />
                    </div>

                    <h1 style={{
                        fontSize: '64px',
                        lineHeight: '1.2',
                        fontWeight: '700',
                        marginBottom: '40px',
                        color: '#ffffff',
                        fontFamily: 'Georgia, serif',
                        textShadow: '0 4px 12px rgba(0,0,0,0.5)'
                    }}>
                        {title}
                    </h1>

                    <p style={{
                        fontSize: '36px',
                        lineHeight: '1.6',
                        color: 'rgba(255, 255, 255, 0.85)',
                        borderLeft: '4px solid rgba(212, 175, 55, 0.5)',
                        paddingLeft: '32px',
                        fontStyle: 'italic',
                        fontFamily: 'Georgia, serif',
                        maxWidth: '90%'
                    }}>
                        "{excerpt}"
                    </p>

                    <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ width: '60px', height: '2px', backgroundColor: '#D4AF37' }}></div>
                        <span style={{ fontSize: '32px', color: '#D4AF37', fontWeight: '600', fontFamily: 'system-ui, sans-serif', letterSpacing: '1px' }}>
                            {author}
                        </span>
                    </div>

                </div>

                {/* Footer CTA */}
                <div style={{
                    marginTop: 'auto',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    paddingTop: '40px',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        border: '2px solid rgba(212, 175, 55, 0.3)',
                        padding: '24px 64px',
                        borderRadius: '50px',
                        fontSize: '28px',
                        fontWeight: '600',
                        color: '#D4AF37',
                        letterSpacing: '2px',
                        fontFamily: 'system-ui, sans-serif'
                    }}>
                        Read the full article exclusively on our website
                    </div>
                </div>

            </div>
        </div>
    );
});

export default PremiumArticleShareCard;
