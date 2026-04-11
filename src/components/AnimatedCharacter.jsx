import React from 'react';
import { Book, Feather, Music, Wind, Sparkles } from 'lucide-react';

const SpiritOfSahitya = () => {
    return (
        <div className="spirit-container">
            <style>{`
                .spirit-container {
                    position: fixed;
                    z-index: 999;
                    pointer-events: none;
                    display: block;
                    width: 120px;
                    height: 120px;
                    /* Default Desktop Position (Bottom Right) */
                    bottom: 40px;
                    right: 40px;
                }

                /* Mobile Position Override (Top Right) */
                @media (max-width: 768px) {
                    .spirit-container {
                        bottom: auto;
                        top: 80px; /* Below the header nav */
                        right: 10px;
                        transform: scale(0.7); /* Slightly smaller on mobile to preserve screen space */
                    }
                }
                @keyframes levitate {
                    0% { transform: translateY(0px) translateZ(0); }
                    50% { transform: translateY(-20px) translateZ(0); }
                    100% { transform: translateY(0px) translateZ(0); }
                }
                @keyframes auraPulse {
                    /* Hardware accelerated opacity and scale instead of heavy layout-busting box shadows */
                    0% { transform: translate(-50%, -50%) scale(1) translateZ(0); opacity: 0.6; }
                    50% { transform: translate(-50%, -50%) scale(1.1) translateZ(0); opacity: 1; }
                    100% { transform: translate(-50%, -50%) scale(1) translateZ(0); opacity: 0.6; }
                }
                @keyframes orbit1 {
                    0% { transform: rotate(0deg) translateX(70px) rotate(0deg) translateZ(0); }
                    100% { transform: rotate(360deg) translateX(70px) rotate(-360deg) translateZ(0); }
                }
                @keyframes orbit2 {
                    0% { transform: rotate(120deg) translateX(80px) rotate(-120deg) translateZ(0); }
                    100% { transform: rotate(480deg) translateX(80px) rotate(-480deg) translateZ(0); }
                }
                @keyframes orbit3 {
                    0% { transform: rotate(240deg) translateX(75px) rotate(-240deg) translateZ(0); }
                    100% { transform: rotate(600deg) translateX(75px) rotate(-600deg) translateZ(0); }
                }
                @keyframes spinSlow {
                    0% { transform: rotate(0deg) translateZ(0); }
                    100% { transform: rotate(360deg) translateZ(0); }
                }
            `}</style>

            <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                animation: 'levitate 4s ease-in-out infinite',
                willChange: 'transform'
            }}>
                {/* 1. The Core Orb (Spirit) - Optimized static gradient and shadow */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 30% 30%, #FFD700, #B8860B, #8B0000)',
                    boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)', // Static, don't animate this
                    animation: 'auraPulse 3s infinite',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    willChange: 'transform, opacity'
                }}>
                    <Sparkles size={28} color="#FFF" style={{ animation: 'spinSlow 10s linear infinite', willChange: 'transform' }} />
                </div>

                {/* 2. Orbiting Elements (The Character's "Thoughts") */}

                {/* Book Orbit */}
                <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    marginTop: '-12px', marginLeft: '-12px',
                    animation: 'orbit1 12s linear infinite',
                    color: 'var(--primary-maroon)',
                    willChange: 'transform'
                }}>
                    <Book size={24} />
                </div>

                {/* Quill Orbit */}
                <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    marginTop: '-12px', marginLeft: '-12px',
                    animation: 'orbit2 15s linear infinite',
                    color: '#D4AF37',
                    willChange: 'transform'
                }}>
                    <Feather size={24} />
                </div>

                {/* Music Note Orbit */}
                <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    marginTop: '-12px', marginLeft: '-12px',
                    animation: 'orbit3 10s linear infinite',
                    color: '#8B0000',
                    willChange: 'transform'
                }}>
                    <Music size={24} />
                </div>
            </div>

            {/* 3. Aesthetic Label floating below */}
            <div style={{
                position: 'absolute',
                bottom: '-30px',
                width: '100%',
                textAlign: 'center',
                fontFamily: 'var(--font-heading)',
                fontSize: '12px',
                color: 'var(--accent-gold)',
                letterSpacing: '2px',
                opacity: 0.8,
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                whiteSpace: 'nowrap',
                left: '50%',
                transform: 'translateX(-50%)'
            }}>
                THE SPIRIT OF SAHITYA
            </div>
        </div>
    );
};

export default SpiritOfSahitya;
