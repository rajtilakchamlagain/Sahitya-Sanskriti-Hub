import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ forceMobileStyle = false }) => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: forceMobileStyle ? '12px' : '8px',
                width: forceMobileStyle ? '100%' : 'auto',
                backgroundColor: forceMobileStyle
                    ? (isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)')
                    : (isDarkMode ? 'rgba(255,255,255,0.1)' : 'white'),
                border: '1px solid',
                borderColor: forceMobileStyle
                    ? 'transparent'
                    : (isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'),
                borderRadius: forceMobileStyle ? '12px' : '50%',
                color: isDarkMode ? '#f59e0b' : '#9f1239', // Gold in dark, Maroon in light
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                boxShadow: forceMobileStyle
                    ? 'none'
                    : (isDarkMode ? '0 0 10px rgba(245, 158, 11, 0.2)' : '0 2px 8px rgba(0,0,0,0.05)'),
                gap: forceMobileStyle ? '12px' : '0'
            }}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            <div style={{ position: 'relative', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sun
                    size={20}
                    strokeWidth={2}
                    style={{
                        position: 'absolute',
                        transition: 'all 0.4s ease',
                        transform: isDarkMode ? 'rotate(90deg) scale(0)' : 'rotate(0) scale(1)',
                        opacity: isDarkMode ? 0 : 1
                    }}
                />
                <Moon
                    size={20}
                    strokeWidth={2}
                    style={{
                        position: 'absolute',
                        transition: 'all 0.4s ease',
                        transform: isDarkMode ? 'rotate(0) scale(1)' : 'rotate(-90deg) scale(0)',
                        opacity: isDarkMode ? 1 : 0
                    }}
                />
            </div>
            {forceMobileStyle && (
                <span style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    color: 'var(--text-main)',
                    flex: 1,
                    textAlign: 'left'
                }}>
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </span>
            )}
        </button>
    );
};

export default ThemeToggle;
