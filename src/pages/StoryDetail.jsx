import { ArrowLeft, PlayCircle, Heart, Bookmark, Share2, Type } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { stories } from '../data/stories';
import { useEffect, useRef } from 'react';
import LikeButton from '../components/LikeButton';
import CommentSection from '../components/CommentSection';
import SocialShare from '../components/SocialShare';
import PremiumShareCard from '../components/PremiumShareCard';
import ContentContext from '../components/ContentContext';
import RetentionLoop from '../components/RetentionLoop';
import ReadingProgressBar from '../components/ReadingProgressBar'; // New Component
import BackButton from '../components/BackButton';

const StoryDetail = () => {
    const { id } = useParams();
    const shareCardRef = useRef(null);
    const story = stories.find(s => s.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!story) {
        return <div style={{ padding: '40px', textAlign: 'center' }}>Story not found.</div>;
    }

    return (
        <div style={{ paddingBottom: '80px', backgroundColor: 'var(--bg-paper)' }}>
            <ReadingProgressBar /> {/* Reading Progress Bar */}
            {/* Header Image with Fade */}
            <div style={{ position: 'relative', height: '300px', width: '100%' }}>
                <img
                    src={story.img}
                    alt="Story Cover"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '100px',
                    background: 'linear-gradient(to bottom, transparent, var(--bg-paper))'
                }} />

                {/* Back Button */}
                <BackButton />
            </div>

            <div className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 1, boxShadow: 'none' }}>

                {/* Audio Player Bar */}
                <div style={{
                    backgroundColor: 'var(--bg-paper-dark)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '24px',
                    boxShadow: 'var(--shadow-card)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <PlayCircle size={32} fill="var(--primary-maroon)" color="white" />
                        <div>
                            <span style={{ fontSize: '12px', display: 'block', fontWeight: 600 }}>Listen to Story</span>
                            <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{story.audioDuration} • By {story.author}</span>
                        </div>
                    </div>
                </div>

                {/* Title & Meta */}
                <h1 style={{ fontSize: '30px', marginBottom: '8px', lineHeight: 1.2, color: 'var(--primary-maroon)' }}>
                    {story.title}
                </h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#ddd', overflow: 'hidden' }}>
                        <img src={`https://ui-avatars.com/api/?name=${story.author}&background=random`} alt="Author" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{story.author}</span>
                    <span style={{ margin: '0 4px', color: '#ccc' }}>•</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{story.readTime}</span>
                </div>

                {/* Content */}
                <article style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    lineHeight: '1.8',
                    color: 'var(--text-charcoal)'
                }} dangerouslySetInnerHTML={{ __html: story.content }} />

                <div style={{ height: '40px' }} />

                {/* Hidden Premium Card for Capture - Rendered Off-screen */}
                <div style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
                    <PremiumShareCard
                        ref={shareCardRef}
                        title={story.title}
                        excerpt={story.content.substring(0, 150).replace(/<[^>]*>?/gm, '') + "..."}
                        author={story.author}
                    />
                </div>

                {/* Social Actions */}
                <div style={{ display: 'flex', gap: '16px', marginTop: '32px', marginBottom: '40px', justifyContent: 'center' }}>
                    <LikeButton id={story.id} collectionName="stories" />
                    <SocialShare elementRef={shareCardRef} title={story.title} />
                </div>

                {/* Content Context (User Request) */}
                <ContentContext data={story.about} />

                {/* Author Box */}
                <div style={{
                    backgroundColor: 'var(--bg-paper-dark)',
                    padding: '24px',
                    borderRadius: '16px',
                    marginBottom: '40px',
                    textAlign: 'center'
                }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', margin: '0 auto 12px', overflow: 'hidden' }}>
                        <img src={`https://ui-avatars.com/api/?name=${story.author}&background=random`} alt="Author" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{story.author}</h3>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>Author</p>
                </div>

                <div style={{ height: '2px', background: 'rgba(0,0,0,0.05)', marginBottom: '40px' }} />

                {/* Integration of Retention Loop (Read Next & Subscribe) */}
                <RetentionLoop currentId={story.id} type="story" />

                <div style={{ height: '2px', background: 'rgba(0,0,0,0.05)', marginBottom: '40px' }} />

                {/* Comments */}
                <CommentSection id={story.id} collectionName="stories" />

            </div>
        </div>
    );
};

export default StoryDetail;
