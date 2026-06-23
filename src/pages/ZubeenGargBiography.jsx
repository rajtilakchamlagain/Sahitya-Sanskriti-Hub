import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music, Star, ChevronDown, Share2, Heart, Quote, Sparkles, Trophy, Mic2, BookOpen } from 'lucide-react';
import LikeButton from '../components/LikeButton';
import SocialShare from '../components/SocialShare';
import BackButton from '../components/BackButton';
import ExpandableSection from '../components/ExpandableSection';

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
            // Lighter/Deep Indigo tone matching the vibe requested
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)',
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
            filter: scrolled ? 'blur(15px) brightness(0.5)' : 'blur(0px) brightness(0.8)',
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
            background: scrolled ? 'rgba(30, 27, 75, 0.8)' : 'transparent',
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
            <BackButton />
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
                    <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.9)', letterSpacing: '8px', textTransform: 'uppercase', marginTop: '24px', fontWeight: 500 }}>
                        The Heart of the Brahmaputra
                    </p>
                    <div style={{ marginTop: '60px', animation: 'bounce 2s infinite' }}>
                        <ChevronDown size={40} color="#D4AF37" />
                    </div>
                </div>
            </section>

            {/* Content Container for Share/Screenshot */}
            <div ref={contentRef} style={styles.contentSection}>
                
                {/* 1st: The Poem (जुबिन गर्गको जीवन यात्रा) */}
                <ExpandableSection title="जुबिन गर्गको जीवन यात्रा" icon={Star} defaultOpen={true}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <h3 style={{ fontSize: 'clamp(18px, 3vw, 24px)', color: '#D4AF37', opacity: 0.8, letterSpacing: '6px' }}>— युग पुरुष —</h3>
                    </div>
                    <div style={{ fontSize: 'clamp(18px, 3vw, 24px)', lineHeight: '2', color: '#fff', textAlign: 'center', fontStyle: 'italic' }}>
                        <p>हजार युगका साक्षी, हृदय करुणाका सागर</p>
                        <p>गुरु धौम्यका आरुणि, दधीचिका अस्थि</p>
                        <p>हे, <span style={{ color: '#D4AF37', fontWeight: 700 }}>झञ्झाबीर</span> पहाड पर्वत उक्लँदै</p>
                        <p>नदी खोलाका एउटै धार, हरियालीका आधार</p>
                        <p>तिमी <span style={{ color: '#D4AF37', fontWeight: 700 }}>ब्रह्मपुत्र</span> हौ-</p>
                        <p>युग युग अविरल गतिमा बग्ने स्वर्णिम युग पुरुष</p>
                        <p style={{ marginTop: '24px', fontSize: '22px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>तिमी इतिहास हौ, प्रेरणाको !</p>
                    </div>
                </ExpandableSection>

                {/* 2nd: About Zubeen Garg (जुबिन गर्ग) */}
                <ExpandableSection title="जुबिन गर्ग" icon={Mic2}>
                    <div style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', lineHeight: '1.8', color: 'rgba(255,255,255,0.95)', textAlign: 'left', marginTop: '20px' }}>
                        <p style={{ marginBottom: '20px' }}>प्रकृति र करुणाका पूजारी जुबिन गर्ग सङ्गीत जगतका एकजना बहुमुखी साधक हुन्।</p>
                        <p style={{ marginBottom: '20px' }}>भारतवर्षको सङ्गीत इतिहासमा भुपेन हाजिरीका पछि लामो समय गीत–सङ्गीतले आलोड़न ल्याउने कण्ठशिल्पी हुन् जुबिन गर्ग। दुबै व्यक्तित्व भारतीय सङ्गीतका युगान्तकारी शिल्पी हुन्। असमको सौभाग्य हो—यस्ता कालजयी कण्ठशिल्पी असममै जन्म लिएका छन्।</p>
                        <p style={{ marginBottom: '20px' }}>भारतीय सङ्गीत जगतका ताराहरू मध्ये जुबिन गर्ग एक हुन्, जसको उज्यालो केवल असमको भूभागमा मात्र सीमित नरही सम्पूर्ण सांगीतिक जगतलाई आलोकित पारेको छ। जुबिन सङ्गीत जगतका अद्वितीय व्यक्तित्व हुन्।</p>
                        <p style={{ marginBottom: '20px' }}>उनी जीवित रहँदा उनलाई मन पराउने मान्छे यति धेरै रहेछन् भन्ने कुरा धेरैलाई थाहा थिएन। जब उनको परलोक भयो, पार्थिव शरीरको अन्तिम यात्रा गराउँदा मात्र त्यो स्पष्ट भयो। आम जनताको भीड़ देखेर धेरैले यसलाई एसियाकै सर्वबृहत् जनभेला भएको दाबी गरेका छन्। यो केवल अन्तिम बिदाइ मात्र थिएन, जनतासँगको आत्मीय सम्बन्धको प्रत्यक्ष प्रमाण थियो।</p>
                        <p style={{ marginBottom: '20px' }}>आफूलाई “जुबिन जेनेरेसन”को प्रतीक मान्ने जुबिनले देशकाल र परिस्थितिअनुसार चौतर्फी योगदान दिएका रहेछन्। उनले नयाँ पुस्तालाई नयाँ नौलो सन्देश दिएका छन्। एकजना मानवतावादी, सु–गायक, सङ्गीतकार, गीतकार, अभिनेता, सांस्कृतिक सूत्रधार र समाज–सचेतक — यी सबै परिचय उनका जीवन र कृतित्वका आयाम हुन्।</p>
                        <p style={{ fontSize: 'clamp(18px, 3vw, 22px)', color: '#D4AF37', fontWeight: 700, marginTop: '32px', textAlign: 'center' }}>त्यसैले उनी युगपुरुषका रूपमा चिनिएका छन्।</p>
                    </div>
                </ExpandableSection>

                {/* 3rd: Timeline */}
                <ExpandableSection title="Legacy Milestones" icon={Trophy}>
                    <div style={{ marginTop: '20px' }}>
                        {timelineData.map((item, idx) => (
                            <div key={idx} style={styles.timelineItem}>
                                <div style={styles.yearBadge}>{item.year}</div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: 'clamp(15px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.9)', margin: 0 }}>{item.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ExpandableSection>

                {/* 4th: Early Life (प्रारम्भिक जीवन) */}
                <ExpandableSection title="प्रारम्भिक जीवन" icon={Star}>
                    <div style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', lineHeight: '1.8', color: 'rgba(255,255,255,0.95)', textAlign: 'left', marginTop: '20px' }}>
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
                </ExpandableSection>

                {/* 5th: Education (शिक्षा) */}
                <ExpandableSection title="शिक्षा" icon={BookOpen}>
                    <div style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', lineHeight: '1.8', color: 'rgba(255,255,255,0.95)', textAlign: 'left', marginTop: '20px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '30px', fontStyle: 'italic', color: '#D4AF37', fontSize: 'clamp(18px, 3vw, 22px)' }}>
                            <p>गुरूर्ब्रह्मा गुरूर्विष्णुः गुरूर्देवो महेश्वरः।</p>
                            <p>गुरूर्साक्षात परब्रह्म तस्मै श्री गुरवे नमः॥</p>
                        </div>
                        
                        <p style={{ marginBottom: '20px' }}>पिता जागिरका कारण जुबिन गर्गको बाल्यकाल असमको विभिन्न ठाउँमा बित्यो। तुरामा जन्मिएका जुबिनले बाल्यकालको पहिलो दुई वर्ष तेजपुरमा बिताए। त्यसपछि सन् 1975 मा जोरहाट चिनामराको अंग्रेजी माध्यमको विद्यालय ‘कार्मेल’ मा भर्ना भए।</p>
                        
                        <p style={{ marginBottom: '20px' }}>फेरि जागिरको कारण सरुवा भई करिमगञ्ज पुग्छन्। यसपटक पिता मोहिनी मोहन ठाकुर करिमगञ्जमा हाकिमका रूपमा नियुक्त भए। त्यहाँ जुबिनलाई अङ्ग्रेजी माध्यमको विद्यालय किन्डरगार्डेनमा नाम भर्ना गर्छन्। त्यसपछि करिमगञ्जको सरकारी  उच्च माध्यमिक विद्यालयमा पढ़्छन् । उनीहरू करिमगञ्जमा करिब आठ वर्ष बसे। करिमगञ्जको बंगाली समाजबीच रहँदा बंगाली जीवनशैलीसँग आफूलाई घुलमिल गराउने प्रयास गरेका थिए। घरबाहिर भेट हुने केही असमिया मानिसहरू बाहेक प्रायः सबैसँग  सिलेठिया बंगाली भाषामै कुरा गर्ने गर्थे। जुबिनले पनि सानैमा बंगाली भाषा सिकी सकेका थिए।</p>
                        
                        <p style={{ marginBottom: '20px' }}>पिताजीको अध्ययनको प्रभाव र माताको सांस्कृतिक क्षेत्रमा रहेको रुचिले गर्दा जुबिन किताब पढ्न, साहित्य संगीत र नाटक आदि संस्कृतिक क्षेत्रमा पनि चर्चा गर्ने मौका पाएका थिए। बाल्यकालमा जुबिन निकै चञ्चल र जिद्दी स्वभावका थिए। बाल्यकालमा जुबिन अमिताभ बच्चनका फिल्महरूका प्रशंसक थिए। अमिताभ बच्चनको नक्कल गर्दै उनी थ्री–पीस सुट लगाउने गर्थे। संगीतप्रतिको उनको रूचि दिनानुदिन बढ्दै गएको देखेर पिताले उनलाई करिमगञ्जका प्रसिद्ध तबलावादक रविन बेनर्जीको निगरानीमा तबला सिक्न सुविधा गरि दिए। पिताले करिमगञ्जको यात्रा–दल ‘शिल्पी–तीर्थ’सँग साथ लागेर एक वर्षमै तीनवटा यात्रा नाटक गराएका थिए, त्यहाँ जुबिन गर्ग पनि सँगै सहभागी भएका थिए। जनप्रिय गायिका शिप्रा भट्टचार्यका गीतले धेरै आकर्षित हुँदै गएका थिए। अर्कोतर्फ विद्यालयकाे वार्षिकोत्सवहरूमा तबला वादनमा सहयोग गर्न थाले। हार्मोनियमका साथै तबलाका विभिन्न लयहरूमा काहरबा, खेमता, दाद्रा आदि तीव्र अथवा सामान्य लयमा बजाउने कौशल छिट्टै नै लिई सकेका थिए।</p>
                        
                        <p style={{ marginBottom: '20px' }}>पिता मोहिनी मोहन बरठाकुर जागिरको व्यस्तता अथवा करिमगञ्जमा विभिन्न समयमा सामाजिक सेवा बाढी पिढीतहरुलाई  राहतकार्य र निर्वाचन कार्यमा व्यस्त रहनुपर्दा कहिलेकाहीँ परिवारप्रति आवश्यक ध्यान दिन भ्याउँदैन थिए। त्यस्तो अवस्थामा पत्नी इली बरठाकुरले सन्तानको हेरचाह गर्थिन्। जुबिन गर्ग र जंकीलाई प्राथमिक गायन शिक्षा दिने जिम्मेवारी पनि आमा इली बरठाकुरले नै लिएकी थिइन्। करिमगञ्जमा करिब आठ वर्ष बिताएपछि  सन् 1983 मा उनीहरू बिजनी सरे। बिजनीमा फेरि जुबिनको पढाइ 7 देखि सुरु हुन्छ। पिताजीको फेरि सरुवा भएपछिको सन् 1986/87 मा तामोलपुर उच्चतर माध्यमिक विद्यालयमा सरुवा हुन्छन्। त्यहाँ मेट्रिक परीक्षाको फर्म भर्दा बरठाकुरको उपाधि छाडेर गर्ग गोत्र लेख्न सुरु गर्छन्। जुबिनले प्रवेशिका परिक्षामा  70 प्रतिशत (म्याट्रिक) अङ्क लिएर प्रथम स्थानमा उत्तीर्ण भए। उनको सफलताले घरमा खुसीको माहोल ल्याएको थियो । यसबेला पनि  गुरु रमणी रायबाट असमीया लोक संस्कृतिको शिक्षा ग्रहण र गुरु उत्पल शर्माद्वारा संगीतको शिक्षा लिएका थिए।</p>
                        
                        <p style={{ marginBottom: '20px' }}>सन् 1988 मा मेजिस्ट्रेट मोहिनी बरठाकुर फेरि जोरहाट सरुवा हुन्छन्। जुबिनलाई जोरहाटको जगन्नाथ बरुवा महाविद्यालयमा भर्ना गरिदिन्छन्। जोरहाटमा एकादशको विज्ञान शाखामा नाम भर्ती गरेपछि जुबिनले पढाइका साथै संगीतको क्षेत्रमा पनि बराबर चर्चा चलाई रहन्छन्। माता ईलि बरठाकुरले एउटा सानो किबोर्ड उपहार स्वरूप दिएकी थिइन्। गायक लुना सोनोवालबाट वाद्य बजाउने तालिम लिन्छन्। यसैबेला असमका नाट्य जगतका अग्रणी व्यक्ति निलु चक्रवर्तीको सानिध्यमा जोरहाट एफ एम रेडियोमा दुईवटा गान गाउने मौका पाउँछन्। त्यस पछि जोरहाट कलेजमा गीत गाएर आम जनताको प्रशंसा पाउन सफल हुन्छन्।</p>
                        
                        <p style={{ marginBottom: '20px' }}>सन् 1991 मा गुवाहाटीको वशिष्ठमा मामाहरूको घर भएको कारण गुवहाटीमै बस्न थाल्छन्। गुवाहाटी बस्न थालेपछि बी. बरुवा महाविद्यालयमा विज्ञान स्नातक तहमा भर्ना हुन्छन्। पढ़ाईका साथै संगीत क्षेत्रमा पनि बराबर चर्चा चलाई रहन्छन् । यसरी शिक्षा र संगीतलाई बराबर चर्चा चलाउँदा संगीततर्फ उनको झुकाउ बढ्दै जान्छ। संगीतको क्षेत्रमा नयाँ गतिशील धारालाई प्रवेश गराउने उनको प्रबल इच्छा जाग्दछ। अब उनलाई अनुभव हुन्छ - दुईटा नाउँमा खुट्टा हालेर अघि बढ्न मुस्किल हुने रहेछ। एकपल्ट उनले आफ्नै उक्तिमा भनेका छन् -  विज्ञानको छात्र भएको नाताले practical दिन नभ्याएकाले फाइनलमा फेल भए । पूनः परीक्षामा बस्नुपर्ने भयो। बिएसी केमिस्ट्रीमा मेजर लिएर पढ्न सुरु गरेका थिए। परीक्षामा पनि धेरै बन्धन अनुभव गरेर परीक्षा दिँदादिँदै बीचैमा छाडिदिए । यसरी स्वतन्त्र रुपमा गीत संगीत चर्चा गर्ने सोच्न थाले। यसरी जुबिनले आफ्नो प्रतिभालाई गीतको चर्चा तिर ढाल्छन्। अनि संगीत नै जीवनको लक्ष्य बनाउँछन्।</p>
                        
                        <p style={{ marginBottom: '20px' }}>अब गुवहाटीमा संगीत क्षेत्रमा उनको मन अझ जाँगरिलो हुँदै जान्छ। संगीत क्षेत्रमा पूर्णरूपले समर्पित हुन्छन्। शिक्षाका क्षेत्रमा एकजना अब्बल विद्यार्थी हुँदाहुँदै पनि उनले आफ्नो जीवनलाई संगीततर्फ ढाल्ने विचारले कलेज शिक्षालाई अधुरै छाड़्छन्।</p>
                        
                        <p style={{ fontSize: 'clamp(18px, 3vw, 22px)', color: '#D4AF37', fontWeight: 700, marginTop: '32px', textAlign: 'center' }}>
                            अनुष्ठानिक शिक्षाका उप्रान्त जीवनमा उनले जति गीत लेखे, जति गीत गाए, जति बाद्य - बादनको ज्ञान लिएर काममा लगाए जति मानवताको विचार सङ्गाले, जति समाजिक चिन्ता समाजमा साझा गरे त्यो यस संसारका लागि सर्वश्रेष्ठ शिक्षा थियो।
                        </p>
                    </div>
                </ExpandableSection>

                {/* To Be Continued... Section */}
                <div style={{ textAlign: 'center', padding: '40px', marginTop: '20px' }}>
                    <p style={{ 
                        fontFamily: 'var(--font-heading)', 
                        fontSize: 'clamp(20px, 3vw, 28px)', 
                        color: '#D4AF37', 
                        letterSpacing: '4px',
                        fontStyle: 'italic',
                        animation: 'pulse 3s infinite'
                    }}>
                        क्रमशः... (To be continued)
                    </p>
                </div>

                {/* Final Footer Call to Action */}
                <div style={{ textAlign: 'center', marginTop: '100px', padding: '60px 20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Mic2 size={48} color="#D4AF37" style={{ margin: '0 auto 24px', opacity: 0.5 }} />
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
                @keyframes pulse {
                    0%, 100% { opacity: 0.6; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.05); }
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
