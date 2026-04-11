import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, BookOpen } from 'lucide-react';
import { usePoems } from '../hooks/usePoems';

const AllPoems = () => {
    const { poems, loading } = usePoems();

    return (
        <div className="texture-paper" style={{
            position: 'relative',
            minHeight: '100vh',
            paddingBottom: '100px',
            fontFamily: 'var(--font-body)',
            backgroundColor: 'var(--bg-paper)',
            overflow: 'hidden' // Contain absolute background elements
        }}>
            {/* Main Content Container (Glassmorphic to float above the animations) */}
            <div style={{
                position: 'relative',
                zIndex: 10, // Must be above the background animations
                maxWidth: '800px',
                margin: '0 auto',
                padding: '40px 16px',
            }}>

                {/* Header */}
                <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Link to="/" style={{
                        color: 'var(--primary-maroon)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 245, 245, 0.9)',
                        textDecoration: 'none',
                        border: '1px solid rgba(255, 228, 228, 0.5)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        backdropFilter: 'blur(4px)',
                        transition: 'all 0.2s ease'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 style={{
                            fontSize: '32px',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--primary-maroon)',
                            margin: 0,
                            textShadow: '0 4px 12px rgba(128,0,0,0.1)'
                        }}>
                            Visaya Suchi (विषय सूची)
                        </h1>
                        <p style={{
                            fontSize: '15px',
                            color: 'var(--text-charcoal)',
                            opacity: 0.8,
                            margin: '4px 0 0 0',
                            fontWeight: 400
                        }}>
                            Complete Collection • {poems.length} Masterpieces
                        </p>
                    </div>
                </div>

                {/* Introduction Card - "Royal" Style */}
                <div style={{
                    background: 'linear-gradient(135deg, #2c0404 0%, #4a0e0e 100%)',
                    padding: '24px',
                    borderRadius: '20px',
                    marginBottom: '40px',
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'center',
                    boxShadow: '0 12px 40px rgba(128,0,0,0.25)',
                    color: 'white',
                    border: '1px solid rgba(212, 175, 55, 0.2)' // Gold tint border
                }}>
                    <div style={{
                        backgroundColor: 'rgba(212, 175, 55, 0.15)', // Gold backing
                        width: '64px',
                        height: '64px',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '1px solid rgba(212, 175, 55, 0.3)'
                    }}>
                        <BookOpen size={32} color="#D4AF37" />
                    </div>
                    <div>
                        <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            color: '#eaddaa', // Soft Gold
                            margin: '0 0 8px 0',
                            fontSize: '22px',
                            letterSpacing: '0.5px'
                        }}>
                            Dr. Tilak Sarmah's Archive
                        </h3>
                        <p style={{
                            fontSize: '14px',
                            color: 'rgba(255,255,255,0.85)',
                            margin: 0,
                            lineHeight: '1.6',
                            fontWeight: 300
                        }}>
                            Browse the complete literary works. Immerse yourself in the rhythm of nature, society, and profound philosophy.
                        </p>
                    </div>
                </div>

                {/* Table of Contents - "Book Index" Style with Thumbnails */}
                <div style={{
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    borderRadius: '24px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(16px)'
                }}>
                    {loading ? (
                        <div style={{ padding: '80px', textAlign: 'center', color: 'var(--text-muted)' }}>
                            <div className="spinner" style={{ marginBottom: '16px' }}>⏳</div>
                            Fetching the archive...
                        </div>
                    ) : (
                        poems.map((poem, index) => (
                            <Link
                                to={`/poem/${poem.id}`}
                                key={poem.id}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '20px 24px',
                                    borderBottom: index !== poems.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer',
                                    backgroundColor: 'transparent',
                                    position: 'relative',
                                    gap: '20px'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(255, 245, 245, 0.8)';
                                    e.currentTarget.style.transform = 'scale(1.01)';
                                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(128,0,0,0.08)';
                                    e.currentTarget.style.zIndex = '1';
                                    e.currentTarget.style.borderRadius = index === 0 ? '24px 24px 0 0' : index === poems.length - 1 ? '0 0 24px 24px' : '8px';
                                    const img = e.currentTarget.querySelector('img');
                                    if (img) img.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.zIndex = '0';
                                    e.currentTarget.style.borderRadius = '0';
                                    const img = e.currentTarget.querySelector('img');
                                    if (img) img.style.transform = 'scale(1)';
                                }}
                            >
                                {/* Number - Antique Style */}
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    border: '1px solid rgba(128,0,0,0.15)',
                                    color: 'var(--primary-maroon)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '13px',
                                    fontFamily: 'var(--font-heading)',
                                    flexShrink: 0,
                                    backgroundColor: 'rgba(255,255,255,0.9)',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                                }}>
                                    {index + 1}
                                </div>

                                {/* Thumbnail Image */}
                                <div style={{
                                    width: '72px',
                                    height: '72px',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    flexShrink: 0,
                                    border: '2px solid white',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    backgroundColor: '#f8f8f8'
                                }}>
                                    <img
                                        src={poem.image}
                                        alt={poem.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                                        }}
                                        loading="lazy"
                                    />
                                </div>

                                {/* Content */}
                                <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <h3 style={{
                                        margin: '0 0 6px 0',
                                        fontSize: '18px',
                                        fontFamily: 'var(--font-heading)',
                                        color: 'var(--primary-maroon)',
                                        fontWeight: 600,
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>
                                        {poem.title}
                                    </h3>
                                    <p style={{
                                        margin: 0,
                                        fontSize: '14px',
                                        color: 'var(--text-muted)',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        fontStyle: 'italic',
                                        opacity: 0.9
                                    }}>
                                        "{poem.excerpt.split('\n')[0]}..."
                                    </p>
                                </div>

                                {/* Likes Badge - Premium */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    backgroundColor: 'rgba(211,47,47,0.05)',
                                    border: '1px solid rgba(211,47,47,0.1)',
                                    color: '#D32F2F',
                                    padding: '8px 16px',
                                    borderRadius: '30px',
                                    fontSize: '13px',
                                    fontWeight: '700',
                                    transition: 'background-color 0.2s ease',
                                }}>
                                    <Heart size={14} fill="#D32F2F" />
                                    {poem.likes || 0}
                                </div>
                            </Link>
                        ))
                    )}
                </div>

                <div style={{ textAlign: 'center', marginTop: '60px', opacity: 0.6 }}>
                    <p style={{ fontSize: '15px', fontFamily: 'var(--font-heading)', color: 'var(--primary-maroon)', letterSpacing: '1px' }}>
                        ❦ End of Collection ❦
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AllPoems;
