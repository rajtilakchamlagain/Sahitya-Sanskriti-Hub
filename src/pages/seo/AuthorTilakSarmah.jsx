import React, { useState } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Calendar, ExternalLink, GraduationCap, ScrollText, ArrowRight } from 'lucide-react';
import { researchPapers } from '../../data/researchPapers';
import { poems } from '../../data/poems';

const AuthorTilakSarmah = () => {
    const [activeTab, setActiveTab] = useState('biography');

    return (
        <div className="content-paper" style={{ paddingBottom: '80px', minHeight: '100vh', maxWidth: '100%' }}>
            <SEO
                title="Dr. Tilak Sarmah | Scholar, Poet, & Cultural Historian"
                description="The official portfolio of Dr. Tilak Sarmah. Explore his contributions to Nepali literature, research on Assamese culture, and philosophical poetry."
                keywords="Dr. Tilak Sarmah, Nepali Literature, Assamese Culture, Scholar, Research Papers, Nepali Kavita"
                publishedTime="2026-02-16T00:00:00+05:30"
                article={true}
                author="Sahitya Sanskriti Hub"
            />

            {/* Schema for Person */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Dr. Tilak Sarmah",
                    "jobTitle": "Scholar & Author",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "Sahitya Sanskriti Hub"
                    },
                    "alumniOf": [
                        { "@type": "CollegeOrUniversity", "name": "Gauhati University" }
                    ],
                    "knowsAbout": ["Nepali Literature", "Assamese Culture", "Indian Aesthetics", "Philosophy"],
                    "image": "https://sahityasanskriti.online/profile.jpg",
                    "url": "https://sahityasanskriti.online/author/dr-tilak-sarmah",
                    "sameAs": [
                        "https://scholar.google.com/",
                        "https://www.researchgate.net/"
                    ]
                })}
            </script>

            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(to bottom, rgba(139, 0, 0, 0.05), transparent)',
                padding: '60px 20px',
                textAlign: 'center',
                borderBottom: '1px solid rgba(0,0,0,0.05)'
            }}>
                <div style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto 24px',
                    border: '4px solid white',
                    boxShadow: '0 8px 24px rgba(139, 0, 0, 0.15)'
                }}>
                    <img
                        src="/profile.jpg"
                        alt="Dr. Tilak Sarmah"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '42px',
                    color: 'var(--primary-maroon)',
                    marginBottom: '12px'
                }}>
                    Dr. Tilak Sarmah
                </h1>
                <p style={{
                    fontSize: '20px',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-heading)',
                    maxWidth: '600px',
                    margin: '0 auto 24px'
                }}>
                    Bridging the gap between <i>Assamese</i> and <i>Nepali</i> literary traditions through rigorous scholarship and poetic expression.
                </p>

                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                    <span className="tag-pill"><GraduationCap size={16} /> PhD in Literature</span>
                    <span className="tag-pill"><ScrollText size={16} /> Published Author</span>
                    <span className="tag-pill"><Award size={16} /> Cultural Historian</span>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="sticky-tabs-container" style={{
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                position: 'sticky',
                top: 0,
                backgroundColor: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                zIndex: 100,
                display: 'flex',
                justifyContent: 'center',
                padding: '0 20px'
            }}>
                {['biography', 'timeline', 'research', 'works'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            padding: '16px 24px',
                            background: 'none',
                            border: 'none',
                            borderBottom: activeTab === tab ? '3px solid var(--primary-maroon)' : '3px solid transparent',
                            color: activeTab === tab ? 'var(--primary-maroon)' : 'var(--text-muted)',
                            fontFamily: 'var(--font-heading)',
                            fontSize: '16px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            textTransform: 'capitalize'
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="container" style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>

                {activeTab === 'biography' && (
                    <div className="animate-fade-in">
                        <h2 className="section-title">Academic Journey</h2>
                        <p className="bio-text">
                            Dr. Tilak Sarmah is a distinguished scholar whose work focuses on the intersection of Nepali and Assamese cultures.
                            With a career spanning over three decades, he has dedicated his life to excavating the shared histories and literary dialogues between these two rich traditions.
                        </p>
                        <p className="bio-text">
                            His research methodology combines archival rigor with ethnographic sensitivity, ensuring that oral traditions and folklore are preserved alongside written texts.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
                            <div className="info-card">
                                <h3 className="card-title">Core Philosophy</h3>
                                <p>"Literature is not just a reflection of society, but a bridge that connects diverse consciousness. In the context of Northeast India, this bridge is vital for harmony."</p>
                            </div>
                            <div className="info-card">
                                <h3 className="card-title">Areas of Expertise</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><ArrowRight size={16} color="var(--accent-gold)" /> Comparative Literature</li>
                                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><ArrowRight size={16} color="var(--accent-gold)" /> Folklore Studies</li>
                                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><ArrowRight size={16} color="var(--accent-gold)" /> Indian Aesthetics</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'timeline' && (
                    <div className="animate-fade-in">
                        <h2 className="section-title">Timeline of Works</h2>
                        <div className="timeline-container">
                            {[
                                { year: '2024', title: 'Cultural Synthesis in Assam', desc: 'Keynote address at the Northeast Literary Festival.' },
                                { year: '2020', title: 'Published "Nepali Sahitya Ko Itihas"', desc: 'A comprehensive history of Nepali literature in the context of Assam.' },
                                { year: '2015', title: 'PhD Awarded', desc: 'Received Doctorate for thesis on Comparative Folklore.' },
                                { year: '2010', title: 'Ek Din (Poetry Collection)', desc: 'Critically acclaimed collection exploring existential themes.' }
                            ].map((item, index) => (
                                <div key={index} style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
                                    <div style={{
                                        flexShrink: 0,
                                        width: '80px',
                                        textAlign: 'right',
                                        fontFamily: 'var(--font-heading)',
                                        fontWeight: 700,
                                        color: 'var(--primary-maroon)',
                                        fontSize: '20px'
                                    }}>
                                        {item.year}
                                    </div>
                                    <div style={{
                                        borderLeft: '2px solid var(--accent-gold)',
                                        paddingLeft: '24px',
                                        paddingBottom: '8px',
                                        position: 'relative'
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            left: '-6px',
                                            top: '8px',
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '50%',
                                            backgroundColor: 'var(--primary-maroon)'
                                        }} />
                                        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>{item.title}</h3>
                                        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '15px' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'research' && (
                    <div className="animate-fade-in">
                        <h2 className="section-title">Research Publications</h2>
                        <div style={{ display: 'grid', gap: '20px' }}>
                            {researchPapers.map(paper => (
                                <div key={paper.id} className="research-item-card">
                                    <Link to={paper.link || `/research/${paper.id}`} className="research-link">
                                        <h3 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--primary-maroon)' }}>
                                            {paper.title}
                                        </h3>
                                        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                                            Published in <i>{paper.journal}</i> • {paper.date}
                                        </p>
                                        <p>{paper.abstract}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'works' && (
                    <div className="animate-fade-in">
                        <h2 className="section-title">Literary Works</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
                            {poems.filter(p => p.author.includes("Tilak")).map(poem => (
                                <Link key={poem.id} to={`/poem/${poem.id}`} style={{ textDecoration: 'none' }}>
                                    <div className="info-card" style={{ height: '100%', transition: 'transform 0.2s' }}>
                                        <h3 style={{ fontSize: '18px', color: 'var(--primary-maroon)', marginBottom: '8px' }}>{poem.title}</h3>
                                        <p style={{ fontSize: '14px', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                            {poem.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div style={{ marginTop: '32px', textAlign: 'center' }}>
                            <Link to="/poems" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary-maroon)', fontWeight: 600 }}>
                                View All Poems <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                )}

            </div>

            <style>{`
                .tag-pill {
                    background: rgba(0,0,0,0.05);
                    padding: 6px 16px;
                    border-radius: 50px;
                    font-size: 14px;
                    color: var(--text-charcoal);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-weight: 500;
                }
                .section-title {
                    font-family: var(--font-heading);
                    font-size: 28px;
                    color: var(--primary-maroon);
                    margin-bottom: 24px;
                    border-bottom: 2px solid rgba(139, 0, 0, 0.1);
                    padding-bottom: 12px;
                }
                .bio-text {
                    font-size: 18px;
                    line-height: 1.8;
                    color: var(--text-charcoal);
                    margin-bottom: 24px;
                }
                .info-card {
                    background: var(--bg-paper);
                    padding: 24px;
                    border-radius: 12px;
                    box-shadow: var(--shadow-card);
                    border: 1px solid rgba(0,0,0,0.05);
                }
                .card-title {
                    color: var(--accent-gold);
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 12px;
                    font-weight: 700;
                }
                .research-item-card {
                    padding: 24px;
                    background: white;
                    border-radius: 12px;
                    border-left: 4px solid var(--primary-maroon);
                    box-shadow: var(--shadow-soft);
                    transition: transform 0.2s;
                }
                .research-item-card:hover {
                    transform: translateX(4px);
                }
                .research-link {
                    text-decoration: none;
                    color: inherit;
                    display: block;
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default AuthorTilakSarmah;
