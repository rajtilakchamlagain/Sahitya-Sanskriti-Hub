import { Link } from 'react-router-dom';
import { poems } from '../data/poems';
import { articles } from '../data/articles';
import { stories } from '../data/stories';
import './NewsTicker.css';

const NewsTicker = () => {
    // Construct the live feed by taking the latest items from each category
    const feedItems = [
        ...articles.slice(-4).map(a => ({ id: `a-${a.id}`, type: 'ARTICLE', title: a.title, link: `/article/${a.id}` })),
        ...poems.slice(-4).map(p => ({ id: `p-${p.id}`, type: 'POEM', title: p.title, link: `/poem/${p.id}` })),
        ...stories.slice(-4).map(s => ({ id: `s-${s.id}`, type: 'STORY', title: s.title, link: `/story/${s.id}` }))
    ];

    // Shuffle them slightly or sort by some logic. Since we just want a mix, shuffling is good for a ticker.
    // To keep it deterministic for React hydration (if SSG used later), we can sort by ID descending or just interleave them.
    // Interleaving:
    const mixedFeed = [];
    for (let i = 0; i < 4; i++) {
        if (feedItems[0 + i]) mixedFeed.push(feedItems[0 + i]); // Article
        if (feedItems[4 + i]) mixedFeed.push(feedItems[4 + i]); // Poem
        if (feedItems[8 + i]) mixedFeed.push(feedItems[8 + i]); // Story
    }

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
