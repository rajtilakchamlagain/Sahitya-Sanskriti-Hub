import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            background: 'linear-gradient(180deg, #3E0E0E 0%, #1A0505 100%)', // Deep Royal Maroon to Black
            color: '#E5C560', // Muted Gold
            padding: '32px 24px 100px', // Reduced padding
            textAlign: 'center',
            borderTop: '3px solid #C5A028', // Gold Accent Border
            width: '100%'
        }}>

            {/* Catchy Headline */}
            <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '13px',
                opacity: 0.6,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '16px'
            }}>
                Sahitya Sanskriti Hub
            </div>

            {/* Authorship Declaration (Moved from GridFeed) */}
            <div style={{ marginBottom: '24px' }}>
                <p style={{
                    fontSize: '14px',
                    color: '#FFFBF5',
                    margin: '0 0 4px 0',
                    fontWeight: 500,
                    opacity: 0.9
                }}>
                    All Content Authored by
                </p>
                <h5 style={{
                    fontSize: '18px',
                    color: '#E5C560',
                    fontFamily: 'var(--font-heading)',
                    margin: 0,
                    fontWeight: 600
                }}>
                    Dr. Tilak Sarmah
                </h5>
            </div>

            {/* Bold Links Section - Compact */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '24px',
                marginBottom: '20px'
            }}>
                {['About', 'Privacy', 'Contact'].map((item) => (
                    <Link
                        key={item}
                        to={`/${item.toLowerCase()}`}
                        style={{
                            color: '#FFFBF5', // Off-white for readability
                            textDecoration: 'none',
                            fontFamily: 'var(--font-heading)',
                            fontSize: '15px', // Normalized size
                            fontWeight: '600',
                            letterSpacing: '0.5px',
                            transition: 'color 0.2s, transform 0.2s',
                            position: 'relative',
                            paddingBottom: '2px'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.color = '#E5C560';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.color = '#FFFBF5';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        {item}
                    </Link>
                ))}
            </div>

            {/* Divider */}
            <div style={{
                width: '40px',
                height: '1px',
                backgroundColor: 'rgba(229, 197, 96, 0.3)',
                margin: '0 auto 16px'
            }} />

            {/* Copyright */}
            <p style={{
                margin: 0,
                fontSize: '11px',
                color: 'rgba(255, 255, 255, 0.4)',
                fontFamily: 'var(--font-body)'
            }}>
                © {new Date().getFullYear()} SahityaSanskritiHub. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
