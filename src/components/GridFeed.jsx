import { ChevronRight, Feather, Copyright, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePoems } from '../hooks/usePoems';

const GridFeed = () => {
    // Use the hook to get sorted poems
    const { poems, loading } = usePoems();

    // Colors for the cards
    const cardColors = ['#FDF6E3', '#FFF5F5', '#F0F9FF', '#F5F3FF'];

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>Loading poetry...</div>;
    }

    return (
        <section>
            {/* The Grid - Showing Top 6 Trending */}
            <div className="poetry-grid">
                {poems.slice(0, 6).map((poem, index) => (
                    <Link to={`/poem/${poem.id}`} key={poem.id} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                        <div className="poetry-card">
                            <div className="poetry-card-image-wrapper">
                                <img
                                    src={poem.image}
                                    alt={poem.title}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>

                            <div className="poetry-card-content">
                                <h4 className="poetry-card-title">
                                    {poem.title}
                                </h4>
                                <p className="poetry-card-excerpt">
                                    "{poem.excerpt.split('\n').join(' ')}"
                                </p>

                                <div className="poetry-card-footer">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <span>Read</span>
                                        <ChevronRight size={12} />
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', opacity: 0.6 }}>
                                        <Heart size={12} />
                                        <span>{poem.likes || 0}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Browse All Button */}
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <Link to="/poems" style={{ textDecoration: 'none' }}>
                    <button style={{
                        backgroundColor: 'var(--bg-paper)',
                        border: '1px solid var(--primary-maroon)',
                        color: 'var(--primary-maroon)',
                        padding: '12px 32px',
                        borderRadius: '50px',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        boxShadow: 'var(--shadow-soft)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        Browse All Poems
                        <ChevronRight size={16} />
                    </button>
                </Link>
            </div>


        </section>
    );
};

export default GridFeed;
