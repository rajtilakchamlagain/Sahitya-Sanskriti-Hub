import { useState, useEffect } from 'react';
import { poems } from '../data/poems';
import { RefreshCw, Feather } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroCard = () => {
    const [currentPoem, setCurrentPoem] = useState(poems[0]);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * poems.length);
        setCurrentPoem(poems[randomIndex]);
    }, []);

    const handleRefresh = () => {
        setIsAnimating(true);
        setTimeout(() => {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * poems.length);
            } while (newIndex + 1 === currentPoem.id && poems.length > 1);

            setCurrentPoem(poems[newIndex]);
            setIsAnimating(false);
        }, 300);
    };

    return (
        <div style={{
            margin: '0 12px',
            backgroundColor: 'var(--primary-maroon)',
            background: 'linear-gradient(145deg, #8B0000 0%, #600000 100%)',
            borderRadius: '16px',
            padding: '20px', // Reduced padding
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card)',
            color: 'var(--bg-paper)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '180px' // Reduced height
        }}>
            {/* Background Decoration */}
            <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                opacity: 0.1,
                transform: 'rotate(-15deg)'
            }}>
                <Feather size={140} color="white" />
            </div>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', position: 'relative', zIndex: 2 }}>
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--accent-gold)' }}>
                    Poem of the Day
                </span>
                <button
                    onClick={handleRefresh}
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '28px',
                        height: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}
                >
                    <RefreshCw
                        size={14}
                        color="white"
                        style={{
                            transform: isAnimating ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.5s ease'
                        }}
                    />
                </button>
            </div>

            {/* Content */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                opacity: isAnimating ? 0 : 1,
                transition: 'opacity 0.3s ease',
            }}>
                <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '22px', // Reduced from 28px
                    lineHeight: '1.2',
                    marginBottom: '8px',
                    fontWeight: 700,
                    color: 'var(--accent-gold)',
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                    {currentPoem.title}
                </h3>

                <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px', // Reduced from 15px
                    opacity: 0.9,
                    lineHeight: '1.5',
                    marginBottom: '12px',
                    whiteSpace: 'pre-line',
                    display: '-webkit-box',
                    WebkitLineClamp: 4, // Reduce lines
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    {currentPoem.excerpt}
                </p>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <span style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--accent-gold)'
                    }}>
                        — {currentPoem.author}
                    </span>
                </div>
            </div>

            {/* Read More Link (Optional, allows clicking full poem later) */}
            <div style={{ marginTop: '20px', position: 'relative', zIndex: 2 }}>
                <Link to={`/poem/${currentPoem.id}`} style={{ fontSize: '12px', textDecoration: 'underline', cursor: 'pointer', opacity: 0.8, color: 'inherit' }}>
                    Read Full Poem
                </Link>
            </div>
        </div>
    );
};

export default HeroCard;
