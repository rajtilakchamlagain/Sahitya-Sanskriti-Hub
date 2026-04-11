import { forwardRef } from 'react';
import { PenTool } from 'lucide-react';

const PremiumShareCard = forwardRef(({ title, excerpt, author }, ref) => {
    return (
        <div ref={ref} style={{
            width: '600px', // Fixed width for consistent high-res capture
            minHeight: '800px',
            background: 'linear-gradient(135deg, #2c0404 0%, #4a0e0e 100%)', // Deep Luxury Maroon
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            color: '#f0e6d2', // Parmchment white text
            fontFamily: 'serif',
            overflow: 'hidden',
            border: '20px solid #1a0202' // Dark outer frame
        }}>
            {/* Gold Border Inlay */}
            <div style={{
                position: 'absolute',
                top: '20px', left: '20px', right: '20px', bottom: '20px',
                border: '2px solid rgba(255, 215, 0, 0.3)', // Gold sheen
                pointerEvents: 'none'
            }}></div>

            {/* Corner Ornaments (CSS Shapes) */}
            <div style={{ position: 'absolute', top: '30px', left: '30px', width: '40px', height: '40px', borderTop: '4px solid #D4AF37', borderLeft: '4px solid #D4AF37' }}></div>
            <div style={{ position: 'absolute', top: '30px', right: '30px', width: '40px', height: '40px', borderTop: '4px solid #D4AF37', borderRight: '4px solid #D4AF37' }}></div>
            <div style={{ position: 'absolute', bottom: '30px', left: '30px', width: '40px', height: '40px', borderBottom: '4px solid #D4AF37', borderLeft: '4px solid #D4AF37' }}></div>
            <div style={{ position: 'absolute', bottom: '30px', right: '30px', width: '40px', height: '40px', borderBottom: '4px solid #D4AF37', borderRight: '4px solid #D4AF37' }}></div>

            {/* Background Texture */}
            <div style={{
                position: 'absolute',
                top: '0', left: '0', width: '100%', height: '100%',
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 60%)',
                zIndex: 0
            }}></div>

            <div style={{ position: 'absolute', top: '10%', right: '-5%', opacity: 0.05, transform: 'rotate(-20deg)' }}>
                <PenTool size={300} color="white" />
            </div>

            {/* Brand Header */}
            <div style={{ zIndex: 1, marginBottom: '40px', textAlign: 'center' }}>
                <div style={{
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '4px',
                    color: '#D4AF37', // Gold
                    marginBottom: '8px'
                }}>
                    SahityaSanskritiHub
                </div>
                <div style={{ width: '60px', height: '1px', background: '#D4AF37', margin: '0 auto' }}></div>
            </div>

            {/* Title */}
            <h1 style={{
                zIndex: 1,
                fontSize: '48px',
                marginBottom: '24px',
                textAlign: 'center',
                color: '#ffffff',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                fontFamily: 'serif',
                lineHeight: '1.2'
            }}>
                {title}
            </h1>

            {/* Divider */}
            <div style={{
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '40px',
                opacity: 0.6
            }}>
                <div style={{ width: '40px', height: '1px', background: '#D4AF37' }}></div>
                <div style={{ width: '8px', height: '8px', background: '#D4AF37', transform: 'rotate(45deg)' }}></div>
                <div style={{ width: '40px', height: '1px', background: '#D4AF37' }}></div>
            </div>

            {/* Excerpt */}
            <div style={{
                zIndex: 1,
                fontSize: '22px',
                lineHeight: '2',
                textAlign: 'center',
                whiteSpace: 'pre-line',
                maxWidth: '80%',
                marginBottom: '40px',
                fontStyle: 'italic',
                color: '#f0f0f0'
            }}>
                {excerpt}
            </div>

            {/* Author */}
            <div style={{ zIndex: 1, textAlign: 'center', marginBottom: '60px' }}>
                <span style={{ fontSize: '16px', color: '#D4AF37', marginRight: '8px' }}>Authored By</span>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{author}</div>
            </div>

            {/* Footer Call to Action */}
            <div style={{
                zIndex: 1,
                position: 'absolute',
                bottom: '40px',
                textAlign: 'center',
                width: '100%'
            }}>
                <div style={{ fontSize: '14px', opacity: 0.7, letterSpacing: '1px' }}>
                    Read more at sahityasanskriti.online
                </div>
            </div>
        </div>
    );
});

PremiumShareCard.displayName = 'PremiumShareCard';

export default PremiumShareCard;
