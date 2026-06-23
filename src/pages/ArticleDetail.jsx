import { useParams, useNavigate, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { ArrowLeft, Clock } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import LikeButton from '../components/LikeButton';
import CommentSection from '../components/CommentSection';
import ReadingProgressBar from '../components/ReadingProgressBar';
import ArticleShare from '../components/ArticleShare';
import PremiumArticleShareCard from '../components/PremiumArticleShareCard'; // New Component
import BackButton from '../components/BackButton';
import { useEffect, useRef } from 'react';

const ArticleDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const shareCardRef = useRef(null);
    const article = articles.find(a => a.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        return <div style={{ padding: '40px', textAlign: 'center' }}>Article not found. <Link to="/articles">Go back</Link></div>;
    }

    return (
        <div style={{ paddingBottom: '80px', minHeight: '100vh', backgroundColor: 'var(--bg-paper)' }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": article.title,
                    "author": {
                        "@type": "Person",
                        "name": article.author,
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
                    "datePublished": article.date,
                    "mainEntityOfPage": `https://sahityasanskriti.online/article/${article.id}`
                })
            }} />
            <ReadingProgressBar /> {/* Reading Progress Bar */}
            <Header />

            <article className="container" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '20px' }}>

                {/* Back Button */}
                <BackButton />

                {/* Article Header */}
                <header style={{ marginBottom: '32px' }}>

                    {/* Tags */}
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                        {article.tags.map((tag, i) => (
                            <span key={i} style={{
                                fontSize: '12px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                color: 'var(--accent-gold)',
                                fontWeight: 700
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '32px', // Large title
                        lineHeight: '1.3',
                        color: 'var(--primary-maroon)',
                        marginBottom: '24px'
                    }}>
                        {article.title}
                    </h1>

                    {/* Metadata Row */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid rgba(0,0,0,0.1)',
                        paddingBottom: '24px'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: '#ddd',
                                backgroundImage: 'url(/profile.jpg)',
                                backgroundSize: 'cover'
                            }} />
                            <div>
                                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-charcoal)' }}>{article.author}</div>
                                <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span>{article.date}</span>
                                    <span>•</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> {article.readTime}</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Interaction: Like Button */}
                        <LikeButton id={article.id} collectionName="articles" />
                    </div>
                </header>

                {/* Featured Image */}
                <div style={{
                    width: '100%',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    marginBottom: '32px',
                    boxShadow: 'var(--shadow-soft)'
                }}>
                    <img
                        src={article.image}
                        alt={article.title}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </div>

                {/* Content Body */}
                <div
                    className="article-content nepali-content"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Hidden Premium Card for Capture - Rendered Off-screen */}
                <div style={{ position: 'absolute', top: '-9999px', left: '-9999px', pointerEvents: 'none' }}>
                    <PremiumArticleShareCard
                        ref={shareCardRef}
                        title={article.title}
                        excerpt={article.content.replace(/<[^>]*>?/gm, '').substring(0, 180) + "..."}
                        author={article.author}
                    />
                </div>

                {/* Premium Share Component */}
                <ArticleShare title={article.title} elementRef={shareCardRef} />

                {/* Author Bio / Footer */}
                <div style={{
                    marginTop: '32px', // Reduced margin because Share is right above it
                    padding: '32px',
                    backgroundColor: 'rgba(139, 0, 0, 0.03)',
                    borderRadius: '16px',
                    border: '1px solid rgba(139, 0, 0, 0.05)'
                }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-maroon)', marginBottom: '8px' }}>About the Author</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                        Dr. Tilak Sarmah is a scholar and writer dedicated to preserving and exploring the depths of Assamese literature and culture.
                    </p>
                </div>

                {/* Related Articles - Growth Engine */}
                <div style={{ marginTop: '48px', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '48px' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: 'var(--text-main)', marginBottom: '24px' }}>
                        Read Next
                    </h3>
                    <div className="grid-feed" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        {articles
                            .filter(a => a.id !== article.id) // Exclude current
                            .sort(() => 0.5 - Math.random()) // Shuffle
                            .slice(0, 2) // Take 2
                            .map(related => (
                                <div key={related.id} className="article-card">
                                    <Link to={`/article/${related.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                                        <div className="article-card-image-wrapper" style={{ height: '180px' }}>
                                            <img src={related.image} alt={related.title} loading="lazy" />
                                        </div>
                                        <div className="article-card-content" style={{ padding: '16px' }}>
                                            <h4 className="article-card-title" style={{ fontSize: '18px', marginBottom: '8px' }}>{related.title}</h4>
                                            <p className="article-card-excerpt" style={{ fontSize: '14px', WebkitLineClamp: 2 }}>{related.excerpt}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Comment Board */}
                <CommentSection id={article.id} collectionName="articles" />

            </article>

            <BottomNav />
        </div>
    );
};

export default ArticleDetail;
