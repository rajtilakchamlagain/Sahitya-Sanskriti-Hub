import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Music } from 'lucide-react';

const ZubeenBanner = () => {
    return (
        <Link to="/zubeen-garg" style={{
            display: 'block',
            textDecoration: 'none',
            margin: '0 16px 24px 16px',
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
            border: '1px solid rgba(212, 175, 55, 0.4)', // Gold rim
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: 'scale(1)',
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.querySelector('.banner-bg').style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.querySelector('.banner-bg').style.transform = 'scale(1)';
        }}
        >
            {/* Background Image */}
            <div className="banner-bg" style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: `url('/images/zubeen_epic.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.6)',
                transition: 'transform 1s ease-out',
                zIndex: 0
            }} />

            {/* Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(to right, rgba(10,10,10,0.95), rgba(10,10,10,0.4))',
                zIndex: 1
            }} />

            {/* Content */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '260px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <Star size={16} color="#D4AF37" />
                    <span style={{ color: '#D4AF37', letterSpacing: '3px', fontSize: '13px', textTransform: 'uppercase', fontWeight: 600 }}>
                        विशेष स्मृति आलेख
                    </span>
                </div>

                <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(30px, 5vw, 40px)',
                    color: '#fff',
                    margin: '0 0 12px 0',
                    lineHeight: '1.2',
                    textShadow: '0 4px 12px rgba(0,0,0,0.5)'
                }}>
                    युग पुरुष:<br/>
                    <span style={{color: '#D4AF37'}}>जुबिन गर्ग (Zubeen Garg)</span>
                </h2>

                <p style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '16px',
                    fontStyle: 'italic',
                    marginBottom: '24px',
                    maxWidth: '440px',
                    lineHeight: '1.6'
                }}>
                    "हजार युगका साक्षी, हृदय करुणाका सागर..."<br/>
                    जीवन यात्रा, सांगीतिक साधना र अमर धरोहर।
                </p>

                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    backgroundColor: 'rgba(212, 175, 55, 0.2)',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    color: '#D4AF37',
                    padding: '10px 22px',
                    borderRadius: '24px',
                    width: 'fit-content',
                    fontWeight: 600,
                    backdropFilter: 'blur(4px)'
                }}>
                    अध्ययन गर्नुहोस् <ArrowRight size={18} />
                </div>
            </div>
            
            {/* Absolute Decor */}
            <div style={{ position: 'absolute', right: '30px', bottom: '30px', zIndex: 2, opacity: 0.2 }}>
                <Music size={120} color="#D4AF37" style={{ transform: 'rotate(-15deg)' }} />
            </div>
        </Link>
    );
};

export default ZubeenBanner;
