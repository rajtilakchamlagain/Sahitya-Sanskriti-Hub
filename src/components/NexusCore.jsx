import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Fingerprint, LogOut, User, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const NexusCore = () => {
    const { currentUser, login, logout } = useAuth();
    const [isScanning, setIsScanning] = useState(false);

    const handleLogin = async () => {
        setIsScanning(true);
        // Artificial delay for the "Identity Scan" effect
        setTimeout(async () => {
            try {
                await login();
            } catch (err) {
                console.error(err);
            } finally {
                setIsScanning(false);
            }
        }, 1500);
    };

    if (currentUser) {
        return (
            <div className="nexus-container" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to="/profile" className="identity-orb logged-in" style={{
                    position: 'relative',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    padding: '2px',
                    background: 'linear-gradient(135deg, var(--primary-maroon), var(--accent-gold))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 0 15px rgba(139, 0, 0, 0.3)'
                }}>
                    <img 
                        src={currentUser.photoURL} 
                        alt={currentUser.displayName} 
                        style={{ width: '100%', height: '100%', borderRadius: '50%', border: '2px solid white' }} 
                    />
                </Link>
                <button 
                    onClick={logout}
                    style={{
                        background: 'transparent',
                        color: 'var(--text-muted)',
                        padding: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                    title="Sign Out"
                >
                    <LogOut size={20} />
                </button>
            </div>
        );
    }

    return (
        <div className="nexus-wrapper" style={{ position: 'relative' }}>
            <button
                onClick={handleLogin}
                className={`nexus-core ${isScanning ? 'scanning' : ''}`}
                style={{
                    position: 'relative',
                    width: '48px',
                    height: '48px',
                    background: 'var(--bg-glass-heavy)',
                    border: '1px solid var(--accent-gold)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                }}
            >
                {/* The Spectral Core Pulse */}
                <div className="pulse-ring" style={{
                    position: 'absolute',
                    inset: '-2px',
                    borderRadius: '16px',
                    border: '2px solid var(--primary-maroon)',
                    opacity: 0,
                    animation: isScanning ? 'none' : 'core-pulse 2s infinite'
                }} />

                {/* The "Identity" Icon */}
                <div style={{ position: 'relative', zIndex: 2, color: isScanning ? 'var(--primary-maroon)' : 'var(--accent-gold)' }}>
                    {isScanning ? <Zap size={24} className="animate-spin-slow" /> : <Fingerprint size={24} />}
                </div>

                {/* The Scanning Beam */}
                {isScanning && (
                    <div className="scanning-beam" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '4px',
                        background: 'var(--primary-maroon)',
                        boxShadow: '0 0 15px var(--primary-maroon)',
                        animation: 'scan-move 1.5s ease-in-out infinite'
                    }} />
                )}
            </button>

            <style>{`
                .nexus-core:hover {
                    transform: scale(1.1) rotate(5deg);
                    border-color: var(--primary-maroon);
                    box-shadow: 0 0 25px rgba(139, 0, 0, 0.2);
                }
                .nexus-core:active {
                    transform: scale(0.95);
                }
                @keyframes core-pulse {
                    0% { transform: scale(0.9); opacity: 0.5; }
                    50% { transform: scale(1.1); opacity: 0; }
                    100% { transform: scale(0.9); opacity: 0.5; }
                }
                @keyframes scan-move {
                    0% { top: 0; }
                    50% { top: 100%; }
                    100% { top: 0; }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 1s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default NexusCore;
