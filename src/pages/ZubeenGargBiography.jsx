import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mic2, Heart, Share2, Quote, BookOpen, Clock, Music } from 'lucide-react';
import LikeButton from '../components/LikeButton';
import SocialShare from '../components/SocialShare';
import BackButton from '../components/BackButton';
import CommentSection from '../components/CommentSection';

const ZubeenGargBiography = () => {
    const [scrolled, setScrolled] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 100);
        window.addEventListener('scroll', handleScroll);
        window.scrollTo(0, 0);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const timelineData = [
        { year: '1971', event: 'Born Zubeen Borthakur in Tura, Meghalaya.' },
        { year: '1992', event: 'Released breakthrough album "Anamika", changing the face of Assamese music.' },
        { year: '2000s', event: 'Ruled Bollywood with hits like "Ya Ali", winning Global Music Awards.' },
        { year: 'Present', event: 'The voice of millions, a social activist, and a cultural institution.' }
    ];

    return (
        <div className="zubeen-premium-page">
            <style>{`
                .zubeen-premium-page {
                    background-color: #FAF9F6;
                    color: #1A1A1A;
                    font-family: 'serif';
                    overflow-x: hidden;
                }
                
                .premium-nav {
                    position: fixed;
                    top: 0; left: 0; width: 100%;
                    padding: 20px 40px;
                    z-index: 100;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: ${scrolled ? 'rgba(250, 249, 246, 0.95)' : 'transparent'};
                    backdrop-filter: ${scrolled ? 'blur(10px)' : 'none'};
                    border-bottom: ${scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none'};
                    transition: all 0.4s ease;
                }

                .premium-nav a {
                    color: ${scrolled ? '#1A1A1A' : '#FFF'};
                    text-decoration: none;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-family: 'sans-serif';
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    transition: color 0.3s;
                }
                
                .hero-image-container {
                    width: 100%;
                    height: 90vh;
                    position: relative;
                    overflow: hidden;
                    background: #111;
                }
                
                .hero-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.6;
                    transform: scale(1.05);
                    animation: subtleZoom 20s infinite alternate;
                }

                @keyframes subtleZoom {
                    from { transform: scale(1); }
                    to { transform: scale(1.1); }
                }

                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, #FAF9F6 0%, transparent 40%);
                }
                
                .hero-text {
                    position: absolute;
                    bottom: 10%;
                    left: 50%;
                    transform: translateX(-50%);
                    text-align: center;
                    width: 100%;
                    padding: 0 20px;
                    z-index: 10;
                }

                .hero-title {
                    font-size: clamp(60px, 10vw, 140px);
                    color: #1A1A1A;
                    margin: 0;
                    line-height: 0.85;
                    font-weight: 800;
                    letter-spacing: -4px;
                }

                .hero-subtitle {
                    font-size: clamp(16px, 2vw, 24px);
                    color: #8C7853;
                    letter-spacing: 8px;
                    text-transform: uppercase;
                    margin-top: 20px;
                    font-weight: 600;
                    font-family: 'sans-serif';
                }

                .content-grid {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 80px 20px;
                    display: grid;
                    grid-template-columns: 1fr 3fr;
                    gap: 80px;
                }

                @media (max-width: 1024px) {
                    .content-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                }

                .sidebar {
                    position: sticky;
                    top: 100px;
                    height: max-content;
                }

                .timeline-box {
                    background: #fff;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.03);
                    border: 1px solid rgba(0,0,0,0.04);
                }

                .timeline-item {
                    margin-bottom: 25px;
                    position: relative;
                    padding-left: 20px;
                    border-left: 2px solid #8C7853;
                }

                .timeline-year {
                    font-weight: bold;
                    color: #8C7853;
                    font-size: 14px;
                    margin-bottom: 5px;
                    font-family: 'sans-serif';
                }

                .timeline-event {
                    font-size: 14px;
                    color: #555;
                    line-height: 1.6;
                }

                .article-body {
                    max-width: 800px;
                }

                .article-section {
                    margin-bottom: 80px;
                }

                .drop-cap::first-letter {
                    font-size: 80px;
                    float: left;
                    margin-right: 15px;
                    line-height: 60px;
                    color: #8C7853;
                    font-weight: bold;
                    padding-top: 10px;
                }

                .article-text {
                    font-size: 21px;
                    line-height: 2.1;
                    color: #333;
                    margin-bottom: 30px;
                    text-align: justify;
                }

                .section-title {
                    font-size: 36px;
                    color: #1A1A1A;
                    margin-bottom: 30px;
                    font-weight: 700;
                    letter-spacing: -1px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .poem-block {
                    background: #fff;
                    padding: 50px;
                    border-radius: 16px;
                    text-align: center;
                    box-shadow: 0 15px 50px rgba(0,0,0,0.04);
                    margin: 60px 0;
                    border: 1px solid rgba(0,0,0,0.03);
                }

                .poem-line {
                    font-size: 24px;
                    color: #111;
                    margin-bottom: 15px;
                    font-style: italic;
                }
                
                .highlight-gold {
                    color: #8C7853;
                    font-weight: 700;
                }

                .quote-pull {
                    border-left: 4px solid #8C7853;
                    padding: 30px 40px;
                    margin: 60px 0;
                    background: rgba(140, 120, 83, 0.05);
                    font-size: 28px;
                    line-height: 1.6;
                    font-style: italic;
                    color: #1A1A1A;
                    border-radius: 0 16px 16px 0;
                }

                .book-list {
                    list-style: none;
                    padding: 0;
                }

                .book-list li {
                    font-size: 18px;
                    padding: 15px 0;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                    color: #555;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .footer-action {
                    text-align: center;
                    padding: 80px 20px;
                    border-top: 1px solid rgba(0,0,0,0.05);
                    margin-top: 60px;
                }
            `}</style>

            {/* Sticky Navigation */}
            <div className="premium-nav">
                <Link to="/">
                    <ArrowLeft size={20} /> <span className="desktop-only">Sanskriti Home</span>
                </Link>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <LikeButton id="zubeen-tribute-unique" collectionName="zubeen_tributes" />
                    <SocialShare elementRef={contentRef} title="Zubeen Garg: Yug Purush" />
                </div>
            </div>

            {/* Hero Image Section */}
            <div className="hero-image-container">
                <img src="/images/zubeen_epic.png" alt="Zubeen Garg" className="hero-image" />
                <div className="hero-overlay"></div>
                <div className="hero-text">
                    <h1 className="hero-title">ZUBEEN<br/><span style={{ color: '#8C7853' }}>GARG</span></h1>
                    <p className="hero-subtitle">The Heart of the Brahmaputra</p>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="content-grid" ref={contentRef}>
                
                {/* Left Sidebar (Timeline & Info) */}
                <div className="sidebar desktop-only">
                    <div className="timeline-box">
                        <h3 style={{ fontSize: '18px', color: '#111', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Clock size={18} color="#8C7853"/> Legacy
                        </h3>
                        {timelineData.map((item, idx) => (
                            <div key={idx} className="timeline-item">
                                <div className="timeline-year">{item.year}</div>
                                <div className="timeline-event">{item.event}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content Body */}
                <div className="article-body">
                    
                    <div className="poem-block">
                        <Music size={40} color="#8C7853" style={{ margin: '0 auto 30px', opacity: 0.5 }} />
                        <div className="poem-line">हजार युगका साक्षी, हृदय करुणाका सागर</div>
                        <div className="poem-line">गुरु धौम्यका आरुणि, दधीचिका अस्थि</div>
                        <div className="poem-line">हे, <span className="highlight-gold">झञ्झाबीर</span> पहाड पर्वत उक्लँदै</div>
                        <div className="poem-line">नदी खोलाका एउटै धार, हरियालीका आधार</div>
                        <div className="poem-line">तिमी <span className="highlight-gold">ब्रह्मपुत्र</span> हौ-</div>
                        <div className="poem-line">युग युग अविरल गतिमा बग्ने स्वर्णिम युग पुरुष</div>
                    </div>

                    <div className="article-section">
                        <h2 className="section-title">जुबिन गर्ग : एक परिचय</h2>
                        <p className="article-text drop-cap">
                            प्रकृति र करुणाका पूजारी जुबिन गर्ग सङ्गीत जगतका एकजना बहुमुखी साधक हुन्। भारतवर्षको सङ्गीत इतिहासमा भुपेन हाजिरीका पछि लामो समय गीत–सङ्गीतले आलोड़न ल्याउने कण्ठशिल्पी हुन् जुबिन गर्ग। दुबै व्यक्तित्व भारतीय सङ्गीतका युगान्तकारी शिल्पी हुन्। असमको सौभाग्य हो—यस्ता कालजयी कण्ठशिल्पी असममै जन्म लिएका छन्।
                        </p>
                        <p className="article-text">
                            भारतीय सङ्गीत जगतका ताराहरू मध्ये जुबिन गर्ग एक हुन्, जसको उज्यालो केवल असमको भूभागमा मात्र सीमित नरही सम्पूर्ण सांगीतिक जगतलाई आलोकित पारेको छ। जुबिन सङ्गीत जगतका अद्वितीय व्यक्तित्व हुन्।
                        </p>
                        <div className="quote-pull">
                            "उनी जीवित रहँदा उनलाई मन पराउने मान्छे यति धेरै रहेछन् भन्ने कुरा धेरैलाई थाहा थिएन। यो केवल अन्तिम बिदाइ मात्र थिएन, जनतासँगको आत्मीय सम्बन्धको प्रत्यक्ष प्रमाण थियो।"
                        </div>
                        <p className="article-text">
                            आफूलाई “जुबिन जेनेरेसन”को प्रतीक मान्ने जुबिनले देशकाल र परिस्थितिअनुसार चौतर्फी योगदान दिएका रहेछन्। उनले नयाँ पुस्तालाई नयाँ नौलो सन्देश दिएका छन्। एकजना मानवतावादी, सु–गायक, सङ्गीतकार, गीतकार, अभिनेता, सांस्कृतिक सूत्रधार र समाज–सचेतक — यी सबै परिचय उनका जीवन र कृतित्वका आयाम हुन्। त्यसैले उनी युगपुरुषका रूपमा चिनिएका छन्।
                        </p>
                    </div>

                    <div className="article-section">
                        <h2 className="section-title">प्रारम्भिक जीवन र परिवार</h2>
                        <p className="article-text">
                            जुबिन गर्गको जन्म १८ नोभेम्बर १९७२ मा तुराको ब्राह्मण पारा (मेघालय) मा भएको हो। उनका पिताको नाम मोहिनी मोहन बरठाकुर र माताको नाम स्वर्गीय इलि बठाकुर। उनीहरूका तीन सन्तानमध्ये एकजना जुविन अनि दुई छोरी जङ्की र पामी बरठाकुर। मोहिनी बरठाकुरको प्रकृत घर शिवसागरको जाजी भन्ने ठाउँमा हो। हरियालीले भरिएको तुराको प्राकृतिक परिवेश मनोरम छ।
                        </p>
                        <p className="article-text">
                            बाल्यकालमा जुबिनलाई पिताजीले गोल्डी भनेर बोलाउने गर्थे। पछि मेट्रिक परीक्षा दिने समयमा आफ्नो नामका पछि थर नलेखेर गोत्र लेख्न थाले। त्यसबेला देखि जुबिन गर्ग नामले परिचित हुँदै आए। उनका पिता जुबिन मेहताका अनुरागी थिए। जुबिनको अर्थ भयो पार्सीहरूका देवताले लिने तरोवाल। जसलाई असमीयामा 'तरोवाल' र आहोम भाषामा 'हेङदाङ' भनेर भनिन्छ।
                        </p>
                        <div className="poem-block" style={{ padding: '40px', background: 'rgba(0,0,0,0.02)', border: 'none', boxShadow: 'none' }}>
                            <h3 style={{ color: '#8C7853', marginBottom: '20px', fontSize: '24px', fontFamily: 'sans-serif' }}>कपिल बरठाकुरका साहित्यिक रचनाहरू</h3>
                            <ul className="book-list">
                                <li><BookOpen size={16}/> दुःखर दिनर लखिमी (काव्य सङ्कलन)</li>
                                <li><BookOpen size={16}/> भय मृत्यु आरु चढ़ खुन्दरता (दार्शनिक प्रबन्धावली)</li>
                                <li><BookOpen size={16}/> खोनाली माहर दिन (गल्प सङ्कलन)</li>
                                <li><BookOpen size={16}/> अन्तर्मुखी यात्रा (उपन्यास)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="article-section">
                        <h2 className="section-title">शिक्षा र सांगीतिक यात्राको आरम्भ</h2>
                        <p className="article-text">
                            पिता जागिरका कारण जुबिन गर्गको बाल्यकाल असमको विभिन्न ठाउँमा बित्यो। तुरामा जन्मिएका जुबिनले बाल्यकालको पहिलो दुई वर्ष तेजपुरमा बिताए। त्यसपछि सन् १९७५ मा जोरहाट चिनामराको अंग्रेजी माध्यमको विद्यालय ‘कार्मेल’ मा भर्ना भए। पछि करिमगञ्जको सरकारी उच्च माध्यमिक विद्यालयमा पढे।
                        </p>
                        <p className="article-text">
                            पिताजीको अध्ययनको प्रभाव र माताको सांस्कृतिक क्षेत्रमा रहेको रुचिले गर्दा जुबिनले सानैदेखि कला क्षेत्रमा प्रवेश पाए। बाल्यकालमा जुबिन अमिताभ बच्चनका फिल्महरूका प्रशंसक थिए र थ्री–पीस सुट लगाउने गर्थे। संगीतप्रतिको उनको रूचि देखेर पिताले उनलाई करिमगञ्जका प्रसिद्ध तबलावादक रविन बेनर्जीको निगरानीमा तबला सिक्न सुविधा गरिदिए।
                        </p>
                        <p className="article-text">
                            सन् १९९१ मा गुवाहाटी आएपछि बी. बरुवा महाविद्यालयमा विज्ञान स्नातक तहमा भर्ना हुन्छन्। विज्ञानको छात्र भएको नाताले practical दिन नभ्याएकाले फाइनलमा फेल भए। यसरी स्वतन्त्र रुपमा गीत संगीत चर्चा गर्ने सोच्न थाले। शिक्षाका क्षेत्रमा अब्बल विद्यार्थी हुँदाहुँदै पनि उनले आफ्नो जीवनलाई संगीततर्फ ढाल्ने विचारले कलेज शिक्षालाई अधुरै छाडे र संगीत क्षेत्रमा पूर्णरूपले समर्पित भए।
                        </p>
                        <div className="quote-pull" style={{ background: '#111', color: '#fff', borderLeftColor: '#D4AF37' }}>
                            अनुष्ठानिक शिक्षाका उप्रान्त जीवनमा उनले जति गीत लेखे, जति मानवताको विचार सङ्गाले, त्यो यस संसारका लागि सर्वश्रेष्ठ शिक्षा थियो।
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <p style={{ fontSize: '24px', color: '#8C7853', fontStyle: 'italic', letterSpacing: '4px' }}>क्रमशः... (To be continued)</p>
                    </div>

                </div>
            </div>

            <div className="footer-action">
                <h4 style={{ fontSize: '32px', marginBottom: '15px', color: '#111' }}>Share the Legend</h4>
                <p style={{ color: '#666', fontSize: '18px', marginBottom: '30px' }}>Spread the literary and musical journey of Zubeen Garg.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <SocialShare elementRef={contentRef} title="The Zubeen Garg Legend" />
                </div>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '80px', paddingLeft: '20px', paddingRight: '20px' }}>
                <CommentSection id="zubeen-tribute-unique" collectionName="zubeen_tributes" />
            </div>
        </div>
    );
};

export default ZubeenGargBiography;
