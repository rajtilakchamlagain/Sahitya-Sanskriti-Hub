import { useParams, Link } from 'react-router-dom';
import { nepaliContributionPaper } from '../data/researchContent';
import { ArrowLeft, BookOpen, Quote, Calendar, User } from 'lucide-react';
import { useEffect } from 'react';

function ResearchDetail() {
    const { id } = useParams();
    // In a real app, we'd fetch based on ID. For now, we only have one full paper.
    const paper = nepaliContributionPaper;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!paper) return <div>Paper not found</div>;

    return (
        <div style={{ padding: '0 0 80px 0', minHeight: '100vh', color: '#F8FAFC' }}>

            {/* Hero Section - Cinematic */}
            <div style={{
                position: 'relative',
                padding: '120px 24px 60px 24px',
                background: 'linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.8) 100%)',
                textAlign: 'center'
            }}>
                <Link to="/research" style={{
                    position: 'absolute',
                    top: '24px',
                    left: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    padding: '8px 16px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50px',
                    backdropFilter: 'blur(10px)'
                }}>
                    <ArrowLeft size={16} /> Back to Research
                </Link>

                <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(32px, 5vw, 48px)',
                    fontWeight: '700',
                    color: '#F8FAFC',
                    textShadow: '0 4px 20px rgba(139, 0, 0, 0.5)',
                    maxWidth: '800px',
                    margin: '0 auto 24px auto',
                    lineHeight: '1.2'
                }}>
                    {paper.title}
                </h1>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '24px',
                    fontSize: '14px',
                    opacity: 0.9,
                    flexWrap: 'wrap'
                }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <User size={16} color="#38BDF8" /> {paper.authors.join(' & ')}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <BookOpen size={16} color="#FACC15" /> {paper.journal}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Calendar size={16} color="#F472B6" /> {paper.date}
                    </span>
                </div>
            </div>

            {/* Main Content Container - "The Scholar's Desk in Space" */}
            <div className="container" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95) !important', // High contrast paper look
                color: '#1E293B',
                maxWidth: '800px',
                padding: '40px',
                borderRadius: '24px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
            }}>

                {/* Abstract Box */}
                <div style={{
                    padding: '24px',
                    backgroundColor: '#F1F5F9', // Light Slate
                    borderRadius: '16px',
                    borderLeft: '4px solid var(--primary-maroon)',
                    marginBottom: '40px',
                    fontStyle: 'italic',
                    lineHeight: '1.8'
                }}>
                    <span style={{ fontWeight: '700', color: 'var(--primary-maroon)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>Abstract</span>
                    {paper.abstract}
                </div>

                {/* Dynamic Sections */}
                {paper.sections.map((section, index) => (
                    <div key={index} style={{ marginBottom: '48px' }}>
                        <h2 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '28px',
                            color: 'var(--primary-maroon)',
                            marginBottom: '20px',
                            borderBottom: '1px solid #E2E8F0',
                            paddingBottom: '12px'
                        }}>
                            {section.title}
                        </h2>

                        {/* Interspersed Images - Logic to alternate */}
                        {index === 0 && paper.images[0] && (
                            <div style={{
                                float: 'right',
                                width: '40%',
                                marginLeft: '24px',
                                marginBottom: '16px',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                            }}>
                                <img src={paper.images[0]} alt="Historical Document" style={{ width: '100%', height: 'auto', display: 'block' }} />
                                <div style={{ fontSize: '10px', padding: '6px', background: '#F8FAFC', textAlign: 'center', color: '#64748B' }}>Original Manuscript (1893)</div>
                            </div>
                        )}

                        {index === 2 && paper.images[1] && (
                            <div style={{
                                width: '100%',
                                height: '240px',
                                marginBottom: '24px',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                            }}>
                                <img src={paper.images[1]} alt="Cultural Heritage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        )}

                        <p style={{
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: '#334155',
                            whiteSpace: 'pre-line', // Preserve paragraph breaks from data
                            textAlign: 'justify'
                        }}>
                            {section.content}
                        </p>
                    </div>
                ))}

                {/* Citation Footer */}
                <div style={{
                    marginTop: '60px',
                    paddingTop: '20px',
                    borderTop: '1px solid #E2E8F0',
                    fontSize: '12px',
                    color: '#94A3B8',
                    textAlign: 'center'
                }}>
                    Published in {paper.journal}, Vol {paper.volume}, Issue {paper.issue}. © {paper.authors[0]}.
                    <br />
                    Digitally archived on SahityaSanskritiHub.
                </div>
            </div>
        </div>
    )
}

export default ResearchDetail
