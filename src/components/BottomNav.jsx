import { Home, BookOpen, FileText } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
    return (
        <nav className="mobile-nav" style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-paper)',
            padding: '12px 24px',
            display: 'flex',
            justifyContent: 'space-around', /* Evenly spaced */
            alignItems: 'center',
            boxShadow: '0 -4px 20px rgba(0,0,0,0.05)',
            maxWidth: '480px',
            margin: '0 auto',
            zIndex: 100,
            borderTop: '1px solid rgba(0,0,0,0.03)'
        }}>
            <NavItem to="/" icon={<Home size={22} />} label="Home" />
            <NavItem to="/articles" icon={<FileText size={22} />} label="Articles" />
            <NavItem to="/study" icon={<BookOpen size={22} />} label="Materials" />
        </nav>
    );
};

const NavItem = ({ to, icon, label }) => (
    <NavLink
        to={to}
        style={({ isActive }) => ({
            color: isActive ? 'var(--primary-maroon)' : 'var(--text-muted)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            textDecoration: 'none',
            fontSize: '10px',
            fontWeight: isActive ? 600 : 400
        })}
    >
        {icon}
        <span>{label}</span>
    </NavLink>
);

export default BottomNav;
