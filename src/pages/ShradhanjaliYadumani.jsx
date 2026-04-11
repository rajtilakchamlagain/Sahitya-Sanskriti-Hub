import React, { useEffect, useRef } from 'react';
import { Music, MapPin, Calendar, Heart, MessageSquare, ArrowDown, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

const ShradhanjaliYadumani = () => {
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

    const songs = [
        {
            title: "शुभकामना तिमीलाई",
            lyrics: "फलोस् फुलोस् भोलिको जीवन यही नै कामना। शुभकामना... शुभकामना तिमीलाई, फलोस् फुलोस् भोलिको जीवन...",
            meaning: "यस गीतमा मानवीय सम्बन्धभित्रको पवित्र शुभेच्छा र आशीर्वादको भावना अभिव्यक्त भएको छ। जीवनका अनिश्चितताबीच पनि प्रियजनको उज्ज्वल भविष्यको कामना गर्ने उदात्त मनोभाव यहाँ प्रकट हुन्छ। यसले केवल व्यक्तिगत सुखको कामना मात्र होइन, समग्र जीवनलाई सकारात्मक सोच, आशा र उत्साहले भरिपूर्ण बनाउने सन्डेस दिन्छ।"
        },
        {
            title: "मादलुको तालैमा नाची",
            lyrics: "बाँसुरीको स्वरैमा गाई घुमी घुमी नाचहे मारुनी... मादलुको तालैमा नाची, बाँसुरीको स्वरैमा गाई...",
            meaning: "यो गीत नेपाली लोकजीवनको जीवन्त चित्र हो। गाउँघरको मेला, पर्व, उत्सव र सामूहिक रमाइलोपनको झल्को यसमा पाइन्छ। मादल र बाँसुरीजस्ता परम्परागत वाद्ययन्त्रहरू केवल संगीतका साधन मात्र होइनन्, ती हाम्रो पहिचान र संस्कृतिका प्रतीक हुन्।"
        },
        {
            title: "कसले मेरो बाटोमा काँडा रोपिदिन्छ",
            lyrics: "कसले मेरो छातीमा पिर थपिदिन्छ.... तिमी काँडा रोप्दै जाउ म सुसेल्दै जाउँला भेटेसम्म तिम्रो भूल सच्चाउदै जाउँला।",
            meaning: "यस गीतमा जीवनका कठिनाइ, धोका र पीडाको यथार्थ चित्रण गरिएको छ। तर यसको गहिराइ त्यतिमै सीमित छैन—यसले प्रतिकूल परिस्थितिमा पनि धैर्य, सहनशीलता र क्षमाशीलताको बाटो रोज्नुपर्ने सन्देश दिन्छ।"
        },
        {
            title: "मुटुमा काँडा बिजे हाँसीहाँसी सहनुपर्छ",
            lyrics: "जिन्दगीको गोरेटोमा सुख दुःख झेल्नुपर्छ।",
            meaning: "गीत जीवनदर्शनको गहिरो अभिव्यक्ति हो। यहाँ दुःख, पीडा र संघर्षलाई जीवनको अभिन्न अङ्गका रूपमा स्वीकार गर्नुपर्ने सन्देश दिइएको छ। हाँसीहाँसी पीडा सहनु भनेको हार मान्नु होइन, बरु जीवनप्रति दृढता र आत्मबल कायम राख्नु हो।"
        },
        {
            title: "निरस यो जिन्दगीमा गीत पनि देउ कल्पना",
            lyrics: "रित्तो यो सम्झनामा याद बनिदेउ कल्पना कालो यो रातहरूमा ज्योति भएर चन्द्रमा मेरै बनेर साथमा सपना बनिदेउ सम्झना।",
            meaning: "जीवन जब निरस र रित्तो महसुस हुन्छ, त्यतिबेला प्रेम, कल्पना र स्मृतिहरूले त्यसलाई अर्थपूर्ण बनाउने प्रयास गर्छन्। कोहीबेला रुवाईको स्वरले पनि मानिसको संवेदनाका भावहरु प्रकट गर्दछ।"
        },
        {
            title: "जहाँ रहेपनि गीतमा मेरो तिम्रै हुने छ",
            lyrics: "धोका नै सही म माथि तिम्रो यो गुण रहने छ - साँझको यामको गहना बनी जुनकिरी बाले झैँ, एकान्त पाखामा मोहिनी फिजाई बतास चले झैँ-",
            meaning: "गीतमा प्रेमको गहिरो समर्पण र स्थायित्वको अनुभूति हुन्छ। दूरी, समय वा परिस्थितिले प्रेमलाई कमजोर पार्न सक्दैन भन्ने भाव यसमा स्पष्ट छ। यो गीत प्रेमको अमर स्वरूपको प्रतीक हो।"
        }
    ];

    return (
        <div className="shradhanjali-memorial">
            <SEO title="श्रद्धाञ्जली: कलाकार यदुमनि शर्मा | Sahitya Sanskriti" />
            <style>{`
                .shradhanjali-memorial { background: #080808; color: #e0d0b0; font-family: 'serif'; overflow-x: hidden; position: relative; }
                .reveal { opacity: 0; transform: translateY(30px); transition: all 1s ease-out; }
                .reveal-active { opacity: 1 !important; transform: translateY(0) !important; }
                .glow-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 70%); pointer-events: none; z-index: 1; }
                .hero-section { height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; position: relative; z-index: 2; }
                .hero-shloka { font-size: clamp(24px, 4vw, 36px); color: #D4AF37; max-width: 800px; margin-bottom: 20px; line-height: 1.6; font-style: italic; }
                .portrait-section { padding: 80px 20px; max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.5fr; gap: 60px; align-items: center; position: relative; z-index: 2; }
                @media (max-width: 968px) { .portrait-section { grid-template-columns: 1fr; text-align: center; } }
                .portrait-container { border-radius: 20px; overflow: hidden; box-shadow: 0 0 50px rgba(212, 175, 55, 0.2); border: 1px solid rgba(212, 175, 55, 0.3); }
                .portrait-image { width: 100%; height: auto; filter: sepia(0.3) contrast(1.1); transition: transform 0.8s; }
                .bio-content h1 { font-size: clamp(32px, 5vw, 56px); color: #D4AF37; margin-bottom: 15px; }
                .songs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 30px; }
                .song-card { background: rgba(25, 25, 25, 0.8); backdrop-filter: blur(10px); border: 1px solid rgba(212, 175, 55, 0.1); border-radius: 15px; padding: 30px; }
                .tribute-container { max-width: 900px; margin: 0 auto; background: rgba(40, 30, 30, 0.4); border-radius: 30px; padding: 60px; border: 1px solid rgba(212, 175, 55, 0.1); position: relative; }
                .author-cap { position: absolute; top: -30px; left: 50%; transform: translateX(-50%); background: #D4AF37; color: #000; padding: 10px 30px; border-radius: 30px; font-weight: bold; }
                .signature { text-align: right; margin-top: 40px; color: #D4AF37; font-size: 22px; }
            `}</style>

            <div className="glow-overlay" />
            <header className="hero-section">
                <div className="reveal" ref={el => sectionRefs.current[0] = el}>
                    <Sparkles size={48} color="#D4AF37" style={{ marginBottom: '30px' }} />
                    <p className="hero-shloka">कालचक्रं यथा नित्यं, भ्रमते न निवर्तते।<br />तथा जीवनमृत्युभ्यां, लोकः सर्वः प्रवर्तते॥</p>
                    <ArrowDown className="scroll-hint" size={32} />
                </div>
            </header>

            <section className="portrait-section">
                <div className="reveal portrait-container" ref={el => sectionRefs.current[1] = el}>
                    <img src="/shradhanjali_tribute_portrait_1775849567109.png" alt="Yadumani Sharma" className="portrait-image" />
                </div>
                <div className="reveal bio-content" ref={el => sectionRefs.current[2] = el}>
                    <h1>Yadumani Sharma</h1>
                    <div className="bio-text">
                        <p>असमे गोर्खा समाजका विशिष्ट व्यक्तित्व यदुमनि शर्मा हाम्रो समाजमा परिचित नाम हो। सन् 1979 मा उनी अल इन्डिया रेडियो गुहाटीमा रेडियो आर्टिस्टको रुपमा स्वीकृति पाउँछन्। उनले केवल नेपाली गीत मात्र होइन असमीया, हिन्दी, बङ्गाली विभिन्न भाषामा गीत गाएका छन्।</p>
                    </div>
                </div>
            </section>

            <section className="songs-hub">
                <div className="songs-grid">
                    {songs.map((song, idx) => (
                        <div key={idx} className="reveal song-card" ref={el => sectionRefs.current[3 + idx] = el}>
                            <h3 style={{ color: '#D4AF37' }}>{song.title}</h3>
                            <p style={{ fontStyle: 'italic', opacity: 0.7 }}>{song.lyrics}</p>
                            <p>{song.meaning}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="personal-tribute">
                <div className="reveal tribute-container" ref={el => sectionRefs.current[9] = el}>
                    <div className="author-cap">एक आत्मीय सम्झना</div>
                    <p style={{ fontStyle: 'italic' }}>"मामाका गीतहरूमा शब्द चयनको गाम्भिर्यतालाई शब्द उच्चारणको विशिष्टता र एक शब्दसँग अर्को शब्दको लयात्मक संयोजन छुट्टै पहिचान छ। उहाँको वियोगले समाजलाई धेरै क्षति पुर्याएको छ।"</p>
                    <div className="signature">— ड० तिलक शर्मा</div>
                </div>
            </section>
        </div>
    );
};

export default ShradhanjaliYadumani;
