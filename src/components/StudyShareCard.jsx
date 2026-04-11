import { forwardRef } from 'react';
import { BookOpen, Feather } from 'lucide-react';

const StudyShareCard = forwardRef(({ title, excerpt, author }, ref) => {
    return (
        <div ref={ref} style={{
            width: '600px', // Fixed width for consistent high-res capture
            minHeight: '800px',
            background: '#FDFBF7', // Royal Ivory / Antique Parchment Light Theme
            padding: '50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            color: '#2A1B1A', // Deep Umber/Espresso text for high contrast focus
            fontFamily: 'serif',
            overflow: 'hidden',
            border: '24px solid #F4EAE0', // Soft creamy frame
            boxSizing: 'border-box'
        }}>
            {/* Inner Border Inlay */}
            <div style={{
                position: 'absolute',
                top: '12px', left: '12px', right: '12px', bottom: '12px',
                border: '1px solid #D4AF37', // Gold fine line
                pointerEvents: 'none'
            }}></div>

            {/* Corner Ornaments (CSS Shapes) */}
            <div style={{ position: 'absolute', top: '24px', left: '24px', width: '30px', height: '30px', borderTop: '2px solid #8B0000', borderLeft: '2px solid #8B0000' }}></div>
            <div style={{ position: 'absolute', top: '24px', right: '24px', width: '30px', height: '30px', borderTop: '2px solid #8B0000', borderRight: '2px solid #8B0000' }}></div>
            <div style={{ position: 'absolute', bottom: '24px', left: '24px', width: '30px', height: '30px', borderBottom: '2px solid #8B0000', borderLeft: '2px solid #8B0000' }}></div>
            <div style={{ position: 'absolute', bottom: '24px', right: '24px', width: '30px', height: '30px', borderBottom: '2px solid #8B0000', borderRight: '2px solid #8B0000' }}></div>

            {/* Watermark: Subtle Knowledge Iconography */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.03, zIndex: 0 }}>
                <div style={{
                    width: '400px', height: '400px', borderRadius: '50%', border: '2px solid #000',
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    <BookOpen size={200} color="#000" />
                </div>
            </div>

            {/* Top Brand Tag */}
            <div style={{ zIndex: 1, marginBottom: '30px', textAlign: 'center', width: '100%' }}>
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
                }}>
                    <Feather size={16} color="#8B0000" />
                    <span style={{
                        fontSize: '13px',
                        textTransform: 'uppercase',
                        letterSpacing: '5px',
                        color: '#8B0000', // Maroon
                        fontWeight: 'bold'
                    }}>
                        SahityaSanskriti.online
                    </span>
                </div>
                <div style={{
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'rgba(42, 27, 26, 0.6)',
                    marginTop: '12px'
                }}>
                    The Study Material Archive
                </div>
            </div>

            {/* Divider Top */}
            <div style={{ zIndex: 1, display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px', width: '60%', margin: '0 auto 40px auto' }}>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent)' }}></div>
                <div style={{ width: '6px', height: '6px', background: '#D4AF37', transform: 'rotate(45deg)' }}></div>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent)' }}></div>
            </div>

            {/* Title */}
            <h1 style={{
                zIndex: 1,
                fontSize: '48px',
                marginBottom: '40px',
                textAlign: 'center',
                color: '#8B0000', // Deep Maroon
                fontFamily: 'serif',
                lineHeight: '1.2',
                fontWeight: 'bold',
                padding: '0 20px'
            }}>
                {title}
            </h1>

            {/* Excerpt / Core Insight */}
            <div style={{
                zIndex: 1,
                fontSize: '24px',
                lineHeight: '1.8',
                textAlign: 'center',
                whiteSpace: 'pre-line',
                maxWidth: '85%',
                marginBottom: '50px',
                color: '#2A1B1A',
                fontWeight: '500'
            }}>
                {excerpt}
            </div>

            {/* Author / Source */}
            {author && (
            <div style={{ zIndex: 1, textAlign: 'center', marginBottom: '50px' }}>
                <div style={{ width: '40px', height: '2px', background: '#D4AF37', margin: '0 auto 16px auto' }}></div>
                <div style={{ fontSize: '14px', color: '#6B4A3C', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Curated By</div>
                <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#2A1B1A' }}>{author}</div>
            </div>
            )}

            {/* Footer Bottom / Strong Promotion */}
            <div style={{
                zIndex: 1,
                position: 'absolute',
                bottom: '40px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
            }}>
                <div style={{
                    padding: '8px 24px',
                    border: '1px solid rgba(139, 0, 0, 0.2)',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#8B0000',
                    backgroundColor: 'rgba(139, 0, 0, 0.03)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    Read the full guide free
                </div>
                <div style={{ fontSize: '13px', color: '#2A1B1A', letterSpacing: '2px', fontWeight: '500', opacity: 0.8 }}>
                    WWW.SAHITYASANSKRITI.ONLINE
                </div>
            </div>
        </div>
    );
});

StudyShareCard.displayName = 'StudyShareCard';

export default StudyShareCard;
