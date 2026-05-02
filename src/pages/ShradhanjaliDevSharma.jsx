import React, { useEffect, useRef } from 'react';
import { BookOpen, MapPin, Calendar, Heart, Award, ArrowDown, Sparkles, GraduationCap, Briefcase, Users, Anchor } from 'lucide-react';
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
        <div className="shradhanjali-memorial devsharma-theme">
            <style>{`
                .shradhanjali-memorial { background: #05070a; color: #f0e6d2; font-family: 'serif'; overflow-x: hidden; position: relative; }
                .reveal { opacity: 0; transform: translateY(30px); transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1); }
                .reveal-active { opacity: 1 !important; transform: translateY(0) !important; }
                .glow-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 70%); pointer-events: none; z-index: 1; }
                
                .hero-section { height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; position: relative; z-index: 2; }
                .hero-shloka { font-size: clamp(24px, 4vw, 36px); color: #D4AF37; max-width: 900px; margin-bottom: 25px; line-height: 1.6; font-style: italic; }
                
                .main-layout { padding: 100px 20px; max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.5fr; gap: 80px; align-items: start; position: relative; z-index: 2; }
                @media (max-width: 1024px) { .main-layout { grid-template-columns: 1fr; text-align: center; } }
                
                .portrait-fixed { position: sticky; top: 100px; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5); border: 1px solid rgba(212, 175, 55, 0.2); }
                .portrait-image { width: 100%; height: auto; filter: contrast(1.1) brightness(0.9); }
                
                .content-flow h1 { font-size: clamp(36px, 6vw, 68px); color: #D4AF37; margin-bottom: 10px; }
                .bio-subtitle { font-size: 20px; color: #a0a090; margin-bottom: 50px; letter-spacing: 1px; }
                
                .story-section { margin-bottom: 60px; padding-left: 25px; border-left: 2px solid rgba(212, 175, 55, 0.2); }
                .story-section h2 { color: #D4AF37; font-size: 26px; margin-bottom: 20px; display: flex; align-items: center; gap: 15px; }
                .story-text p { font-size: 19px; line-height: 1.9; margin-bottom: 20px; color: rgba(240, 230, 210, 0.9); }

                .legacy-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-top: 40px; }
                .legacy-card { background: rgba(20, 25, 30, 0.7); border: 1px solid rgba(212, 175, 55, 0.1); border-radius: 16px; padding: 25px; transition: 0.4s; }
                .legacy-card:hover { border-color: #D4AF37; background: rgba(212, 175, 55, 0.05); }
                .legacy-card h3 { font-size: 18px; margin-bottom: 10px; color: #D4AF37; }
                .legacy-card p { font-size: 15px; opacity: 0.8; }

                .farewell-section { max-width: 1000px; margin: 100px auto; text-align: center; padding: 80px 40px; background: rgba(212, 175, 55, 0.03); border-radius: 40px; border: 1px solid rgba(212, 175, 55, 0.1); }
                .shanti-text { font-size: 32px; color: #D4AF37; letter-spacing: 6px; margin-top: 30px; }
            `}</style>

            <SEO title="श्रद्धाञ्जली: कृति शिक्षक देव शर्मा चापागाईं | Sahitya Sanskriti" />
            <div className="glow-overlay" />
            
            <header className="hero-section">
                <div className="reveal" ref={el => sectionRefs.current[0] = el}>
                    <Sparkles size={60} color="#D4AF37" style={{ marginBottom: '40px' }} />
                    <p className="hero-shloka">“विद्वत्वं च नृपत्वं च नैव तुल्यं कदाचन।<br />स्वदेशे पूज्यते राजा विद्वान् सर्वत्र पूज्यते॥”</p>
                    <p style={{ opacity: 0.6, fontSize: '18px', maxWidth: '700px', margin: '20px auto' }}>- राजा आफ्नो देशमा मात्र पूज्य हुन्छन्, तर विद्धान्/शिक्षक संसारभरि पूज्य हुन्छन्।</p>
                </div>
            </header>

            <main className="main-layout">
                <aside className="reveal portrait-fixed" ref={el => sectionRefs.current[1] = el}>
                    <img src="/dev_sharma_tribute_portrait_1775849859980.png" alt="Dev Sharma Chapagai" className="portrait-image" />
                </aside>
                
                <section className="reveal content-flow" ref={el => sectionRefs.current[2] = el}>
                    <h1>देव शर्मा चापागाईं</h1>
                    <p className="bio-subtitle">कृति शिक्षक • समाज सेवक • आदर्श व्यक्तित्व</p>
                    
                    <div className="story-section">
                        <h2><Heart size={22} /> जन्म र आरम्भ</h2>
                        <div className="story-text">
                            <p>गत अंग्रेजी २७ जनवरी बृहस्पतिबारका दिन गमिरिपाल निवासी कृति शिक्षक, समाज सेवक देव शर्मा चापागाईंको ८२ वर्षको उमेरमा परलोक भएको समाचारले क्षेत्रमा शोक छाएको छ।</p>
                            <p>बलभद्र शर्मा चापागाई र मधुमाया देवीका सन्तान, सात भाइ छोरा मध्ये ५ नम्बर छोरा देव चापागाईंको जन्म २८ फरवरी सन् १९४१ मा भएको हो।</p>
                        </div>
                    </div>

                    <div className="story-section">
                        <h2><GraduationCap size={22} /> शैक्षिक यात्रा</h2>
                        <div className="story-text">
                            <p>उनले प्राथमिक शिक्षा गाउँकै स्कूलबाट पुरा गरेपछि जामुगुडी उच्चतर माध्यमिक विद्यालयबाट मेट्रिक परीक्षा उत्तीर्ण गरेका थिए।</p>
                            <p>त्यसपछि त्यागवीर हेमबरुवा महाविद्यालयमा पि यु (PU) सम्म अध्ययन गर्दागर्दै उनले **कोविद** परीक्षा समेत सफलतापूर्वक पुरा गरे, जुन उनको बहुमुखी प्रतिभाको प्रमाण थियो।</p>
                        </div>
                    </div>

                    <div className="story-section">
                        <h2><Briefcase size={22} /> ४० वर्षको शिक्षण सेवा</h2>
                        <div className="story-text">
                            <p>चापागाईंले कोविद परीक्षा पुरा गरेपछि सतियाको एकादेमी हाई स्कुलमा अवैतनिक रूपमा शिक्षकको सेवा सुरु गरे। उनको यो निश्वार्थ सेवाको सबैले प्रशंसा गर्थे।</p>
                            <p>पछि आफ्नै स्थानीय क्षेत्र बडपोखरीपार एम भी स्कुलमा हिन्दी शिक्षकको रुपमा स्थायी नियुक्ति पाए। नोकरी कालको करिब ४० वर्ष लामो समय शिक्षाकै उज्यालो छर्नमा खर्चिएर उनले सन् २००२ मा अवकाश ग्रहण गरेका थिए।</p>
                        </div>
                    </div>

                    <div className="story-section">
                        <h2><Users size={22} /> सामाजिक योगदान</h2>
                        <div className="legacy-grid">
                            <div className="legacy-card">
                                <h3>गाउँ उन्नयन समिति</h3>
                                <p>उपसभापतिका रुपमा गमिरिपाल गाउँको विकासमा सक्रिय योगदान।</p>
                            </div>
                            <div className="legacy-card">
                                <h3>पानी योगान समिति</h3>
                                <p>तलकाबारी पानी योगान समितिको सभापति भएर सेवा पुर्याउनुभएको।</p>
                            </div>
                            <div className="legacy-card">
                                <h3>विहुमेला समिति</h3>
                                <p>बडपोखरी विहुमेला समितिको सक्रिय सदस्यका रुपमा सांस्कृतिक उर्जा।</p>
                            </div>
                            <div className="legacy-card">
                                <h3>कल्पतरु क्लब</h3>
                                <p>उपदेष्ठाका रुपमा युवा पुस्तालाई मार्गदर्शन र प्रेरणा।</p>
                            </div>
                            <div className="legacy-card">
                                <h3>विद्यालय परिचालना</h3>
                                <p>गमिरिपाल एम भी स्कूल परिचालना समितिको सक्रिय सदस्यका रुपमा योगदान।</p>
                            </div>
                        </div>
                    </div>

                    <div className="story-section">
                        <h2><Anchor size={22} /> परिवार र विरासत</h2>
                        <div className="story-text">
                            <p>एक सहज, सरल र आदर्श स्वभावका चापागाईंले आफ्ना तीन छोरा-बुहारी (एक अविवाहित), दुई छोरी-जुवाईं र नाति-नातिनाहरूको एक सुखी परिवारलाई संस्कार र ज्ञानको सम्पत्ति छाडेर जानुभएको छ।</p>
                        </div>
                    </div>
                </section>
            </main>

            <section className="farewell-section reveal" ref={el => sectionRefs.current[3] = el}>
                <p style={{ fontStyle: 'italic', fontSize: '22px', opacity: 0.8 }}>“उहाँको आकस्मिक वियोगले अञ्चलमा सधैँ एउटा रिक्तता महसुस हुनेछ। शोकाकुल परिवारजनमा हार्दिक समवेदना।”</p>
                <div className="shanti-text">ॐ शान्तिः शान्तिः शान्तिः।</div>
            </section>
        </div>
    );
};

export default ShradhanjaliDevSharma;
