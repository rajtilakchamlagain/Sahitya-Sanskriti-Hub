import { useParams, useNavigate, Link } from 'react-router-dom';
import { useRef } from 'react';
import { poems } from '../data/poems';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import LikeButton from '../components/LikeButton';
import CommentSection from '../components/CommentSection';
import SocialShare from '../components/SocialShare';
import PremiumShareCard from '../components/PremiumShareCard';
import RetentionLoop from '../components/RetentionLoop';
import ContentContext from '../components/ContentContext';
import RelatedPoems from '../components/RelatedPoems';
import BackButton from '../components/BackButton';

const PoemDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const shareCardRef = useRef(null); // Ref for the hidden high-res card
    const poemId = parseInt(id);
    const poem = poems.find(p => p.id === poemId);

    // If poem not found, redirect to home
    if (!poem) {
        return (
            <div style={{ padding: '40px', textAlign: 'center' }}>
                <p>Poem not found.</p>
                <Link to="/">Return Home</Link>
            </div>
        );
    }

    const hasPrevious = poemId > 1;
    const hasNext = poemId < poems.length;

    const goToPrevious = () => {
        if (hasPrevious) navigate(`/poem/${poemId - 1}`);
    };

    const goToNext = () => {
        if (hasNext) navigate(`/poem/${poemId + 1}`);
    };

    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            backgroundColor: 'var(--bg-paper)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden' // Need this so background animations don't cause page scrollbars
        }}>
            <BackButton />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": poem.title,
                    "author": {
                        "@type": "Person",
                        "name": "Dr. Tilak Sarmah",
                        "url": "https://sahityasanskriti.online/about"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "SahityaSanskritiHub",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://sahityasanskriti.online/logo.png"
                        }
                    },
                    "mainEntityOfPage": `https://sahityasanskriti.online/poem/${poem.id}`
                })
            }} />
            {/* Content wrapper with zIndex to stay above background */}
            <div style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Minimal Header */}
                <nav style={{
                    padding: '16px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid rgba(0,0,0,0.05)'
                }}>
                    <Link to="/" style={{ color: 'var(--primary-maroon)', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                        <img src="/logo.png?v=2" alt="Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '16px', fontWeight: 700, lineHeight: 1 }}>SahityaSanskriti</span>
                            <span style={{ fontSize: '10px', color: 'var(--accent-gold)' }}>Hub</span>
                        </div>
                    </Link>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', fontSize: '14px', marginRight: '16px' }}>
                            <Home size={16} /> Home
                        </Link>
                        <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Poem {poem.id} / {poems.length}
                        </span>
                    </div>
                </nav>

                {/* Poem Content */}
                <main style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '40px 24px',
                    textAlign: 'center',
                    maxWidth: '600px',
                    margin: '0 auto',
                    width: '100%'
                }}>
                    {/* Capture Area for Sharing */}
                    <div style={{
                        backgroundColor: '#FDF6E3', // Ensure background is captured
                        padding: '40px',
                        borderRadius: '8px',
                        width: '100%'
                    }}>
                        <h1 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '28px',
                            color: 'var(--primary-maroon)',
                            marginBottom: '12px'
                        }}>
                            {poem.title}
                        </h1>

                        <div style={{
                            width: '40px',
                            height: '2px',
                            backgroundColor: 'var(--accent-gold)',
                            marginBottom: '32px',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}></div>

                        {/* Optional Poem Illustration */}
                        {poem.image && (
                            <div style={{
                                marginBottom: '32px',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <img
                                    src={poem.image}
                                    alt={poem.title}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '300px',
                                        borderRadius: '8px',
                                        boxShadow: 'var(--shadow-card)',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                        )}

                        <div className="nepali-poem-body">
                            {poem.excerpt}
                        </div>

                        <div style={{
                            fontSize: '14px',
                            fontStyle: 'italic',
                            color: 'var(--text-muted)'
                        }}>
                            — {poem.author}
                        </div>
                    </div>

                    {/* Hidden Premium Card for Capture - Rendered Off-screen */}
                    <div style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
                        <PremiumShareCard
                            ref={shareCardRef}
                            title={poem.title}
                            excerpt={poem.excerpt}
                            author={poem.author}
                        />
                    </div>

                    {/* Social Actions */}
                    <div style={{ display: 'flex', gap: '16px', marginTop: '32px', marginBottom: '20px' }}>
                        <LikeButton id={poem.id} collectionName="poems" />
                        {/* We pass shareCardRef instead of contentRef to capture the hidden luxury card */}
                        <SocialShare elementRef={shareCardRef} title={poem.title} />
                    </div>

                    {/* Content Context */}
                    <ContentContext data={poem.about} />

                    {/* Comments */}
                    <CommentSection id={poem.id} collectionName="poems" />

                    {/* Related Poems Section */}
                    <RelatedPoems currentPoemId={poem.id} currentTags={poem.tags} />

                    <div style={{ height: '100px' }} /> {/* Increased spacer for sticky footer */}

                    {/* Integration of Retention Loop (Read Next & Subscribe) */}
                    <RetentionLoop currentId={poem.id} type="poem" />
                </main>

                {/* Navigation Footer - Sticky Bottom */}
                <footer style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '16px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', // Slightly translucent
                    backdropFilter: 'blur(10px)',
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                    zIndex: 100,
                    boxShadow: '0 -4px 20px rgba(0,0,0,0.05)',
                    maxWidth: '100%' // Ensure it doesn't overflow
                }}>
                    <button
                        onClick={goToPrevious}
                        disabled={!hasPrevious}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '12px 20px',
                            border: 'none',
                            background: hasPrevious ? 'white' : 'transparent',
                            borderRadius: '30px',
                            color: hasPrevious ? 'var(--primary-maroon)' : 'rgba(0,0,0,0.2)',
                            boxShadow: hasPrevious ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                            cursor: hasPrevious ? 'pointer' : 'default',
                            transition: 'all 0.2s ease',
                            opacity: hasPrevious ? 1 : 0 // Hide if no previous to keep spacing or just visibility
                        }}
                    >
                        <ArrowLeft size={18} />
                        <span style={{ fontWeight: 500, fontSize: '14px' }}>Prev</span>
                    </button>

                    <button
                        onClick={goToNext}
                        disabled={!hasNext}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '12px 24px', // Slightly larger for primary action
                            border: 'none',
                            background: hasNext ? 'var(--primary-maroon)' : 'rgba(0,0,0,0.1)',
                            borderRadius: '30px',
                            color: hasNext ? 'white' : 'rgba(0,0,0,0.3)',
                            boxShadow: hasNext ? '0 4px 12px rgba(128, 0, 0, 0.2)' : 'none',
                            cursor: hasNext ? 'pointer' : 'default',
                            transition: 'all 0.2s ease',
                            transform: hasNext ? 'translateY(0)' : 'none'
                        }}
                    >
                        <span style={{ fontWeight: 600, fontSize: '15px' }}>Next Poem</span>
                        <ArrowRight size={18} />
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default PoemDetail;
