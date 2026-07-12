import { Link } from 'react-router-dom';
import { poems } from '../data/poems';
import { articles } from '../data/articles';
import { stories } from '../data/stories';
import './NewsTicker.css';

const NewsTicker = () => {
    const dynamicItems = [
        ...articles.slice(-4).map(a => ({ id: `a-${a.id}`, type: 'ARTICLE', title: a.title, link: `/article/${a.id}` })),
        ...poems.slice(-4).map(p => ({ id: `p-${p.id}`, type: 'POEM', title: p.title, link: `/poem/${p.id}` })),
        ...stories.slice(-4).map(s => ({ id: `s-${s.id}`, type: 'STORY', title: s.title, link: `/story/${s.id}` }))
    ];

    const staticItems = [
        { id: 'hydrogen-train', type: 'NEW', title: 'भारतको पहिलो हाइड्रोजन रेल (Recently added)', link: '/article/1783872980140' },
        { id: 'zubeen', type: 'FEATURED', title: 'Zubeen Garg Biography', link: '/zubeen' },
        { id: 'shradhanjali', type: 'MEMORIAL', title: 'Shradhanjali: Dr. Dev Sharma & Yadumani Sarmah', link: '/shradhanjali' }
    ];

    // Interleave static items with dynamic items so they appear evenly
    const mixedFeed = [...staticItems];
    dynamicItems.forEach((item, i) => {
        mixedFeed.splice(i * 2 + 1, 0, item);
    });

    // A ticker needs enough items to fill the screen twice for a seamless loop.
    // If we don't have enough, we can duplicate the array.
    const displayFeed = [...mixedFeed, ...mixedFeed];

    if (displayFeed.length === 0) return null;

    return (
        <div className="news-ticker-container">
            <div className="news-ticker-track">
                {/* Render the track twice for seamless infinite scrolling */}
                <div className="news-ticker-group">
                    {displayFeed.map((item, index) => (
                        <div key={`grp1-${item.id}-${index}`} className="news-ticker-item">
                            <span className="news-ticker-tag">{item.type}</span>
                            <Link to={item.link} className="news-ticker-link">
                                {item.title}
                            </Link>
                            <span className="news-ticker-separator">•</span>
                        </div>
                    ))}
                </div>
                <div className="news-ticker-group" aria-hidden="true">
                    {displayFeed.map((item, index) => (
                        <div key={`grp2-${item.id}-${index}`} className="news-ticker-item">
                            <span className="news-ticker-tag">{item.type}</span>
                            <Link to={item.link} className="news-ticker-link">
                                {item.title}
                            </Link>
                            <span className="news-ticker-separator">•</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsTicker;
