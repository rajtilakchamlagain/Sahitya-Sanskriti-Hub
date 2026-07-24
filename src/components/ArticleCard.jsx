import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
    return (
        <Link to={article.link || `/article/${article.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
            <div className="article-card">
                {/* Image Section */}
                <div className="article-card-image-wrapper">
                    <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                {/* Content Section */}
                <div className="article-card-content">
                    {/* Meta Tags */}
                    <div className="article-meta">
                        {article.tags.map((tag, index) => (
                            <span key={index} className="article-tag">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h3 className="article-card-title">
                        {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="article-card-excerpt">
                        {article.excerpt}
                    </p>

                    {/* Footer: Date & Read Time */}
                    <div className="article-card-footer">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Calendar size={12} /> {article.date}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Clock size={12} /> {article.readTime}
                            </span>
                        </div>
                        <span style={{ display: 'flex', alignItems: 'center', color: 'var(--primary-maroon)', fontWeight: 600 }}>
                            Read <ChevronRight size={14} />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ArticleCard;
