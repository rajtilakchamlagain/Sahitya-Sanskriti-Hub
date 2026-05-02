import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music, Star, ChevronDown, Share2, Heart, Quote, Sparkles, Trophy, Mic2 } from 'lucide-react';
import LikeButton from '../components/LikeButton';
import SocialShare from '../components/SocialShare';

const ZubeenGargBiography = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const contentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        window.scrollTo(0, 0);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const timelineData = [
        { year: '1971', event: 'Born Zubeen Borthakur in Tura, Meghalaya.' },
        { year: '1992', event: 'Released breakthrough album "Anamika", changing the face of Assamese music.' },
        { year: '2000s', event: 'Ruled Bollywood with hits like "Ya Ali" (Gangster), winning Global Music Awards.' },
        { year: 'Present', event: 'The voice of millions, a social activist, and a living cultural institution.' }
    ];

    const quotes = [
        "Music is the only language that doesn't need translation.",
        "The river Brahmaputra flows in my veins.",
        "Art has no boundaries, it belongs to the universe.",
        "I sing for the people, not for the fame."
    ];

    const styles = {
        container: {
            minHeight: '200vh',
            // Lighter/Deep Indigo instead of pure black
            background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
            color: '#fff',
            fontFamily: 'var(--font-body)',
            position: 'relative',
            overflowX: 'hidden'
        },
        heroSection: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            padding: '0 24px'
        },
        heroImage: {
            position: 'fixed',
            top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundImage: `url('/images/zubeen_epic.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            filter: scrolled ? 'blur(15px) brightness(0.4)' : 'blur(0px) brightness(0.7)',
            transition: 'filter 1.2s ease, transform 1.2s ease',
            transform: scrolled ? 'scale(1.1)' : 'scale(1)',
        },
        stickyNav: {
            position: 'fixed',
            top: 0, left: 0, width: '100%',
            padding: '20px 40px',
            zIndex: 100,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: scrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : 'none',
            transition: 'all 0.4s ease'
        },
        contentSection: {
            position: 'relative',
            zIndex: 10,
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '80px 24px'
        },
        glassCard: {
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '32px',
            padding: '60px 40px',
            marginBottom: '60px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
        },
        timelineItem: {
            display: 'flex',
            gap: '30px',
            marginBottom: '40px',
            position: 'relative'
        },
        yearBadge: {
            backgroundColor: '#D4AF37',
            color: '#000',
            padding: '8px 20px',
            borderRadius: '30px',
            fontWeight: 800,
            height: 'fit-content',
            minWidth: '100px',
            textAlign: 'center',
            fontSize: '14px',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
        },
        easterEgg: {
            position: 'fixed',
            pointerEvents: 'none',
            color: 'rgba(212, 175, 55, 0.2)',
            fontSize: '14px',
            fontStyle: 'italic',
            zIndex: 5,
            transition: 'all 0.1s linear',
            whiteSpace: 'nowrap'
        }
    };

    return (
        <div style={styles.container}>
            {/* Background Image Layer */}
            <div style={styles.heroImage} />
            
            {/* Nav */}
            <div style={styles.stickyNav}>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, letterSpacing: '1px' }}>
                    <ArrowLeft size={20} /> <span className="desktop-only text-sm uppercase">Sanskriti Home</span>
                </Link>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <LikeButton id="zubeen-tribute-unique" collectionName="zubeen_tributes" />
                    <SocialShare elementRef={contentRef} title="Zubeen Garg: Yug Purush" />
                </div>
            </div>

            {/* Mouse Flower/Easter Egg Trail Simulation */}
            <div style={{...styles.easterEgg, left: mousePos.x + 20, top: mousePos.y + 20 }}>
                {quotes[Math.floor((mousePos.x + mousePos.y) / 400) % quotes.length]}
            </div>

            {/* Hero Section */}
            <section style={styles.heroSection}>
                <div style={{ animation: 'fadeInDown 1.5s ease' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                        <div style={{ padding: '10px 20px', backgroundColor: 'rgba(212, 175, 55, 0.1)', border: '1px solid #D4AF37', borderRadius: '30px', color: '#D4AF37', fontSize: '13px', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase' }}>
                            Premium Feature
                        </div>
                    </div>
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(60px, 12vw, 120px)', margin: '0', color: '#fff', lineHeight: '0.9', textShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
                        ZUBEEN<br/><span style={{ color: '#D4AF37' }}>GARG</span>
                    </h1>
                    <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', letterSpacing: '8px', textTransform: 'uppercase', marginTop: '24px', fontWeight: 300 }}>
                        The Heart of the Brahmaputra
                    </p>
                    <div style={{ marginTop: '60px', animation: 'bounce 2s infinite' }}>
                        <ChevronDown size={40} color="#D4AF37" />
                    </div>
                </div>
            </section>

            {/* Content Container for Share/Screenshot */}
            <div ref={contentRef} style={styles.contentSection}>
                
                {/* Section 1: The Poem (Redesigned) */}
                <div style={styles.glassCard}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <Star size={32} color="#D4AF37" style={{ marginBottom: '16px' }} />
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '52px', color: '#D4AF37', margin: 0 }}>जुबिन गर्गको जीवन यात्रा </h2>
                        <h3 style={{ fontSize: '24px', opacity: 0.6, letterSpacing: '6px' }}>— युग पुरुष —</h3>
                    </div>
                    <div style={{ fontSize: '24px', lineHeight: '2', color: '#fff', textAlign: 'center', fontStyle: 'italic' }}>
                        <p>हजार युगका साक्षी, हृदय करुणाका सागर</p>
                        <p>गुरु धौम्यका आरुणि, दधीचिका अस्थि</p>
                        <p>हे, <span style={{ color: '#D4AF37', fontWeight: 700 }}>झञ्झाबीर</span> पहाड पर्वत उक्लँदै</p>
                        <p>नदी खोलाका एउटै धार, हरियालीका आधार</p>
                        <p>तिमी <span style={{ color: '#D4AF37', fontWeight: 700 }}>ब्रह्मपुत्र</span> हौ-</p>
                        <p>युग युग अविरल गतिमा बग्ने स्वर्णिम युग पुरुष</p>
                        <p style={{ marginTop: '24px', fontSize: '22px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>तिमी इतिहास हौ, प्रेरणाको !</p>
                    </div>
                </div>

                {/* Section: Early Life (प्रारम्भिक जीवन) */}
                <div style={styles.glassCard}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                        <Star size={32} color="#D4AF37" />
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', color: '#D4AF37', margin: 0 }}>प्रारम्भिक जीवन</h2>
                    </div>
                    <div style={{ fontSize: '18px', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)', textAlign: 'left' }}>
                        <p style={{ marginBottom: '20px' }}>जुबिन गर्गको जन्म १८ नोभेम्बर १९७२ मा तुराको ब्राह्मण पारा (मेघालय) मा भएको हो। उनका पिताको नाम मोहिनी मोहन बरठाकुर र माताको नाम स्वर्गीय इलि बठाकुर। उनीहरूका तीन सन्तानमध्ये एकजना जुविन अनि दुई छोरी जङ्की र पामी बरठाकुर। मोहिनी बरठाकुरको प्रकृत घर शिवसागरको जाजी भन्ने ठाउँमा हो। तर कर्मसूत्रले असमको विभिन्न ठाउँमा सरुवा भइरहनु पर्ने हुनाले जुबिनको यात्रा पनि विभिन्न ठाउँमा भएको छ। मेघालयको गाह्रो पहाडको रमाइलो हरियाली प्राकृतिक परिवेशलाई डाँडा काट्दै तुरा पुगिन्थ्यो। हरियालीले भरिएको तुराको प्राकृतिक परिवेश मनोरम छ। जोबिन बाल्यकालमा साह्रै सुन्दर थिए। बामे सर्ने उमेरमा नानीहरूको स्वभाव भन्दा अलिक फरक नडराउने स्वभावका थिए। घरको काम धन्दाले पनि कोहीबेला हेर्न नभ्याउने आमा इली बरठाकुरले जुबिनका खुट्टामा झुनुका बाँधी दिएर चन्चले जुबिनको स्थान निगरानी गर्थिन्।</p>
                        
                        <p style={{ marginBottom: '20px' }}>बाल्यकालमा जुबिनलाई पिताजीले गोल्डी भनेर बोलाउने गर्थे। त्यसबेला स्कुलहरुमा जुबिन बरठाकुर नामले परिचित थिए। पछि मेट्रिक परीक्षा दिने समयमा आफ्नो नामका पछि थर नलेखेर गोत्र लेख्न थाले। त्यसबेला देखि जुबिन गर्ग नामले परिचित हुँदै आए। उनका पिता जुबिन मेहताका अनुरागी थिए। पिताजीका लागि यो परिचित मात्र होइन आदर्शको नाम थियो। जुबिनको अर्थ भयो पार्सीहरूका देवताले लिने तरोवाल। जुविनले पछिल्ला समयमा विभिन्न मञ्चमा आफ्नो नामलाई त्यसरी परिभाषित गरेका छन्। जसलाई असमीयामा 'तरोवाल' र आहोम भाषामा 'हेङदाङ' भनेर भनिन्छ।</p>
                        
                        <p style={{ marginBottom: '20px' }}>जुबिनको सानैदेखि पुस्तक पढ्ने बानी थियो। मातृ अध्यापिका, नृत्यमा पारदर्शी, सु गायिका अनि अभिनेत्री थिन। त्यसैले घरमा संगीतको सांस्कृतिक माहोल थियो। संगीतको वातावरणमा हुर्किएका जुबिनले सानैदेखि विभिन्न वाद्ययन्त्र बजाउने गर्थे। पछि गायनमा पनि असाधारण रुचि देखाउँदै गए। यसरी पारिवारिक संस्कारले नै उनको जीवन संगीततर्फ मोड़ियो।</p>
                        
                        <p style={{ marginBottom: '20px' }}>जुबिनका पितृ मोहिनी मोहन बरठाकुर शुरुमा केरानीको जागिर गर्दथे। पछि धेरै साधना गरी 'ए पी एस सी' परीक्षामा अवतीर्ण भई सफलता पाए। यसपछि मेजिस्ट्रेटको जागिर खान सक्षम हुन्छन्। उनी एकजना दयालु स्वभावका व्यक्ति थिए। मानिसलाई दान गरेर, सहयोग पुर्याएर खुसी अनुभव गर्थे। जागीरे जीवन भएर पनि साहित्य साधनामा निरन्तरता दिँदै आएका थिए। त्यसैले वर्तमान पनि सफल कवि एवं साहित्यकारको रूपमा परिचित हुँदै आएका छन्। उनको साहित्यिक नाम हो कपिल बरठाकुर।</p>
                        
                        <div style={{ padding: '20px', background: 'rgba(212, 175, 55, 0.05)', borderRadius: '15px', borderLeft: '4px solid #D4AF37', margin: '30px 0' }}>
                            <h3 style={{ color: '#D4AF37', marginBottom: '15px', fontSize: '20px' }}>कपिल बरठाकुरका साहित्यिक रचनाहरू:</h3>
                            <ul style={{ paddingLeft: '20px', margin: 0, lineHeight: '1.8' }}>
                                <li>दुःखर दिनर लखिमी (काव्य सङ्कलन)</li>
                                <li>भय मृत्यु आरु चढ़ खुन्दरता (दार्शनिक प्रबन्धावली)</li>
                                <li>खोनाली माहर दिन (गल्प सङ्कलन)</li>
                                <li>कल्पतरु वर्णमाला (कविता सङ्कलन)</li>
                                <li>अन्तर्मुखी यात्रा (उपन्यास)</li>
                                <li>कथा कोवा छवि (काव्य सङ्कलन)</li>
                                <li>Someone somewhere (English novel)</li>
                            </ul>
                        </div>
                        
                        <p>वर्तमान अवसर लिए पछि घरमै रहेर साहित्य सेवा गर्दै आएका छन्। तर अपर्झट एकमात्र छोराको अकाल वियोगले उनी मर्माहत भएका छन्।</p>
                    </div>
                </div>

                {/* Section: The Journey of a Legend (Prose) */}
                <div style={styles.glassCard}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                        <Mic2 size={32} color="#D4AF37" />
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', color: '#D4AF37', margin: 0 }}>जुबिन गर्ग</h2>
                    </div>
                    <div style={{ fontSize: '18px', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)', textAlign: 'left' }}>
                        <p style={{ marginBottom: '20px' }}>प्रकृति र करुणाका पूजारी जुबिन गर्ग सङ्गीत जगतका एकजना बहुमुखी साधक हुन्।</p>
                        <p style={{ marginBottom: '20px' }}>भारतवर्षको सङ्गीत इतिहासमा भुपेन हाजिरीका पछि लामो समय गीत–सङ्गीतले आलोड़न ल्याउने कण्ठशिल्पी हुन् जुबिन गर्ग। दुबै व्यक्तित्व भारतीय सङ्गीतका युगान्तकारी शिल्पी हुन्। असमको सौभाग्य हो—यस्ता कालजयी कण्ठशिल्पी असममै जन्म लिएका छन्।</p>
                        <p style={{ marginBottom: '20px' }}>भारतीय सङ्गीत जगतका ताराहरू मध्ये जुबिन गर्ग एक हुन्, जसको उज्यालो केवल असमको भूभागमा मात्र सीमित नरही सम्पूर्ण सांगीतिक जगतलाई आलोकित पारेको छ। जुबिन सङ्गीत जगतका अद्वितीय व्यक्तित्व हुन्।</p>
                        <p style={{ marginBottom: '20px' }}>उनी जीवित रहँदा उनलाई मन पराउने मान्छे यति धेरै रहेछन् भन्ने कुरा धेरैलाई थाहा थिएन। जब उनको परलोक भयो, पार्थिव शरीरको अन्तिम यात्रा गराउँदा मात्र त्यो स्पष्ट भयो। आम जनताको भीड़ देखेर धेरैले यसलाई एसियाकै सर्वबृहत् जनभेला भएको दाबी गरेका छन्। यो केवल अन्तिम बिदाइ मात्र थिएन, जनतासँगको आत्मीय सम्बन्धको प्रत्यक्ष प्रमाण थियो।</p>
                        <p style={{ marginBottom: '20px' }}>आफूलाई “जुबिन जेनेरेसन”को प्रतीक मान्ने जुबिनले देशकाल र परिस्थितिअनुसार चौतर्फी योगदान दिएका रहेछन्। उनले नयाँ पुस्तालाई नयाँ नौलो सन्देश दिएका छन्। एकजना मानवतावादी, सु–गायक, सङ्गीतकार, गीतकार, अभिनेता, सांस्कृतिक सूत्रधार र समाज–सचेतक — यी सबै परिचय उनका जीवन र कृतित्वका आयाम हुन्।</p>
                        <p style={{ fontSize: '22px', color: '#D4AF37', fontWeight: 700, marginTop: '32px', textAlign: 'center' }}>त्यसैले उनी युगपुरुषका रूपमा चिनिएका छन्।</p>
                    </div>
                </div>

                {/* Section 2: Timeline */}
                <div style={{ ...styles.glassCard, background: 'rgba(255,255,255,0.02)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
                        <Trophy size={32} color="#D4AF37" />
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', margin: 0 }}>Legacy Milestones</h2>
                    </div>
                    <div>
                        {timelineData.map((item, idx) => (
                            <div key={idx} style={styles.timelineItem}>
                                <div style={styles.yearBadge}>{item.year}</div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', margin: 0 }}>{item.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Quotes / Wisdom */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                    {quotes.map((q, idx) => (
                        <div key={idx} style={{ ...styles.glassCard, padding: '40px', marginBottom: 0 }}>
                            <Quote size={30} color="#D4AF37" style={{ opacity: 0.5, marginBottom: '20px' }} />
                            <p style={{ fontSize: '20px', lineHeight: '1.6', color: '#fff', margin: 0, fontWeight: 300 }}>{q}</p>
                        </div>
                    ))}
                </div>

                {/* Final Footer Call to Action */}
                <div style={{ textAlign: 'center', marginTop: '100px', padding: '60px 40px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Mic2 size={48} color="#D4AF37" style={{ marginBottom: '24px', opacity: 0.5 }} />
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', marginBottom: '16px' }}>Share the Legend</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>Spread the literary and musical journey of Zubeen Garg with the world.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                         <SocialShare elementRef={contentRef} title="The Zubeen Garg Legend" />
                    </div>
                </div>

            </div>

            {/* Embedded styles for animations */}
            <style>
                {`
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                    40% { transform: translateY(-30px); }
                    60% { transform: translateY(-15px); }
                }
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-50px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @media (max-width: 768px) {
                    .desktop-only { display: none; }
                }
                `}
            </style>
        </div>
    );
};

export default ZubeenGargBiography;
