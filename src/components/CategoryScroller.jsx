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
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px', marginBottom: '12px', alignItems: 'center' }}>
                <h3 style={{ fontSize: '18px', margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--primary-maroon)' }}>
                    Published Stories
                </h3>
                <Link to="/stories" style={{ fontSize: '12px', color: 'var(--primary-maroon)', fontWeight: 600, textDecoration: 'none' }}>
                    Browse All
                </Link>
            </div>

            <div className="hide-scrollbar" style={{
                display: 'flex',
                gap: '16px',
                overflowX: 'auto',
                padding: '0 16px 16px 16px'
            }}>
                {stories.map(story => (
                    <Link to={`/story/${story.id}`} key={story.id} style={{ textDecoration: 'none' }}>
                        <div style={{
                            minWidth: '200px', // Wider cards for stories
                            height: '260px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            position: 'relative',
                            boxShadow: 'var(--shadow-card)',
                            flexShrink: 0,
                            backgroundColor: 'white'
                        }}>
                            <img src={story.img} alt={story.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                padding: '60px 16px 16px 16px',
                                color: 'white'
                            }}>
                                <h4 style={{
                                    fontSize: '16px',
                                    fontFamily: 'var(--font-heading)',
                                    color: 'white',
                                    marginBottom: '4px',
                                    lineHeight: '1.3',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                }}>
                                    {story.title}
                                </h4>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.9 }}>
                                    <p style={{ fontSize: '12px', margin: 0 }}>{story.author}</p>
                                    {story.likes !== undefined && (
                                        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px' }}>
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
