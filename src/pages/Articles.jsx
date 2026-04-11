import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import DesktopSidebar from '../components/DesktopSidebar';

const Articles = () => {
    return (
        <div style={{ paddingBottom: '80px', minHeight: '100vh', backgroundColor: 'var(--bg-paper)' }}>
            <Header />

            <div className="container" style={{
                display: 'flex',
                gap: '40px',
                paddingTop: '20px',
                maxWidth: '1200px', // Constrain max width for large screens
                margin: '0 auto',
                paddingLeft: '16px',
                paddingRight: '16px'
            }}>
                {/* Desktop Sidebar (Hidden on Mobile) */}
                <div className="desktop-sidebar-container" style={{ display: 'none' }}>
                    <DesktopSidebar />
                </div>

                <div style={{ flex: 1, width: '100%' }}>
                    <div style={{
                        padding: '24px 0',
                        marginBottom: '16px',
                        textAlign: 'center',

                    }}>
                        <h1 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '32px',
                            color: 'var(--primary-maroon)',
                            marginBottom: '8px'
                        }}>
                            Articles & Essays
                        </h1>
                        <p style={{
                            fontSize: '16px',
                            color: 'var(--text-muted)',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Thought-provoking writings on literature, culture, and society by Dr. Tilak Sarmah.
                        </p>
                    </div>

                    {/* Articles Grid - Reusing dedicated article grid styling */}
                    <div className="article-grid">
                        {[...articles].reverse().map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                </div>
            </div>

            <BottomNav />
        </div>
    );
};

export default Articles;
