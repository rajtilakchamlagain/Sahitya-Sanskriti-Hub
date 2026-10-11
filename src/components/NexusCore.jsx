import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const NexusCore = () => {
    const { currentUser, login, logout } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            await login();
        } catch (err) {
            console.error("Login failed:", err);
        } finally {
            setIsLoading(false);
        }
    };

    if (currentUser) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Link 
                    to="/profile" 
                    title={currentUser.displayName || "मेरो प्रोफाइल"}
                    style={{
                        position: 'relative',
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        padding: '2px',
                        background: 'linear-gradient(135deg, var(--primary-maroon), var(--accent-gold))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        transition: 'transform 0.2s ease',
                        boxShadow: '0 2px 8px rgba(139, 0, 0, 0.2)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <img 
                        src={currentUser.photoURL || "/logo.png"} 
                        alt={currentUser.displayName || "User"} 
                        style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
                    />
                </Link>
                <button 
                    onClick={logout}
                    style={{
                        background: 'transparent',
                        color: 'var(--text-muted)',
                        padding: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-maroon)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                    title="बाहिरिनुहोस् / Sign Out"
                    aria-label="Sign Out"
                >
                    <LogOut size={18} />
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={handleLogin}
            disabled={isLoading}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                backgroundColor: 'var(--bg-glass)',
                border: '1px solid rgba(139, 0, 0, 0.2)',
                borderRadius: '20px',
                color: 'var(--primary-maroon)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary-maroon)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = 'var(--primary-maroon)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-glass)';
                e.currentTarget.style.color = 'var(--primary-maroon)';
                e.currentTarget.style.borderColor = 'rgba(139, 0, 0, 0.2)';
            }}
            title="गुगल मार्फत साइन इन गर्नुहोस्"
            aria-label="Sign In"
        >
            <User size={16} />
            <span>{isLoading ? 'प्रतीक्षा...' : 'साइन इन'}</span>
        </button>
    );
};

export default NexusCore;
