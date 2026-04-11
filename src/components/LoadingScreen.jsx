import { useEffect, useState } from 'react';
import { Feather } from 'lucide-react';

const LoadingScreen = () => {
    const [show, setShow] = useState(true);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        // Smooth fade in
        requestAnimationFrame(() => setOpacity(1));

        // Ensure it stays visible for at least 1.5s to show off the animation
        const timer = setTimeout(() => {
            setOpacity(0);
            setTimeout(() => setShow(false), 500); // Wait for fade out
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #2c0404 0%, #4a0e0e 100%)', // Deep Luxury Maroon
            zIndex: 9999,
            opacity: opacity,
            transition: 'opacity 0.5s ease-in-out'
        }}>
            {/* Animation Container */}
            <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                {/* 1. Pulse Ripples */}
                {[0, 1, 2].map((i) => (
                    <div key={i} style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '1px solid rgba(197, 160, 40, 0.3)', // Gold Transparent
                        animation: `ripple 3s infinite cubic-bezier(0, 0.2, 0.8, 1) ${i * 0.5}s`
                    }} />
                ))}

                {/* 2. Rotating Gold Ring */}
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    borderRight: '3px solid #C5A028',
                    borderTop: '3px solid transparent',
                    borderLeft: '3px solid transparent',
                    borderBottom: '3px solid transparent',
                    animation: 'spin 3s linear infinite'
                }} />

                {/* 3. Central Icon (Floating Logo) */}
                <div style={{ animation: 'float 3s ease-in-out infinite' }}>
                    <img
                        src="/logo.png"
                        alt="Sahitya Sanskriti Logo"
                        style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 4px 6px rgba(197, 160, 40, 0.3))' // Gold Glow
                        }}
                    />
                </div>
            </div>

            {/* Text */}
            <div style={{
                marginTop: '32px',
                textAlign: 'center'
            }}>
                <h2 style={{
                    fontFamily: "'Noto Serif Devanagari', serif",
                    color: '#fff',
                    fontSize: '24px',
                    fontWeight: '300',
                    margin: 0,
                    letterSpacing: '2px',
                    animation: 'fadeInUp 1s ease-out'
                }}>
                    Sahitya<span style={{ color: '#C5A028', fontWeight: 'bold' }}>Sanskriti</span>
                </h2>
                <p style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '12px',
                    marginTop: '8px',
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    animation: 'fadeInUp 1s ease-out 0.2s backwards'
                }}>
                    Crafting Experiences
                </p>
            </div>

            <style>
                {`
                    @keyframes spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    @keyframes ripple {
                        0% { transform: scale(0.5); opacity: 0; }
                        50% { opacity: 1; }
                        100% { transform: scale(1.5); opacity: 0; }
                    }
                    @keyframes float {
                        0%, 100% { transform: translateY(0) rotate(-5deg); }
                        50% { transform: translateY(-10px) rotate(5deg); }
                    }
                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}
            </style>
        </div>
    );
};

export default LoadingScreen;
