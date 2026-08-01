import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, ArrowLeft, BookOpen, Quote, FileText } from 'lucide-react';
import { poems } from '../data/poems';
import { articles } from '../data/articles';
import { stories } from '../data/stories';

const ExploreKeyword = () => {
    const { keyword } = useParams();

    // Format keyword for display: "nepali-poem-about-life" -> "Nepali Poem About Life"
    const displayKeyword = keyword
        ? keyword.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : 'Explore';

    // A simple, fast fuzzy matcher for our dynamic landing pages
    const matchContent = useMemo(() => {
        if (!keyword) return { matchedPoems: [], matchedArticles: [], matchedStories: [] };
        
        // tokenize search terms
        const terms = keyword.toLowerCase().split('-');
        
        const scoreItem = (item) => {
            let score = 0;
            const textToSearch = [
                item.title,
                item.excerpt,
                ...(item.tags || []),
                item.author
            ].join(' ').toLowerCase();

            terms.forEach(term => {
                if (textToSearch.includes(term)) score += 1;
            });
            return score;
        };

        const sortItems = (items) => {
            return items.map(item => ({ ...item, score: scoreItem(item) }))
                // Even if score is 0, we still return them so the page isn't totally empty, 
                // but we prioritize matches. Actually, let's filter if score > 0, 
                // OR just show a fallback if empty to ensure good UX.
                .sort((a, b) => b.score - a.score);
        };

        let scoredPoems = sortItems(poems);
        let scoredArticles = sortItems(articles);
        let scoredStories = sortItems([...stories]);

        // Filter out absolute zero matches if we have SOME matches, 
        // to keep the content highly relevant to the keyword.
        const totalMatches = scoredPoems.filter(p=>p.score > 0).length + 
                             scoredArticles.filter(a=>a.score > 0).length + 
                             scoredStories.filter(s=>s.score > 0).length;

        if (totalMatches > 0) {
            scoredPoems = scoredPoems.filter(p => p.score > 0);
            scoredArticles = scoredArticles.filter(a => a.score > 0);
            scoredStories = scoredStories.filter(s => s.score > 0);
        }

        return {
            matchedPoems: scoredPoems.slice(0, 5), // Top 5
            matchedArticles: scoredArticles.slice(0, 3), // Top 3
            matchedStories: scoredStories.slice(0, 2)
        };
    }, [keyword]);

    const { matchedPoems, matchedArticles, matchedStories } = matchContent;

    return (
        <div className="texture-paper" style={{
            minHeight: '100vh',
            paddingBottom: '100px',
            fontFamily: 'var(--font-body)',
            backgroundColor: 'var(--bg-paper)'
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 16px', position: 'relative', zIndex: 10 }}>
                {/* Header Navigation */}
                <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Link to="/" style={{
                        color: 'var(--primary-maroon)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: '40px', height: '40px', borderRadius: '50%',
                        backgroundColor: 'rgba(255, 245, 245, 0.9)', textDecoration: 'none',
                        border: '1px solid rgba(255, 228, 228, 0.5)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)', backdropFilter: 'blur(4px)', transition: 'all 0.2s'
                    }}>
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 style={{ fontSize: '28px', fontFamily: 'var(--font-heading)', color: 'var(--primary-maroon)', margin: 0 }}>
                            Explore Content
                        </h1>
                    </div>
                </div>

                {/* Search Intent Hero Card */}
                <div style={{
                    background: 'linear-gradient(135deg, #2c0404 0%, #4a0e0e 100%)',
                    padding: '32px', borderRadius: '20px', marginBottom: '40px',
                    boxShadow: '0 12px 40px rgba(128,0,0,0.25)', color: 'white',
                    border: '1px solid rgba(212, 175, 55, 0.2)', textAlign: 'center'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                        <div style={{
                            backgroundColor: 'rgba(212, 175, 55, 0.15)', width: '64px', height: '64px',
                            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            border: '1px solid rgba(212, 175, 55, 0.3)'
                        }}>
                            <Search size={28} color="#D4AF37" />
                        </div>
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-heading)', color: '#eaddaa', margin: '0 0 12px 0', fontSize: '32px' }}>
                        "{displayKeyword}"
                    </h2>
                    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: '1.6', fontWeight: 300 }}>
                        Curated selections from Dr. Tilak Sarmah's archive related to your search context.
                    </p>
                </div>

                {/* Section: Poems */}
                {matchedPoems.length > 0 && (
                    <div style={{ marginBottom: '40px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                            <Quote size={20} color="var(--primary-maroon)" />
                            <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', margin: 0, color: 'var(--primary-maroon)' }}>Related Poems</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {matchedPoems.map(poem => (
                                <Link to={`/poem/${poem.id}`} key={poem.id} style={{
                                    backgroundColor: 'rgba(255,255,255,0.7)', padding: '20px', borderRadius: '16px',
                                    textDecoration: 'none', color: 'inherit', border: '1px solid rgba(255,255,255,0.8)',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', gap: '16px',
                                    transition: 'transform 0.2s',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <img src={poem.image} alt={poem.title} style={{ width: '60px', height: '60px', borderRadius: '10px', objectFit: 'cover' }} />
                                    <div>
                                        <h4 style={{ margin: '0 0 6px 0', fontSize: '18px', color: '#2c0404', fontFamily: 'var(--font-heading)' }}>{poem.title}</h4>
                                        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted)' }}>"{poem.excerpt.substring(0, 60)}..."</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Section: Articles */}
                {matchedArticles.length > 0 && (
                    <div style={{ marginBottom: '40px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                            <FileText size={20} color="var(--primary-maroon)" />
                            <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', margin: 0, color: 'var(--primary-maroon)' }}>Related Research & Articles</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {matchedArticles.map(article => (
                                <Link to={`/article/${article.id}`} key={article.id} style={{
                                    backgroundColor: 'rgba(255,255,255,0.7)', padding: '20px', borderRadius: '16px',
                                    textDecoration: 'none', color: 'inherit', border: '1px solid rgba(255,255,255,0.8)',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', gap: '16px',
                                    transition: 'transform 0.2s',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <div style={{ width: '60px', height: '60px', borderRadius: '10px', backgroundColor: 'rgba(128,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <BookOpen size={24} color="#800000" style={{opacity: 0.5}} />
                                    </div>
                                    <div>
                                        <h4 style={{ margin: '0 0 6px 0', fontSize: '18px', color: '#2c0404', fontFamily: 'var(--font-heading)' }}>{article.title}</h4>
                                        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted)' }}>{article.excerpt ? article.excerpt.substring(0, 60) : 'Read full article...'}...</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
                
                {/* Section: Stories */}
                {matchedStories.length > 0 && (
                    <div style={{ marginBottom: '40px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                            <BookOpen size={20} color="var(--primary-maroon)" />
                            <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', margin: 0, color: 'var(--primary-maroon)' }}>Related Stories</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {matchedStories.map(story => (
                                <Link to={`/story/${story.id}`} key={story.id} style={{
                                    backgroundColor: 'rgba(255,255,255,0.7)', padding: '20px', borderRadius: '16px',
                                    textDecoration: 'none', color: 'inherit', border: '1px solid rgba(255,255,255,0.8)',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', gap: '16px',
                                    transition: 'transform 0.2s',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <img src={story.img} alt={story.title} style={{ width: '60px', height: '60px', borderRadius: '10px', objectFit: 'cover' }} />
                                    <div>
                                        <h4 style={{ margin: '0 0 6px 0', fontSize: '18px', color: '#2c0404', fontFamily: 'var(--font-heading)' }}>{story.title}</h4>
                                        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted)' }}>{story.author} • {story.readTime}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
                {/* Fallback Message */}
                {matchedPoems.length === 0 && matchedArticles.length === 0 && matchedStories.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '40px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '16px' }}>
                        <p style={{ color: 'var(--text-muted)' }}>Exploring profound depths... Check back soon or visit our main archive.</p>
                        <Link to="/" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 'bold' }}>Return Home</Link>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ExploreKeyword;
