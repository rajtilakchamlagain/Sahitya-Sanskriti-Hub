import { Search, Menu } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import NexusCore from './NexusCore';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <header className="mobile-header" style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 16px', // Reduced vertical padding slightly for better proportion
                position: 'sticky',
                top: 0,
                zIndex: 10,
                backgroundColor: 'var(--bg-glass-heavy)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(139, 0, 0, 0.05)',
                transition: 'background-color 0.3s ease'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open menu"
                        style={{
                            padding: '8px',
                            background: 'transparent',
                            color: 'var(--text-main)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: '-8px' // Align with edge
                        }}
                    >
                        <Menu size={28} strokeWidth={2.5} /> {/* Slightly thicker/larger */}
                    </button>

                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                        <img
                            src="/logo.png?v=2"
                            alt="Logo"
                            style={{
                                height: '64px', // Slightly smaller to fit better with menu
                                width: '64px',
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                            }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '18px',
                                fontWeight: 700,
                                color: 'var(--primary-maroon)',
                                letterSpacing: '-0.5px'
                            }}>
                                SahityaSanskritiHub
                            </span>
                            <span style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '12px',
                                color: 'var(--accent-gold)',
                                fontWeight: 600,
                                marginTop: '-2px'
                            }}>
                                साहित्य संस्कृति
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Right Actions */}
                <div className="hide-on-mobile" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Link to="/write" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 16px',
                        backgroundColor: 'var(--bg-glass)',
                        border: '1px solid var(--primary-glow)',
                        borderRadius: '12px',
                        color: 'var(--text-main)',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: 600,
                        transition: 'all 0.2s ease'
                    }}
                        onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary-maroon)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'var(--primary-maroon)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-glass)'; e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.borderColor = 'var(--primary-glow)'; }}
                    >
                        Submit <span style={{ color: 'var(--accent-gold)' }}>Work</span>
                    </Link>
                    <Link to="/shradhanjali" style={{
                        color: 'var(--primary-maroon)',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: 700,
                        borderBottom: '2px solid var(--accent-gold)',
                        padding: '4px 0'
                    }}>
                        Shradhanjali
                    </Link>
                    <LanguageSwitcher />
                    <ThemeToggle />
                    <NexusCore />
                </div>

                <div className="mobile-only" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '8px' }}>
                    <ThemeToggle />
                    <NexusCore />
                </div>
            </header>
        </>
    );
};

export default Header;
