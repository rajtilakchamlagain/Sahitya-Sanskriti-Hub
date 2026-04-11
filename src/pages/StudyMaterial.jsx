import React from 'react';
import { BookOpen, Feather, Sparkles, Star, ChevronRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudyMaterial = () => {
    return (
        <div className="section-reset" style={{ minHeight: '100vh', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
            
            {/* Cinematic Background Elements */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', bottom: '10%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(139,0,0,0.05) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }}></div>

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
                
                {/* Boss-Tier Header Context */}
                <div style={{ padding: '0 16px', marginTop: '40px', textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(212,175,55,0.1)', borderRadius: '20px', color: '#D4AF37', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
                        <Sparkles size={16} /> Premium Academic Hub
                    </div>
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--text-main)', marginBottom: '16px', lineHeight: 1.1 }}>
                        The Scholar's <span style={{ color: 'var(--primary-glow)' }}>Sanctuary</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
                        Elite academic resources, intricate lecture notes, and research essays dedicated to the masters of Nepali literature.
                    </p>
                </div>

                {/* Majestic Glassmorphism Hero */}
                <div style={{
                    margin: '40px 16px',
                    borderRadius: '32px',
                    position: 'relative',
                    height: '350px',
                    background: 'linear-gradient(135deg, #1b263b 0%, #0d1b2a 100%)',
                    boxShadow: '0 24px 48px rgba(0,0,0,0.3)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}>
                    {/* Glowing Orbs Inside Hero */}
                    <div style={{ position: 'absolute', top: '20%', left: '10%', width: '150px', height: '150px', background: 'rgba(212,175,55,0.15)', filter: 'blur(60px)', borderRadius: '50%' }}></div>
                    <div style={{ position: 'absolute', bottom: '10%', right: '20%', width: '200px', height: '200px', background: 'rgba(139,0,0,0.2)', filter: 'blur(80px)', borderRadius: '50%' }}></div>

                    {/* Overlay Content */}
                    <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px' }}>
                        <GraduationCap size={48} color="#D4AF37" style={{ marginBottom: '16px' }} />
                        <h2 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(24px, 4vw, 36px)',
                            color: '#F4ECD8',
                            lineHeight: 1.3,
                            marginBottom: '16px',
                            fontWeight: '300',
                            letterSpacing: '1px'
                        }}>
                            "The beautiful thing about learning is that no one can take it away from you."
                        </h2>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <div style={{ width: '30px', height: '1px', background: '#D4AF37' }}></div>
                            <p style={{ color: '#D4AF37', fontSize: '16px', fontStyle: 'italic', margin: '0', fontWeight: 'bold' }}>B.B. King</p>
                            <div style={{ width: '30px', height: '1px', background: '#D4AF37' }}></div>
                        </div>
                    </div>
                </div>

                {/* Content Area Grid */}
                <div style={{ padding: '0 16px', marginTop: '60px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <BookOpen size={28} color="var(--primary-glow)" />
                            <h3 style={{ fontSize: '28px', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', margin: 0 }}>
                                Masterclass Library
                            </h3>
                        </div>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
                        
                        {/* Interactive Premium Material Card 1 */}
                        <Link to="/study/art-of-writing" style={{ textDecoration: 'none', display: 'block' }}>
                            <div style={{
                                padding: '32px 24px',
                                backgroundColor: 'var(--bg-surface)',
                                borderRadius: '24px',
                                border: '1px solid rgba(212, 175, 55, 0.1)',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseOver={(e) => { 
                                e.currentTarget.style.transform = 'translateY(-6px)'; 
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'; 
                                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)'; 
                                e.currentTarget.querySelector('.card-glow').style.opacity = '1';
                            }}
                            onMouseOut={(e) => { 
                                e.currentTarget.style.transform = 'translateY(0)'; 
                                e.currentTarget.style.boxShadow = 'none'; 
                                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.1)'; 
                                e.currentTarget.querySelector('.card-glow').style.opacity = '0';
                            }}
                            >
                                {/* Hover Glow */}
                                <div className="card-glow" style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)', opacity: 0, transition: 'opacity 0.4s ease' }}></div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                                    <div style={{ backgroundColor: 'rgba(212,175,55,0.1)', padding: '16px', borderRadius: '16px', color: '#D4AF37' }}>
                                        <Feather size={28} />
                                    </div>
                                    <div style={{ display: 'flex', gap: '2px' }}>
                                        <Star size={16} color="#D4AF37" fill="#D4AF37" />
                                        <Star size={16} color="#D4AF37" fill="#D4AF37" />
                                        <Star size={16} color="#D4AF37" fill="#D4AF37" />
                                    </div>
                                </div>

                                <h4 style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', margin: '0 0 12px 0', lineHeight: 1.3 }}>
                                    लेखन कला : पृष्ठभूमि<br/>(The Art of Writing)
                                </h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.7', margin: '0 0 24px 0', flexGrow: 1 }}>
                                    मानव सभ्यताको विकाससँगै विचार र अनुभवलाई अभिव्यक्त गर्ने सशक्त माध्यमको रूपमा लेखन कलाको विकास, यसको ऐतिहासिक पृष्ठभूमि र पूर्वीय तथा पाश्चात्य परम्परा।
                                </p>
                                
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                                    <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        Essay Module
                                    </span>
                                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--primary-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-maroon)' }}>
                                        <ChevronRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {/* Can add more cards dynamically here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyMaterial;
