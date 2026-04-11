import { Link } from 'react-router-dom';
import { stories as staticStories } from '../data/stories';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const CategoryScroller = () => {
    const [stories, setStories] = useState(staticStories);

    useEffect(() => {
        const fetchLikes = async () => {
            try {
                // Fetch likes from Firestore
                const querySnapshot = await getDocs(collection(db, 'stories'));
                const likeMap = {};
                querySnapshot.forEach((doc) => {
                    likeMap[doc.id] = doc.data().likes || 0;
                });

                // Merge and Sort
                const mergedStories = staticStories.map(story => ({
                    ...story,
                    likes: likeMap[story.id] || 0
                }));

                const sortedStories = mergedStories.sort((a, b) => b.likes - a.likes);
                setStories(sortedStories.slice(0, 6)); // Top 6 Only
            } catch (error) {
                console.error("Error fetching story likes:", error);
            }
        };

        fetchLikes();
    }, []);

    return (
        <section>
            <style>{`
                .premium-story-card {
                    min-width: 220px;
                    height: 280px;
                    border-radius: 20px;
                    overflow: hidden;
                    position: relative;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
                    flex-shrink: 0;
                    background-color: #1a1a1a;
                    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
                    border: 1px solid rgba(255, 255, 255, 0.4);
                    cursor: pointer;
                    will-change: transform, box-shadow;
                }
                .premium-story-card:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 20px 40px rgba(159, 18, 57, 0.2), 0 0 0 1px rgba(159, 18, 57, 0.1);
                }
                .premium-story-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
                }
                .premium-story-card:hover .premium-story-img {
                    transform: scale(1.1);
                }
                .premium-story-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(to top, rgba(20, 10, 15, 0.95) 0%, rgba(20, 10, 15, 0.6) 60%, transparent 100%);
                    padding: 60px 20px 20px 20px;
                    color: white;
                    transition: all 0.4s ease;
                }
                .premium-story-card:hover .premium-story-overlay {
                    background: linear-gradient(to top, rgba(100, 10, 25, 0.95) 0%, rgba(20, 10, 15, 0.7) 60%, transparent 100%);
                    padding-bottom: 24px;
                }
                .premium-story-badge {
                    position: absolute;
                    top: 16px;
                    left: 16px;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    padding: 4px 10px;
                    border-radius: 20px;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    color: white;
                    border: 1px solid rgba(255,255,255,0.3);
                }
            `}</style>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px', marginBottom: '16px', alignItems: 'center' }}>
                <h3 style={{ fontSize: '18px', margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>
                    Published Stories
                </h3>
                <Link to="/stories" style={{ fontSize: '12px', color: 'var(--primary-maroon)', fontWeight: 600, textDecoration: 'none', padding: '4px 12px', borderRadius: '12px', background: 'var(--primary-glow)' }}>
                    Browse All
                </Link>
            </div>

            <div className="hide-scrollbar" style={{
                display: 'flex',
                gap: '16px',
                overflowX: 'auto',
                padding: '0 16px 20px 16px'
            }}>
                {stories.map(story => (
                    <Link to={`/story/${story.id}`} key={story.id} style={{ textDecoration: 'none' }}>
                        <div className="premium-story-card">
                            <span className="premium-story-badge">Story</span>
                            <img src={story.img} alt={story.title} className="premium-story-img" loading="lazy" />
                            <div className="premium-story-overlay">
                                <h4 style={{
                                    fontSize: '17px',
                                    fontFamily: 'var(--font-heading)',
                                    color: 'white',
                                    marginBottom: '6px',
                                    lineHeight: '1.3',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                                }}>
                                    {story.title}
                                </h4>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.9 }}>
                                    <p style={{ fontSize: '12px', margin: 0, color: 'rgba(255,255,255,0.8)' }}>{story.author}</p>
                                    {story.likes !== undefined && (
                                        <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.2)', padding: '3px 8px', borderRadius: '12px', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            ♥ {story.likes}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section >
    );
};

export default CategoryScroller;
