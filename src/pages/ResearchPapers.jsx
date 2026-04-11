import { researchPapers } from '../data/researchPapers'
import { BookOpen, FileText, Calendar, Link as LinkIcon, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function ResearchPapers() {
    return (
        <div style={{ padding: '0 16px 80px 16px' }}>
            {/* Header Card */}
            <div className="texture-paper" style={{
                padding: '32px 24px',
                borderRadius: '16px',
                marginBottom: '32px',
                boxShadow: 'var(--shadow-soft)',
                background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)', // Dark Slate Header
                color: '#F8FAFC',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{
                        width: '48px', height: '48px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(56, 189, 248, 0.15)', // Light Blue Tint
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#38BDF8' // Electric Blue
                    }}>
                        <FileText size={24} />
                    </div>
                    <div>
                        <h1 style={{
                            fontSize: '24px',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: '700',
                            margin: 0,
                            color: '#F8FAFC'
                        }}>
                            Research & Publications
                        </h1>
                        <p style={{
                            fontSize: '15px',
                            margin: '8px 0 0 0',
                            opacity: 0.9,
                            fontFamily: 'var(--font-body)',
                            lineHeight: '1.6',
                            maxWidth: '600px'
                        }}>
                            This section presents selected academic and research publications authored by Dr. Tilak Sarmah.
                            These works reflect years of study, dedication, and contribution to literature and scholarly discourse.
                            Each publication has been carefully preserved here to make it accessible to readers, researchers, and students.
                        </p>
                    </div>
                </div>
            </div>

            {/* List of Papers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {researchPapers.map((paper) => (
                    <div key={paper.id} className="texture-paper" style={{
                        padding: '24px',
                        borderRadius: '16px',
                        boxShadow: 'var(--shadow-card)',
                        backgroundColor: '#FFFFFF', // Clean White Card
                        border: '1px solid #E2E8F0',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Top Row: Journal & Date */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '12px', color: 'var(--text-muted)' }}>
                            <span style={{
                                backgroundColor: '#F1F5F9', // Light Slate Bg
                                color: '#475569',
                                padding: '4px 10px',
                                borderRadius: '100px',
                                fontWeight: '600',
                                display: 'flex', alignItems: 'center', gap: '4px'
                            }}>
                                <BookOpen size={12} /> {paper.journal}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Calendar size={12} /> {paper.date}
                            </span>
                        </div>

                        {/* Title */}
                        <h2 style={{
                            fontSize: '20px',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: '700',
                            color: 'var(--primary-maroon)', // Keep Maroon for brand connection
                            marginBottom: '12px',
                            lineHeight: '1.4'
                        }}>
                            {paper.title}
                        </h2>

                        {/* Abstract */}
                        <p style={{
                            fontSize: '15px',
                            color: 'var(--text-charcoal)',
                            lineHeight: '1.6',
                            marginBottom: '16px',
                            opacity: 0.9
                        }}>
                            {paper.abstract}
                        </p>

                        {/* Tags */}
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                            {paper.tags.map(tag => (
                                <span key={tag} style={{
                                    fontSize: '11px',
                                    color: 'var(--accent-gold)',
                                    border: '1px solid rgba(197, 160, 40, 0.3)',
                                    padding: '2px 8px',
                                    borderRadius: '4px'
                                }}>
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Action Button */}
                        <Link to={paper.id === 1 ? "/research/nepali-contribution-assam" : paper.link} style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: '#0F172A', // Slate Dark
                            fontWeight: '600',
                            fontSize: '14px',
                            textDecoration: 'none',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            backgroundColor: paper.id === 1 ? '#FDE68A' : '#F8FAFC', // Highlight the actionable one
                            border: paper.id === 1 ? '1px solid #F59E0B' : '1px solid #E2E8F0',
                            transition: 'all 0.2s ease'
                        }}>
                            {paper.id === 1 ? "Read Full Report" : "Read Paper"} <ArrowRight size={16} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ResearchPapers
