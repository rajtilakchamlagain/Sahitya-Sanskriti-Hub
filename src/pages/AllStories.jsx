import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { stories as staticStories } from '../data/stories';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Heart, Clock } from 'lucide-react';

const AllStories = () => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                // Fetch likes
                const querySnapshot = await getDocs(collection(db, 'stories'));
                const likeMap = {};
                querySnapshot.forEach((doc) => {
                    likeMap[doc.id] = doc.data().likes || 0;
                });

                // Merge
                const mergedStories = staticStories.map(story => ({
                    ...story,
                    likes: likeMap[story.id] || 0
                }));

                // Sort by likes descending
                const sortedStories = mergedStories.sort((a, b) => b.likes - a.likes);
                setStories(sortedStories);
            } catch (error) {
                console.error("Error fetching stories:", error);
                setStories(staticStories);
            } finally {
                setLoading(false);
            }
        };

        fetchStories();
    }, []);

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: 'var(--bg-paper)',
            padding: '24px 16px'
        }}>
            {/* Header */}
            <div style={{
                marginBottom: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
            }}>
                <Link to="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    boxShadow: 'var(--shadow-soft)',
                    color: 'var(--text-charcoal)'
                }}>
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '24px',
                        color: 'var(--primary-maroon)',
                        marginBottom: '4px'
                    }}>
                        All Collected Stories
                    </h1>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        {stories.length} Narratives
                    </p>
                </div>
            </div>

            {/* List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {stories.map((story) => (
                    <Link
                        key={story.id}
                        to={`/story/${story.id}`}
                        style={{
                            textDecoration: 'none',
                            color: 'inherit',
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-card)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div style={{ position: 'relative', height: '140px' }}>
                            <img
                                src={story.img}
                                alt={story.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: '8px',
                                right: '8px',
                                backgroundColor: 'rgba(0,0,0,0.6)',
                                color: 'white',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                            }}>
                                <Heart size={10} fill="white" />
                                {story.likes || 0}
                            </div>
                        </div>
                        <div style={{ padding: '16px' }}>
                            <h3 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '18px',
                                color: 'var(--text-charcoal)',
                                marginBottom: '8px',
                                lineHeight: '1.4'
                            }}>
                                {story.title}
                            </h3>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                fontSize: '12px',
                                color: 'var(--text-muted)'
                            }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Clock size={12} />
                                    {story.readTime}
                                </span>
                                <span>•</span>
                                <span>{story.author}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllStories;
