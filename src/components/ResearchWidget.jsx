import { researchPapers } from '../data/researchPapers';
import { FileText, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResearchWidget = () => {
    // Take only the top 3 papers
    const highlightedPapers = researchPapers.slice(0, 3);

    return (
        <div className="glass-card" style={{
            padding: '24px',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            border: '2px solid rgba(180, 83, 9, 0.5)' // Consistent Bold Gold Border
        }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(56, 189, 248, 0.1)', // Light Blue Tint for Research
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <FileText size={18} color="#0284c7" /> {/* Sky 600 */}
                    </div>
                    <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '18px',
                        color: 'var(--text-main)',
                        lineHeight: '1.2'
                    }}>
                        Research Highlights
                    </h3>
                </div>
                {highlightedPapers.length > 0 && (
                    <Link to="/research" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'var(--accent-gold)', fontWeight: 600 }}>
                        Browse All <ArrowRight size={12} />
                    </Link>
                )}
            </div>

            {/* Papers List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {highlightedPapers.length === 0 ? (
                    <div style={{ padding: '20px 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px', fontStyle: 'italic' }}>
                        No research papers uploaded yet.
                    </div>
                ) : (
                    highlightedPapers.map((paper, index) => (
                        <div key={paper.id}>
                            <Link
                                to={paper.id === 1 ? "/research/nepali-contribution-assam" : paper.link}
                                style={{ textDecoration: 'none', display: 'block', group: 'hover' }}
                            >
                                <h4 style={{
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    color: 'var(--text-main)',
                                    marginBottom: '4px',
                                    lineHeight: '1.4',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                }}>
                                    {paper.title}
                                </h4>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: 'var(--text-muted)' }}>
                                    <span style={{
                                        backgroundColor: 'rgba(0,0,0,0.05)',
                                        padding: '2px 6px',
                                        borderRadius: '4px'
                                    }}>
                                        {paper.date}
                                    </span>
                                    <span>{paper.journal}</span>
                                </div>
                            </Link>
                            {/* Divider except for last item */}
                            {index < highlightedPapers.length - 1 && (
                                <div style={{ height: '1px', backgroundColor: 'rgba(0,0,0,0.05)', width: '100%', marginTop: '12px' }}></div>
                            )}
                        </div>
                    ))
                )}
            </div>

            {/* Footer Action */}
            <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <Link to="/research" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--bg-core)',
                    color: 'var(--primary-maroon)',
                    fontSize: '13px',
                    fontWeight: 600,
                    border: '1px solid rgba(159, 18, 57, 0.2)',
                    transition: 'all 0.2s ease'
                }}>
                    View Full Archive
                </Link>
            </div>
        </div>
    );
};

export default ResearchWidget;
