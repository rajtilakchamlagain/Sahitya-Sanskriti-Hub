import React, { useEffect, useRef } from 'react';
import { BookOpen, MapPin, Calendar, Heart, Award, ArrowDown, Sparkles, GraduationCap } from 'lucide-react';
import SEO from '../components/SEO';

const ShradhanjaliDevSharma = () => {
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observerOptions = { threshold: 0.1, rootMargin: '0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                }
            });
        }, observerOptions);

        sectionRefs.current.forEach(ref => { if (ref) observer.observe(ref); });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="shradhanjali-memorial">
            <SEO title="श्रद्धाञ्जली: कृति शिक्षक देव शर्मा चापागाईं | Sahitya Sanskriti" />
            <style>{`
                .shradhanjali-memorial { background: #0a0a0a; color: #f0e6d2; font-family: 'serif'; overflow-x: hidden; position: relative; }
                .reveal { opacity: 0; transform: translateY(30px); transition: all 1s ease-out; }
                .reveal-active { opacity: 1 !important; transform: translateY(0) !important; }
                .glow-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 70%); pointer-events: none; z-index: 1; }
                
                .hero-section { height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; position: relative; z-index: 2; }
                .hero-shloka { font-size: clamp(24px, 4vw, 36px); color: #D4AF37; max-width: 800px; margin-bottom: 20px; line-height: 1.6; font-style: italic; }
                
                .portrait-section { padding: 80px 20px; max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.5fr; gap: 60px; align-items: center; position: relative; z-index: 2; }
                @media (max-width: 968px) { .portrait-section { grid-template-columns: 1fr; text-align: center; } }
                .portrait-container { border-radius: 20px; overflow: hidden; box-shadow: 0 0 50px rgba(212, 175, 55, 0.2); border: 1px solid rgba(212, 175, 55, 0.3); }
                .portrait-image { width: 100%; height: auto; filter: sepia(0.2) contrast(1.05); transition: transform 0.8s; }
                
                .bio-content h1 { font-size: clamp(32px, 5vw, 56px); color: #D4AF37; margin-bottom: 15px; }
                .bio-subtitle { font-size: 20px; color: #c0c0c0; margin-bottom: 30px; border-left: 3px solid #D4AF37; padding-left: 15px; }
                
                .tribute-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 30px; padding: 60px 20px; max-width: 1200px; margin: 0 auto; }
                .tribute-card { background: rgba(30, 30, 30, 0.6); backdrop-filter: blur(10px); border: 1px solid rgba(212, 175, 55, 0.1); border-radius: 15px; padding: 30px; }
                
                .final-shanti { text-align: center; padding: 100px 20px; font-size: 28px; color: #D4AF37; letter-spacing: 5px; }
            `}</style>

            <div className="glow-overlay" />
            
            <header className="hero-section">
                <div className="reveal" ref={el => sectionRefs.current[0] = el}>
                    <GraduationCap size={48} color="#D4AF37" style={{ marginBottom: '30px' }} />
                    <p className="hero-shloka">विद्वत्वं च नृपत्वं च नैव तुल्यं कदाचन।<br />स्वदेशे पूज्यते राजा विद्वान् सर्वत्र पूज्यते॥</p>
                    <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto' }}>- राजा आफ्नो देशमा मात्र पूज्य हुन्छन्, तर विद्वान्/शिक्षक संसारभरि पूज्य हुन्छन्।</p>
                    <ArrowDown className="scroll-hint" size={32} style={{ marginTop: '40px', animation: 'bounce 2s infinite' }} />
                </div>
            </header>

            <section className="portrait-section">
                <div className="reveal portrait-container" ref={el => sectionRefs.current[1] = el}>
                    <img src="/dev_sharma_tribute_portrait_1775849859980.png" alt="Dev Sharma Chapagai" className="portrait-image" />
                </div>
                <div className="reveal bio-content" ref={el => sectionRefs.current[2] = el}>
                    <div className="bio-subtitle">कृति शिक्षक, समाज सेवक - एक श्रद्धाञ्जली</div>
                    <h1>Dev Sharma Chapagai</h1>
                    <div className="bio-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#d0d0d0' }}>
                        <p>गत अंग्रेजी २७ जनवरीका दिन गमिरिपाल निवासी कृति शिक्षक, समाज सेवक देव शर्मा चापागाईंको ८२ वर्षको उमेरमा परलोक भएको छ। बलभद्र शर्मा चापागाई र मधुमाया देवीका सन्तान, देव चापागाईंको जन्म २८ फरवरी १९४१ मा भएको थियो।</p>
                        <p style={{ marginTop: '20px' }}>उनले शिक्षा क्षेत्रमा करिब ४० वर्ष अनवरत सेवा पुर्याए। सतियाको एकादेमी हाइस्कुलबाट शिक्षकता सुरु गरी बडपोखरीपार एम भी स्कुलमा हिन्दी शिक्षकको रुपमा उहाँले पुर्याउनुभएको योगदान अतुलनीय छ।</p>
                    </div>
                </div>
            </section>

            <section className="tribute-grid">
                <div className="reveal tribute-card" ref={el => sectionRefs.current[3] = el}>
                    <Award size={32} color="#D4AF37" style={{ marginBottom: '15px' }} />
                    <h3 style={{ color: '#D4AF37', marginBottom: '10px' }}>सामाजिक सेवा</h3>
                    <p>गमिरिपाल गाउँ उन्नयन समितिको उपसभापति, टलकाबारी पानी योगान समितिको सभापति लगायत विभिन्न संस्थामा संलग्न रहेर उहाँले समाजको हितमा काम गर्नुभयो।</p>
                </div>
                <div className="reveal tribute-card" ref={el => sectionRefs.current[4] = el} style={{ transitionDelay: '0.2s' }}>
                    <BookOpen size={32} color="#D4AF37" style={{ marginBottom: '15px' }} />
                    <h3 style={{ color: '#D4AF37', marginBottom: '10px' }}>शिक्षाको ज्योति</h3>
                    <p>४० वर्षको शिक्षण अवधिमा उहाँले हजारौँ विद्यार्थीहरूलाई ज्ञान र संस्कारको मार्ग देखाउनुभयो। सेवानिवृत्त भएपछि पनि उहाँको सामाजिक सक्रियता घटेको थिएन।</p>
                </div>
                <div className="reveal tribute-card" ref={el => sectionRefs.current[5] = el} style={{ transitionDelay: '0.4s' }}>
                    <Heart size={32} color="#D4AF37" style={{ marginBottom: '15px' }} />
                    <h3 style={{ color: '#D4AF37', marginBottom: '10px' }}>विरासत</h3>
                    <p>उहाँका तीन छोरा-बुहारी, दुई छोरी-जुवाईं र नाति-नातिनाहरूले उहाँको आदर्श र संस्कारलाई अघि बढाउनेछन्। उहाँको अभावमा अञ्चलमा सधैँ एउटा रिक्तता महसुस हुनेछ।</p>
                </div>
            </section>

            <section className="final-shanti reveal" ref={el => sectionRefs.current[6] = el}>
                <p>ॐ शान्तिः शान्तिः शान्तिः।</p>
                <p style={{ fontSize: '16px', marginTop: '20px', color: '#a0a0a0' }}>सन् २०२६</p>
            </section>
        </div>
    );
};

export default ShradhanjaliDevSharma;
