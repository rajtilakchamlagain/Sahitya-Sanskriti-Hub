import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, BookOpen } from 'lucide-react';
import { usePoems } from '../hooks/usePoems';

const AllPoems = () => {
    const { poems, loading } = usePoems();

    return (
        <div className="texture-paper" style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '24px 16px',
            paddingBottom: '100px',
            minHeight: '100vh',
            fontFamily: 'var(--font-body)',
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
                    backgroundColor: '#FFF5F5',
                    textDecoration: 'none',
                    border: '1px solid #FFE4E4',
                    boxShadow: 'var(--shadow-card)'
                }}>
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 style={{
                        fontSize: '28px',
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--primary-maroon)',
                        margin: 0,
                        textShadow: '0 2px 4px rgba(128,0,0,0.1)'
                    }}>
                        Visaya Suchi (विषय सूची)
                    </h1>
                    <p style={{
                        fontSize: '14px',
                        color: 'var(--text-muted)',
                        margin: 0,
                        fontWeight: 300
                    }}>
                        Complete Collection • {poems.length} Poems
                    </p>
                </div>
            </div>

            {/* Introduction Card - "Royal" Style */}
            <div style={{
                background: 'linear-gradient(135deg, #2c0404 0%, #4a0e0e 100%)',
                padding: '24px',
                borderRadius: '16px',
                marginBottom: '32px',
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                boxShadow: '0 8px 32px rgba(128,0,0,0.2)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                <div style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid rgba(255,255,255,0.2)'
                }}>
                    <BookOpen size={28} color="#D4AF37" />
                </div>
                <div>
                    <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        color: '#D4AF37', // Gold
                        margin: '0 0 6px 0',
                        fontSize: '20px',
                        letterSpacing: '0.5px'
                    }}>
                        Dr. Tilak Sarmah's Archive
                    </h3>
                    <p style={{
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.8)',
                        margin: 0,
                        lineHeight: '1.5',
                        fontWeight: 300
                    }}>
                        Browse the complete literary works. The list is sorted by popularity, showcasing the most loved pieces first.
                    </p>
                </div>
            </div>

            {/* Table of Contents - "Book Index" Style */}
            <div style={{
                backgroundColor: 'rgba(255,255,255,0.6)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-soft)',
                overflow: 'hidden',
                border: '1px solid rgba(128,0,0,0.05)',
                backdropFilter: 'blur(10px)'
            }}>
                {loading ? (
                    <div style={{ padding: '60px', textAlign: 'center', color: 'var(--text-muted)' }}>
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
                                padding: '24px 24px',
                                borderBottom: index !== poems.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                backgroundColor: index % 2 === 0 ? 'rgba(255,255,255,0.4)' : 'transparent', // Zebra stripe
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#FFF5F5';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                                e.currentTarget.style.zIndex = '1';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = index % 2 === 0 ? 'rgba(255,255,255,0.4)' : 'transparent';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.zIndex = '0';
                            }}
                        >
                            {/* Number - Antique Style */}
                            <div style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                border: '1px solid rgba(128,0,0,0.1)',
                                color: 'var(--primary-maroon)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '14px',
                                fontFamily: 'var(--font-heading)',
                                marginRight: '24px',
                                flexShrink: 0,
                                backgroundColor: '#FFF'
                            }}>
                                {index + 1}
                            </div>

                            {/* Content */}
                            <div style={{ flex: 1, marginRight: '16px' }}>
                                <h3 style={{
                                    margin: '0 0 6px 0',
                                    fontSize: '18px',
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--text-charcoal)',
                                    fontWeight: 600
                                }}>
                                    {poem.title}
                                </h3>
                                <p style={{
                                    margin: 0,
                                    fontSize: '13px',
                                    color: 'var(--text-muted)',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    maxWidth: '100%',
                                    fontStyle: 'italic',
                                    opacity: 0.8
                                }}>
                                    "{poem.excerpt.split('\n')[0]}..."
                                </p>
                            </div>

                            {/* Likes Badge - Premium */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                backgroundColor: 'white',
                                border: '1px solid #FFE4E4',
                                color: '#D32F2F',
                                padding: '8px 14px',
                                borderRadius: '30px',
                                fontSize: '13px',
                                fontWeight: '700',
                                boxShadow: '0 2px 8px rgba(211,47,47,0.05)'
                            }}>
                                <Heart size={14} fill="#D32F2F" />
                                {poem.likes || 0}
                            </div>
                        </Link>
                    ))
                )}
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px', opacity: 0.5 }}>
                <p style={{ fontSize: '14px', fontFamily: 'var(--font-heading)', color: 'var(--primary-maroon)' }}>
                    ❦ End of Collection ❦
                </p>
            </div>
        </div>
    );
};

export default AllPoems;
