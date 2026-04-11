import React, { useMemo } from 'react';

const BossTierStudyBackground = () => {
    // Generate organic trajectories for intense glowing artifacts
    const fireflies = useMemo(() => Array.from({ length: 30 }).map((_, i) => ({
        id: `ff-${i}`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 8 + Math.random() * 10,
        delay: Math.random() * -20,
        scale: Math.random() * 1.5 + 0.5,
    })), []);

    const floatingBooks = useMemo(() => Array.from({ length: 5 }).map((_, i) => ({
        id: `book-${i}`, left: `${Math.random() * 80 + 10}%`,
        duration: 20 + Math.random() * 15, delay: Math.random() * -10,
        scale: 0.6 + Math.random() * 0.8,
        rotate: Math.random() * 360
    })), []);

    const floatingQuills = useMemo(() => Array.from({ length: 6 }).map((_, i) => ({
        id: `quill-${i}`, left: `${Math.random() * 80 + 10}%`,
        duration: 25 + Math.random() * 20, delay: Math.random() * -15,
        scale: 0.7 + Math.random() * 0.5,
        rotate: Math.random() * 180 - 90
    })), []);

    const lotuses = useMemo(() => Array.from({ length: 4 }).map((_, i) => ({
        id: `lotus-${i}`, left: `${Math.random() * 80 + 10}%`,
        duration: 35 + Math.random() * 10, delay: Math.random() * -5,
        scale: 0.8 + Math.random() * 1.2,
    })), []);

    return (
        <div style={{ 
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
            overflow: 'hidden', pointerEvents: 'none', zIndex: 0,
            background: 'linear-gradient(135deg, #FFF9E6 0%, #F5DEB3 50%, #FFEFD5 100%)',
            backgroundSize: '400% 400%',
            animation: 'bossGradientShift 15s ease infinite'
        }}>
            <style>
                {`
                @keyframes bossGradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes floatUpArtifact {
                    0% { transform: translateY(110vh) translateX(0) scale(var(--scale)) rotate(var(--rot)); opacity: 0; }
                    20% { opacity: 0.4; }
                    80% { opacity: 0.4; }
                    100% { transform: translateY(-20vh) translateX(30px) scale(var(--scale)) rotate(calc(var(--rot) + 45deg)); opacity: 0; }
                }
                @keyframes orbitFireflyBoss {
                    0% { transform: translate(0, 0) scale(var(--scale)); opacity: 0.3; }
                    33% { transform: translate(40px, -60px) scale(calc(var(--scale) * 1.8)); opacity: 0.9; }
                    66% { transform: translate(-30px, -30px) scale(calc(var(--scale) * 0.7)); opacity: 0.3; }
                    100% { transform: translate(0, 0) scale(var(--scale)); opacity: 0.3; }
                }
                @keyframes radialPulse {
                    0% { transform: scale(1); opacity: 0.05; }
                    50% { transform: scale(1.2); opacity: 0.15; }
                    100% { transform: scale(1); opacity: 0.05; }
                }
                `}
            </style>

            {/* Pulsing Light Cores */}
            <div style={{ position: 'absolute', top: '10%', left: '10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, #D4AF37 0%, transparent 60%)', filter: 'blur(60px)', animation: 'radialPulse 10s infinite alternate', opacity: 0.15 }}></div>
            <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, #8B0000 0%, transparent 70%)', filter: 'blur(80px)', animation: 'radialPulse 15s infinite alternate-reverse', opacity: 0.1 }}></div>

            {/* Immersive Floating Elements */}
            {floatingBooks.map(item => (
                <div key={item.id} style={{
                    position: 'absolute', left: item.left, bottom: '-10%',
                    '--scale': item.scale, '--rot': `${item.rotate}deg`,
                    animation: `floatUpArtifact ${item.duration}s infinite linear ${item.delay}s`,
                    opacity: 0.3, color: '#8B0000'
                }}>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                </div>
            ))}

            {floatingQuills.map(item => (
                <div key={item.id} style={{
                    position: 'absolute', left: item.left, bottom: '-10%',
                    '--scale': item.scale, '--rot': `${item.rotate}deg`,
                    animation: `floatUpArtifact ${item.duration}s infinite linear ${item.delay}s`,
                    opacity: 0.4, color: '#D4AF37'
                }}>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2c.5 3.5 2 6.5 4.5 9s5.5 4 9 4.5c-3.5.5-6.5 2-9 4.5s-4 5.5-4.5 9c-.5-3.5-2-6.5-4.5-9s-5.5-4-9-4.5c3.5-.5 6.5-2 9-4.5s4-5.5 4.5-9z"></path></svg>
                </div>
            ))}

            {lotuses.map(item => (
                <div key={item.id} style={{
                    position: 'absolute', left: item.left, bottom: '-10%',
                    '--scale': item.scale, '--rot': '0deg',
                    animation: `floatUpArtifact ${item.duration}s infinite linear ${item.delay}s`,
                    opacity: 0.25, color: '#FF7F50' // Coral/Warm glow
                }}>
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c4-4 8-10 8-14 0-4-4-6-8-6s-8 2-8 6c0 4 4 10 8 14z"></path></svg>
                </div>
            ))}

            {/* Glowing Dust/Fireflies */}
            {fireflies.map(ff => (
                <div key={ff.id} style={{
                    position: 'absolute', left: ff.left, top: ff.top,
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: '#ffffff',
                    boxShadow: '0 0 12px 3px #D4AF37',
                    '--scale': ff.scale,
                    animation: `orbitFireflyBoss ${ff.duration}s infinite ease-in-out ${ff.delay}s`,
                    willChange: 'transform, opacity'
                }}></div>
            ))}
        </div>
    );
};

export default BossTierStudyBackground;
