import React, { useEffect, useState } from 'react';
import { Feather, Wind, Sparkles, BookHeart } from 'lucide-react';

const ImmersivePoetryBackground = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Generate random values for particles so they don't look uniform
    const generateParticles = (count) => {
        return Array.from({ length: count }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 4 + 2, // reduced size slightly to hide lack of massive shadow
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
        }));
    };

    // Reduced counts for performance (mobile friendly)
    const fireflies = generateParticles(12);
    const leaves = generateParticles(8);
    const glyphs = ['क', 'ख', 'ग', 'ज्ञान', 'शान्ति', 'प्रेम', 'साहित्य', 'कला'];

    if (!mounted) return null;

    return (
        <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.6,
            transform: 'translateZ(0)' // Hardware acceleration for the container
        }}>
            {/* CSS Keyframes injected here for pure localized styling */}
            <style>{`
                /* Hardware Accelerated Keyframes */
                @keyframes floatUp {
                    0% { transform: translateY(100vh) scale(0) translateZ(0); opacity: 0; }
                    20% { opacity: 0.6; }
                    80% { opacity: 0.4; }
                    100% { transform: translateY(-200px) scale(1.5) translateZ(0); opacity: 0; }
                }

                @keyframes driftDown {
                    /* Pre-calculate rotations to avoid heavy compounding */
                    0% { transform: translateY(-100px) rotate(0deg) translateX(0px) translateZ(0); opacity: 0; }
                    10% { opacity: 0.8; }
                    90% { opacity: 0.5; }
                    100% { transform: translateY(100vh) rotate(360deg) translateX(100px) translateZ(0); opacity: 0; }
                }

                @keyframes pulseOpacity {
                    /* Removed heavy filter: drop-shadow. Opacity is much cheaper */
                    0% { opacity: 0.02; transform: scale(1) translateZ(0); }
                    50% { opacity: 0.08; transform: scale(1.05) translateZ(0); }
                    100% { opacity: 0.02; transform: scale(1) translateZ(0); }
                }

                @keyframes slowSpin {
                    0% { transform: rotate(0deg) translateZ(0); }
                    100% { transform: rotate(360deg) translateZ(0); }
                }

                @keyframes writingFloat {
                    0% { transform: translate(0, 0) rotate(-15deg) translateZ(0); }
                    33% { transform: translate(15px, -10px) rotate(-10deg) translateZ(0); }
                    66% { transform: translate(5px, 10px) rotate(-20deg) translateZ(0); }
                    100% { transform: translate(0, 0) rotate(-15deg) translateZ(0); }
                }
            `}</style>


            {/* 1. Fireflies: Removed heavy box-shadow, using radial gradients and opacity */}
            {fireflies.map((f) => (
                <div key={`firefly-${f.id}`} style={{
                    position: 'absolute',
                    left: f.left,
                    bottom: '-20px',
                    width: `${f.size * 2}px`, // slightly larger to compensate for lack of shadow
                    height: `${f.size * 2}px`,
                    background: 'radial-gradient(circle, rgba(212,175,55,1) 0%, rgba(212,175,55,0) 70%)',
                    borderRadius: '50%',
                    animation: `floatUp ${f.duration}s linear ${f.delay}s infinite`,
                    opacity: 0,
                    willChange: 'transform, opacity' // Critical for GPU
                }} />
            ))}

            {/* 2. Falling Leaves */}
            {leaves.map((l) => (
                <div key={`leaf-${l.id}`} style={{
                    position: 'absolute',
                    left: l.left,
                    top: '-50px',
                    animation: `driftDown ${l.duration + 5}s linear ${l.delay}s infinite`,
                    opacity: 0,
                    color: l.id % 2 === 0 ? 'var(--primary-maroon)' : '#D4AF37',
                    willChange: 'transform, opacity'
                }}>
                    <Wind size={l.size * 4} opacity={0.3} />
                </div>
            ))}

            {/* 3. Floating Literary Glyphs */}
            {glyphs.map((glyph, index) => (
                <div key={`glyph-${index}`} style={{
                    position: 'absolute',
                    left: index % 2 === 0 ? '5%' : '90%',
                    top: `${15 + (index * 10)}%`,
                    fontFamily: 'var(--font-heading)',
                    fontSize: index % 2 === 0 ? '48px' : '32px',
                    color: 'var(--primary-maroon)',
                    animation: `pulseOpacity 8s infinite ${index}s`,
                    userSelect: 'none',
                    fontWeight: 800,
                    willChange: 'transform, opacity'
                }}>
                    {glyph}
                </div>
            ))}

            {/* 4. The Giant "Writing" Quill Character in the Background Center-Left */}
            <div style={{
                position: 'fixed',
                top: '30%',
                left: '-2%',
                animation: 'writingFloat 8s ease-in-out infinite',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                willChange: 'transform',
                opacity: 0.8 // Opacity handled here statically, not animated per frame 
            }}>
                <Feather size={350} color="var(--primary-maroon)" strokeWidth={1} style={{ opacity: 0.05 }} />
                <Sparkles size={100} color="#D4AF37" style={{ marginTop: '-80px', animation: 'slowSpin 12s linear infinite', opacity: 0.1, willChange: 'transform' }} />
            </div>

            {/* 5. The Book of Knowledge (Center Right) */}
            <div style={{
                position: 'fixed',
                top: '60%',
                right: '-5%',
                animation: 'pulseOpacity 12s ease-in-out infinite',
                willChange: 'transform, opacity'
            }}>
                <BookHeart size={400} fill="var(--primary-maroon)" strokeWidth={0.5} style={{ opacity: 0.5 }} /> {/* Inner opacity scaling */}
            </div>

        </div>
    );
};

export default ImmersivePoetryBackground;
