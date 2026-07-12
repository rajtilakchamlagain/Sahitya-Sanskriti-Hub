import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Header from '../components/Header'
import HeroCard from '../components/HeroCard'
import QuoteCard from '../components/QuoteCard'
import CategoryScroller from '../components/CategoryScroller'
import GridFeed from '../components/GridFeed'
import VideoRow from '../components/VideoRow'
import { articles } from '../data/articles' // Added
import ArticleCard from '../components/ArticleCard' // Added
import HistoryWidget from '../components/HistoryWidget' // Added [NEW]
import ResearchWidget from '../components/ResearchWidget' // Added [NEW]
import SubscribeSection from '../components/SubscribeSection' // Added
import ShradhanjaliBanner from '../components/ShradhanjaliBanner'
import DiscoveryConsole from '../components/DiscoveryConsole'
import ZubeenBanner from '../components/ZubeenBanner' // [NEW] Premium Section

const Home = () => {
    return (
        <div className="section-reset">
            <Header />

            <main className="home-container" style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingBottom: '40px' }}>

                {/* Mobile-only Kaal Chakra (HistoryWidget) at the top */}
                <div className="mobile-only-widget">
                    <HistoryWidget />
                </div>

                {/* Top Section: Split Content (Desktop) / Stacked (Mobile) */}
                <div className="home-split-layout">

                    {/* Left Column: Feed */}
                    <div className="main-content-feed" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {/* Homepage Intro (User Request) */}
                        <section className="hero-wrapper">
                            <div className="hero-card">
                                <img
                                    src="/logo.png?v=2"
                                    alt="Sahitya Sanskriti Logo"
                                    className="hero-logo"
                                    fetchPriority="high"
                                />
                                <h2 className="hero-title">
                                    Welcome to Sahitya Sanskriti Hub
                                </h2>
                                <Link to={`/article/${articles[articles.length - 1].id}`} style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    backgroundColor: 'rgba(139, 0, 0, 0.05)',
                                    color: 'var(--primary-maroon)',
                                    padding: '8px 16px',
                                    borderRadius: '24px',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    marginTop: '8px',
                                    marginBottom: '16px',
                                    border: '1px solid rgba(139, 0, 0, 0.1)',
                                    boxShadow: '0 4px 12px rgba(139, 0, 0, 0.05)',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(139, 0, 0, 0.1)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 0, 0, 0.05)'; }}
                                >
                                    <span style={{ backgroundColor: 'var(--primary-maroon)', color: 'white', padding: '3px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.5px' }}>NEWLY ADDED</span>
                                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>{articles[articles.length - 1].title}</span>
                                    <ArrowRight size={16} />
                                </Link>
                                <p className="hero-subtitle">
                                    "A curated space for poetry, culture, and reflections rooted in Himalayan heritage and modern thought."
                                </p>
                                
                                <DiscoveryConsole />
                            </div>
                        </section>

                        {/* Latest Articles Section (Moved to Top) */}
                        <div className="grid-item-articles" style={{ padding: '0 16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                <h3 style={{ fontSize: '18px' }}>Latest Articles</h3>
                                <Link to="/articles" style={{ fontSize: '12px', color: 'var(--primary-maroon)', fontWeight: 600 }}>View All</Link>
                            </div>
                            <div className="hide-scrollbar" style={{
                                display: 'flex',
                                gap: '16px',
                                overflowX: 'auto',
                                padding: '0 16px 16px 16px',
                                margin: '0 -16px' // Negative margin to allow full-width scroll on mobile while keeping alignment
                            }}>
                                {[...articles].reverse().map(article => (
                                    <div key={article.id} style={{ minWidth: '280px', maxWidth: '300px', flexShrink: 0 }}>
                                        <ArticleCard article={article} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* [NEW] Premium Zubeen Garg Feature */}
                        <ZubeenBanner />

                        <div className="grid-item-shradhanjali">
                            <ShradhanjaliBanner />
                        </div>

                        <div className="grid-item-stories" style={{ marginTop: '0px' }}>
                            <CategoryScroller />
                        </div>

                        <div className="grid-item-poems" style={{ padding: '0 16px', position: 'relative' }}>
                            <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Poetry Collection</h3>

                            {/* Left Decorator (Desktop Only) - Absolutely positioned so it doesn't crush the CSS Grid container */}
                            <div className="desktop-only" style={{ position: 'absolute', top: '50px', left: '-20px', width: '30px', writingMode: 'vertical-rl', transform: 'rotate(180deg)', textAlign: 'center', opacity: 0.15, color: 'var(--primary-maroon)', letterSpacing: '8px', fontSize: '14px', pointerEvents: 'none' }}>
                                साहित्य  संस्कृति
                            </div>

                            <GridFeed />

                            {/* Right Decorator (Desktop Only) */}
                            <div className="desktop-only" style={{ position: 'absolute', top: '50px', right: '-20px', width: '30px', writingMode: 'vertical-rl', textAlign: 'center', opacity: 0.15, color: 'var(--accent-gold)', letterSpacing: '8px', fontSize: '14px', pointerEvents: 'none' }}>
                                साहित्य  संस्कृति
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Widgets */}
                    <div className="sidebar-widgets" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                        {/* Desktop-only Kaal Chakra (HistoryWidget) in the sidebar */}
                        <div className="desktop-only-widget">
                            <HistoryWidget />
                        </div>

                        {/* [NEW] Research Highlights (Replacing Stats) */}
                        <ResearchWidget />

                        {/* Poem of the Day Section (Demoted) */}
                        <div className="grid-item-featured">
                            <div style={{ padding: '0 16px', marginBottom: '12px' }}>
                                <h2 style={{ fontSize: '18px', fontFamily: 'var(--font-heading)', color: 'var(--text-muted)' }}>Featured</h2>
                            </div>
                            <HeroCard />
                        </div>

                        {/* Daily Quote Section (Demoted) */}
                        <div className="grid-item-quote">
                            <div style={{ padding: '0 16px', marginBottom: '8px', marginTop: '16px' }}>
                                <h3 style={{ fontSize: '16px', color: 'var(--text-muted)', fontWeight: 600 }}>Daily Wisdom</h3>
                            </div>
                            <QuoteCard />
                        </div>
                    </div>
                </div>




                {/* Full Width Bottom Section */}
                <div className="grid-item-videos section-reset">
                    <h3 style={{ fontSize: '18px', padding: '0 16px', marginBottom: '16px' }}>Video Lectures & Recitals</h3>
                    <VideoRow />
                </div>

                {/* Newsletter Subscription Pre-Footer */}
                <SubscribeSection />
            </main>
        </div>
    )
}

export default Home
