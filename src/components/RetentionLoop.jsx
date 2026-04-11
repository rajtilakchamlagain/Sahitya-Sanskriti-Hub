import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import { stories } from '../data/stories';
import { poems } from '../data/poems';

const RetentionLoop = ({ currentId, type = 'story' }) => {
    // Simple random recommendation logic
    const getRecommendations = () => {
        let allItems = [];
        if (type === 'story') allItems = stories;
        if (type === 'poem') allItems = poems;

        // Filter out current item
        const others = allItems.filter(item => item.id !== currentId);
        // Shuffle and take 2
        return others.sort(() => 0.5 - Math.random()).slice(0, 2);
    };

    const recommendations = getRecommendations();

    return (
        <div style={{ marginTop: '48px', marginBottom: '40px' }}>

            {/* Read Next Section */}
            {recommendations.length > 0 && (
                <div style={{ marginBottom: '40px' }}>
                    <h3 style={{
                        fontSize: '20px',
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--primary-maroon)',
                        marginBottom: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <span style={{ height: '1px', width: '20px', backgroundColor: 'var(--primary-maroon)' }}></span>
                        You might also like
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        {recommendations.map(item => (
                            <Link to={`/${type}/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                                <div style={{
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-card)',
                                    backgroundColor: 'white',
                                    height: '100%'
                                }}>
                                    <div style={{ height: '120px', overflow: 'hidden', backgroundColor: 'var(--bg-paper-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {item.img ? (
                                            <img src={item.img} alt={item.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        ) : (
                                            <span style={{ fontSize: '40px', opacity: 0.2 }}>✒️</span>
                                        )}
                                    </div>
                                    <div style={{ padding: '12px' }}>
                                        <h4 style={{
                                            fontSize: '14px',
                                            margin: '0 0 4px 0',
                                            color: 'var(--text-charcoal)',
                                            lineHeight: '1.3',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        }}>
                                            {item.title}
                                        </h4>
                                        <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Read More <ArrowRight size={10} style={{ display: 'inline', verticalAlign: 'middle' }} /></span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Subscribe CTA */}
            <div style={{
                backgroundColor: 'var(--bg-paper-dark)',
                padding: '24px',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px dashed var(--primary-maroon)'
            }}>
                <Mail size={32} color="var(--primary-maroon)" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-heading)', color: 'var(--primary-maroon)', margin: '0 0 8px 0' }}>
                    New Poems Every Sunday
                </h3>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                    Join our community of literature lovers. Get the latest compositions delivered to your inbox.
                </p>
                <div style={{ display: 'flex', gap: '8px', maxWidth: '300px', margin: '0 auto' }}>
                    <input
                        type="email"
                        placeholder="Your email address"
                        style={{
                            flex: 1,
                            padding: '10px 16px',
                            borderRadius: '24px',
                            border: '1px solid #ddd',
                            fontSize: '14px',
                            outline: 'none'
                        }}
                    />
                    <button style={{
                        backgroundColor: 'var(--primary-maroon)',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '24px',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer'
                    }}>
                        Join
                    </button>
                </div>
            </div>

        </div>
    );
};

export default RetentionLoop;
