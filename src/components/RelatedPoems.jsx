import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { poems } from '../data/poems'; // Import central poem data
import { ArrowRight, Tag } from 'lucide-react';

const RelatedPoems = ({ currentPoemId, currentTags }) => {

    const relatedPoems = useMemo(() => {
        if (!currentTags || currentTags.length === 0) return [];

        // Calculate score for each poem
        const scoredPoems = poems
            .filter(p => p.id !== currentPoemId) // Exclude current poem
            .map(poem => {
                // Count consistent tags
                const sharedTags = poem.tags ? poem.tags.filter(tag => currentTags.includes(tag)) : [];
                return {
                    ...poem,
                    score: sharedTags.length,
                    sharedTags
                };
            })
            .filter(p => p.score > 0) // Must have at least one shared tag
            .sort((a, b) => b.score - a.score); // Sort by relevance

        // Return top 3
        return scoredPoems.slice(0, 3);
    }, [currentPoemId, currentTags]);

    if (relatedPoems.length === 0) return null;

    return (
        <section style={{
            marginTop: '60px',
            marginBottom: '40px',
            width: '100%',
            maxWidth: '800px'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px'
            }}>
                <div style={{ width: '4px', height: '24px', background: 'var(--primary-maroon)' }}></div>
                <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '24px',
                    color: 'var(--text-main)',
                    margin: 0
                }}>
                    Related Poems
                </h3>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px'
            }}>
                {relatedPoems.map(poem => (
                    <Link
                        to={`/poem/${poem.id}`}
                        key={poem.id}
                        style={{ textDecoration: 'none' }}
                        onClick={() => window.scrollTo(0, 0)} // Reset scroll on navigation
                    >
                        <div className="related-card" style={{
                            background: 'white',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid rgba(0,0,0,0.05)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                            }}
                        >
                            <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                                <img
                                    src={poem.image}
                                    alt={poem.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '10px',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                    display: 'flex',
                                    gap: '6px'
                                }}>
                                    {poem.sharedTags.slice(0, 2).map((tag, i) => (
                                        <span key={i} style={{
                                            fontSize: '10px',
                                            color: 'white',
                                            background: 'rgba(255,255,255,0.2)',
                                            padding: '2px 8px',
                                            borderRadius: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                            backdropFilter: 'blur(4px)'
                                        }}>
                                            <Tag size={10} /> {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h4 style={{
                                    margin: '0 0 8px 0',
                                    fontSize: '18px',
                                    color: 'var(--primary-maroon)',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {poem.title}
                                </h4>
                                <p style={{
                                    fontSize: '14px',
                                    color: 'var(--text-muted)',
                                    margin: 0,
                                    lineHeight: 1.5,
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    flex: 1
                                }}>
                                    {poem.excerpt.replace(/\n/g, ' ')}
                                </p>

                                <div style={{
                                    marginTop: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    fontSize: '13px',
                                    color: 'var(--accent-gold)',
                                    fontWeight: 600
                                }}>
                                    Read Poem <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default RelatedPoems;
