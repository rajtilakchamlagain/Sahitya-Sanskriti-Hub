import { Home, Compass, User, BookOpen, Clock, Youtube, LogOut, Feather, FileText, PenTool, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const DesktopSidebar = () => {
    const location = useLocation();

    // Reusing the same nav items as BottomNav but adding Labels for desktop
    const navItems = [
        { icon: Home, label: 'Home', path: '/' },
        { icon: Sparkles, label: 'Shradhanjali', path: '/shradhanjali' }, // [NEW] Memorial Hub
        { icon: Feather, label: 'Poems', path: '/poems' },
        { icon: BookOpen, label: 'Stories', path: '/stories' },
        { icon: FileText, label: 'Articles', path: '/articles' },
        { icon: BookOpen, label: 'Research', path: '/research' }, // [NEW]
        { icon: PenTool, label: 'Submit Work', path: '/write' }, // [NEW] SANSKRITI SANGAM
        { icon: Youtube, label: 'Videos', path: 'https://youtube.com/@purbanchalkiawaz9384?si=JRemSKAE4NqrJgNr', isExternal: true },
        { icon: User, label: 'Zubeen Garg', path: '/zubeen-garg' }, // [PREMIUM]
        { icon: BookOpen, label: 'Study', path: '/study' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <aside className="premium-sidebar" style={{
            width: '280px',
            height: 'fit-content',
            minHeight: '85vh',
            position: 'sticky',
            top: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            padding: '28px 24px',
            background: 'var(--bg-glass-heavy)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            borderRadius: '24px',
            border: '1px solid var(--primary-glow)',
            boxShadow: '0 12px 40px rgba(42, 10, 24, 0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
            transition: 'all 0.3s ease',
            zIndex: 10
        }}>

            {/* Embedded CSS for premium micro-animations */}
            <style>{`
                .premium-sidebar-link {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding: 12px 16px;
                    border-radius: 12px;
                    text-decoration: none;
                    color: var(--text-main);
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                    position: relative;
                    overflow: hidden;
                    border: 1px solid transparent;
                }
                .premium-sidebar-link:hover {
                    background: var(--bg-glass);
                    transform: translateX(4px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.03);
                    border: 1px solid var(--primary-glow);
                }
                .premium-sidebar-link.active {
                    background: linear-gradient(135deg, rgba(159, 18, 57, 0.08) 0%, rgba(180, 83, 9, 0.05) 100%);
                    color: var(--primary-maroon);
                    border: 1px solid rgba(159, 18, 57, 0.15);
                    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05);
                }
                .premium-sidebar-link.active::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 10%;
                    height: 80%;
                    width: 4px;
                    background: var(--primary-maroon);
                    border-radius: 0 4px 4px 0;
                }
            `}</style>

            {/* Branding */}
            <Link to="/" style={{ paddingBottom: '20px', display: 'block', textDecoration: 'none', borderBottom: '1px solid var(--primary-glow)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <img
                        src="/logo.png?v=2"
                        alt="Logo"
                        style={{
                            height: '60px',
                            width: '60px',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 4px 12px rgba(159,18,57,0.15))'
                        }}
                    />
                </div>

                <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--text-main)',
                    fontSize: '22px',
                    fontWeight: 700,
                    lineHeight: '1.2',
                    margin: 0,
                    letterSpacing: '-0.5px'
                }}>
                    Sahitya<br />
                    <span style={{ color: 'var(--accent-gold)' }}>SanskritiHub</span>
                </h1>
                <p style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-muted)',
                    fontSize: '13px',
                    fontWeight: 500,
                    marginTop: '4px',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase'
                }}>
                    Literature & Culture
                </p>
            </Link>

            {/* Profile Brief */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '24px', borderBottom: '1px solid var(--primary-glow)' }}>
                <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px', // Squircle instead of perfect circle
                    backgroundColor: '#e0e0e0',
                    backgroundImage: 'url(/profile.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    border: '2px solid var(--accent-gold)'
                }} />
                <div>
                    <h3 style={{ fontSize: '15px', color: 'var(--primary-maroon)', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Dr. Tilak Sarmah</h3>
                    <p style={{ fontSize: '12px', color: 'var(--text-light)', fontWeight: 500 }}>Scholar & Writer</p>
                </div>
            </div>

            {/* Navigation Links */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {navItems.map((item) => {
                    const active = isActive(item.path);
                    return item.isExternal ? (
                        <a
                            key={item.label}
                            href={item.path}
                            target="_blank"
                            rel="noreferrer"
                            className="premium-sidebar-link"
                        >
                            <item.icon size={22} color={'var(--primary-maroon)'} strokeWidth={1.5} />
                            <span style={{ fontSize: '15px', fontWeight: 500 }}>{item.label}</span>
                        </a>
                    ) : (
                        <Link
                            to={item.path}
                            key={item.label}
                            className={`premium-sidebar-link ${active ? 'active' : ''}`}
                        >
                            <item.icon size={22} color={active ? 'var(--primary-maroon)' : 'var(--text-muted)'} strokeWidth={active ? 2.5 : 2} style={{ transition: 'all 0.3s ease' }} />
                            <span style={{ fontSize: '15px', fontWeight: active ? 600 : 500 }}>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Theme Toggle in Sidebar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--bg-glass)', borderRadius: '12px', border: '1px solid var(--primary-glow)' }}>
                    <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-main)' }}>Theme</span>
                    <ThemeToggle />
                </div>

                {/* Decorative Quote */}
                <div style={{
                    padding: '24px',
                    backgroundColor: 'var(--accent-gold-glow)', // Subtle Amber/Gold tint
                    borderRadius: '16px',
                    textAlign: 'center'
                }}>
                    <p style={{ fontStyle: 'italic', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                        "साहित्य नै समाजको दर्पण हो।"
                    </p>
                    <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent-gold)', margin: '0 auto' }}></div>
                </div>
            </div>

            {/* Copyright */}
            <div style={{ fontSize: '10px', color: '#999', textAlign: 'center', marginTop: '16px' }}>
                © {new Date().getFullYear()} SahityaSanskritiHub
            </div>

        </aside>
    );
};

export default DesktopSidebar;
