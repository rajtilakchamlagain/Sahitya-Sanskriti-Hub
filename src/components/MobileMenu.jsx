import { X, Home, BookOpen, Feather, User, Info, Phone, Youtube, ChevronRight, FileText, PenTool, Sparkles, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { useEffect, useState } from 'react';

const MobileMenu = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    // Handle animation delay ensuring mount/unmount smoothness
    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300); // Match transition duration
            document.body.style.overflow = '';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    const handleNavigation = (path) => {
        navigate(path);
        onClose();
    };

    const navLinks = [
        { icon: Home, label: "Home", path: "/" },
        { icon: Sparkles, label: "Shradhanjali (Memorial)", path: "/shradhanjali" }, // [NEW]
        { icon: Feather, label: "Poetry Collection", path: "/poems" },
        { icon: BookOpen, label: "Short Stories", path: "/stories" },
        { icon: FileText, label: "Articles", path: "/articles" },
        { icon: BookOpen, label: "Research", path: "/research" }, // [NEW]
        { icon: PenTool, label: "Write For Us", path: "/write" }, // [NEW] SANSKRITI SANGAM
        { icon: BookOpen, label: "Study Materials", path: "/study" },
        { icon: Info, label: "About Dr. Sarmah", path: "/about" },
        { icon: Star, label: "Zubeen Garg Tribute", path: "/zubeen-garg" }, // [NEW]
        { icon: Phone, label: "Contact & Feedback", path: "/contact" },
    ];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100dvh',
            zIndex: 1000, // Above everything
            pointerEvents: isOpen ? 'auto' : 'none'
        }}>
            {/* Backdrop (Darken) */}
            <div
                onClick={onClose}
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    backdropFilter: 'blur(4px)',
                    opacity: isOpen ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    touchAction: 'none'
                }}
            />

            {/* Menu Drawer */}
            <div className="mobile-menu-drawer" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '80%',
                maxWidth: '400px',
                height: '100%',
                backgroundColor: 'var(--bg-core)', // Theme-aware Web Color
                boxShadow: '4px 0 24px rgba(0,0,0,0.1)',
                transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch',
                overscrollBehavior: 'contain'
            }}>
                {/* Header Section */}
                <div style={{
                    padding: '24px',
                    borderBottom: '1px solid rgba(139, 0, 0, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            border: '2px solid var(--primary-maroon)',
                            padding: '2px',
                            overflow: 'hidden'
                        }}>
                            <img src="/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                        </div>
                        <button onClick={onClose} aria-label="Close menu" style={{
                            padding: '8px',
                            background: 'rgba(0,0,0,0.05)',
                            borderRadius: '50%',
                            color: 'var(--text-main)'
                        }}>
                            <X size={20} />
                        </button>
                    </div>

                    <div>
                        <h3 style={{
                            fontSize: '20px',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--primary-maroon)',
                            margin: 0,
                            wordBreak: 'break-word' // Fix overflow
                        }}>
                            SahityaSanskritiHub
                        </h3>
                        <p style={{
                            fontSize: '12px',
                            color: 'var(--text-muted)',
                            marginTop: '4px'
                        }}>Dr. Tilak Sarmah's Literary Portfolio</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div style={{ flex: 1, padding: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => handleNavigation(link.path)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '12px 16px',
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                    borderRadius: '12px',
                                    transition: 'background 0.2s',
                                    textAlign: 'left'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 0, 0, 0.04)'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                <link.icon size={20} color="var(--primary-maroon)" strokeWidth={1.5} />
                                <span style={{
                                    fontSize: '15px',
                                    fontWeight: 500,
                                    color: 'var(--text-main)',
                                    flex: 1
                                }}>
                                    {link.label}
                                </span>
                                <ChevronRight size={16} color="var(--text-light)" />
                            </button>
                        ))}
                    </div>

                    {/* YouTube Special Link */}
                    <a
                        href="https://youtube.com/@purbanchalkiawaz9384?si=JRemSKAE4NqrJgNr"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            padding: '12px 16px',
                            marginTop: '8px',
                            textDecoration: 'none'
                        }}
                    >
                        <Youtube size={20} color="#FF0000" strokeWidth={1.5} />
                        <span style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text-main)' }}>
                            Watch on YouTube
                        </span>
                    </a>
                </div>

                {/* Preferences Section for Mobile */}
                <div style={{ padding: '0 16px 16px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{
                        padding: '12px',
                        background: 'transparent',
                        borderRadius: '12px',
                        border: '1px solid var(--primary-glow)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-muted)' }}>Language</span>
                        <LanguageSwitcher />
                    </div>
                </div>

                {/* Footer */}
                <div style={{
                    padding: '24px',
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                    textAlign: 'center'
                }}>
                    <p style={{
                        fontSize: '11px',
                        color: 'var(--text-muted)'
                    }}>
                        © {new Date().getFullYear()} Sahitya Sanskriti.<br />
                        All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
