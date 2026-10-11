import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import BackButton from '../components/BackButton';
import SocialShare from '../components/SocialShare';
import LikeButton from '../components/LikeButton';
import CommentSection from '../components/CommentSection';
import AdSenseUnit from '../components/AdSenseUnit';

const ShradhanjaliZubeenGarg = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="memorial-container">
            <style>{`
                .memorial-container {
                    background-color: #FDFAFC;
                    min-height: 100vh;
                    font-family: 'Merriweather', 'Georgia', serif;
                    color: #2c2c2c;
                    padding-bottom: 100px;
                }
                .memorial-header {
                    text-align: center;
                    padding: 80px 20px 40px;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .memorial-title {
                    font-size: clamp(32px, 5vw, 54px);
                    color: #1a1a1a;
                    margin-bottom: 20px;
                    line-height: 1.2;
                    font-weight: 700;
                }
                .memorial-subtitle {
                    font-size: clamp(18px, 3vw, 24px);
                    color: #8C7853;
                    font-weight: 600;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    margin-bottom: 40px;
                    display: block;
                }
                .shloka-box {
                    background: #fff;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(140, 120, 83, 0.08);
                    border: 1px solid rgba(140, 120, 83, 0.15);
                    margin: 0 auto 60px;
                    position: relative;
                }
                .shloka-box::before {
                    content: '❝';
                    font-size: 80px;
                    color: rgba(140, 120, 83, 0.15);
                    position: absolute;
                    top: 10px;
                    left: 20px;
                    line-height: 1;
                    font-family: serif;
                }
                .shloka-text {
                    font-size: 18px;
                    line-height: 2;
                    color: #4a3728;
                    font-style: italic;
                    margin: 0;
                    text-align: center;
                }
                .shloka-translation {
                    margin-top: 16px;
                    font-size: 14px;
                    color: #888;
                    text-align: center;
                    font-style: normal;
                }
                .hero-image-wrapper {
                    max-width: 900px;
                    margin: 0 auto 60px;
                    padding: 0 20px;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
                }
                .hero-image-wrapper img {
                    width: 100%;
                    border-radius: 16px;
                    display: block;
                }
                .memorial-body {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                .memorial-body p {
                    font-size: clamp(16px, 2vw, 18px);
                    line-height: 2;
                    color: #3a3a3a;
                    margin-bottom: 28px;
                }
                .section-heading {
                    font-size: clamp(22px, 3vw, 30px);
                    color: #5c3317;
                    margin: 60px 0 24px;
                    font-weight: 700;
                    border-left: 4px solid #D4AF37;
                    padding-left: 16px;
                    line-height: 1.3;
                }
                .quote-block {
                    background: linear-gradient(135deg, rgba(212,175,55,0.08), rgba(140,120,83,0.06));
                    border-left: 4px solid #D4AF37;
                    padding: 24px 28px;
                    border-radius: 0 12px 12px 0;
                    margin: 36px 0;
                    font-style: italic;
                    font-size: clamp(15px, 2vw, 18px);
                    color: #4a3728;
                    line-height: 1.9;
                }
                .quote-block cite {
                    display: block;
                    margin-top: 12px;
                    font-size: 14px;
                    color: #8C7853;
                    font-style: normal;
                    font-weight: 600;
                }
                .awards-list {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 28px 0;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .awards-list li {
                    font-size: 15px;
                    line-height: 1.7;
                    color: #3a3a3a;
                    padding: 10px 14px;
                    background: rgba(212,175,55,0.06);
                    border-radius: 6px;
                    border-left: 3px solid rgba(212,175,55,0.4);
                }
                .finale-section {
                    text-align: center;
                    padding: 60px 20px;
                    background: linear-gradient(135deg, #1a0a0a, #2c1010);
                    border-radius: 20px;
                    margin: 60px 0 0;
                }
                .finale-section p {
                    color: rgba(255,255,255,0.9);
                    font-size: clamp(15px, 2vw, 18px);
                    line-height: 1.9;
                    max-width: 600px;
                    margin: 0 auto 24px;
                    font-style: italic;
                }
                .finale-section .final-quote {
                    color: #D4AF37;
                    font-size: clamp(18px, 2.5vw, 22px);
                    font-weight: 600;
                    font-style: italic;
                    line-height: 1.6;
                }
                .author-meta {
                    margin-top: 60px;
                    padding-top: 30px;
                    border-top: 1px solid rgba(140,120,83,0.2);
                    font-size: 14px;
                    color: #888;
                    text-align: right;
                }
                @media (max-width: 600px) {
                    .shloka-box { padding: 24px 20px; }
                    .quote-block { padding: 16px 18px; }
                }
            `}</style>

            <SEO
                title="वर्षदिन तिमी बि — जुबिन गर्गलाई श्रद्धाञ्जली | Sahitya Sanskriti"
                description="असमका महान गायक, संगीतकार र मानवतावादी जुबिन गर्गको पहिलो पुण्यतिथिमा भावपूर्ण श्रद्धाञ्जली।"
                image="/zubeen_varshadin.jpg"
            />

            <div className="memorial-header">
                <BackButton />
                <span className="memorial-subtitle">श्रद्धाञ्जली • पहिलो वार्षिक स्मृति</span>
                <h1 className="memorial-title">
                    वर्षदिन तिमी बि
                </h1>
                <p style={{ fontSize: '20px', color: '#8C7853', marginBottom: '8px', fontStyle: 'italic', lineHeight: '1.6' }}>
                    जुबिन गर्ग — भारतीय संगीत जगतका एक अमर तारा
                </p>
                <p style={{ fontSize: '14px', color: '#aaa', marginBottom: '40px' }}>
                    १९ सेप्टेम्बर २०२५ — अकालमै दिवंगत
                </p>

                <div className="shloka-box" style={{ maxWidth: '700px' }}>
                    <p className="shloka-text">
                        नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः।<br />
                        न चैनं क्लेदयन्त्यापो न शोषयति मारुतः॥
                    </p>
                    <p className="shloka-translation">
                        आत्मालाई शस्त्रले काट्न सक्दैन, अग्निले जलाउन सक्दैन,<br />
                        पानीले भिजाउन सक्दैन, हावाले सुकाउन सक्दैन।
                    </p>
                    <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(140, 120, 83, 0.15)', fontSize: '14px', color: '#555', fontStyle: 'italic', textAlign: 'center', lineHeight: '1.6' }}>
                        "A solemn commemorative tribute on the first death anniversary of Zubeen Garg (1972–2025). Celebrating the extraordinary musical journey, timeless voice, humanitarian philanthropy, and cultural legacy of an immortal soul."
                    </div>
                </div>
            </div>

            <div className="hero-image-wrapper">
                <img src="/zubeen_varshadin.jpg" alt="वर्षदिन तिमी बि — जुबिन गर्गलाई श्रद्धाञ्जली" />
            </div>

            <div className="memorial-body">
                <p>
                    जुबिन गर्ग फेरि आउने छन्।
                </p>
                <p>
                    भारतीय संगीत जगतका जुबिन यस्ता तारा हुन, जसले आफ्नो उज्यालोले केवल एक भूभागलाई मात्र नभई सम्पूर्ण सांगीतिक संसारलाई आलोकित पारेका छन्। असमको माटोमा जन्मिएका जुबिन गर्ग त्यस्तै एक अद्वितीय व्यक्तित्व हुन्। सायद दुनियामा कसैलाई थाहा थिएन उनी जीवित रहँदाखेरि उनलाई मन पराउने मान्छे यति धेरै छन् भन्ने। जब उनको परलोक भयो, उनको पार्थिव शरीर यात्रा गराउँदा, मानिसहरूले एसियाकै सर्व बृहत जनभेला भएको अड्कल लगाएका छन्।
                </p>
                <p>
                    एकजना गायक, संगीतकार, गीतकार, अभिनेता र सांस्कृतिक सुत्रधार — यी सबै परिचयहरूलाई उनले आफ्नो जीवनमा एकाकार पारेका छन्। साँच्चै नै प्रकृति र करुणाका पूजारी जुबिन गर्ग संगीत जगतका एकजना बहुमुखी साधक हुन्।
                </p>

                <h2 className="section-heading">प्रारम्भिक जीवन</h2>
                <p>
                    जुबिन गर्गको जन्म १८ नोभेम्बर १९७२ मा तुरा (मेघालय) मा भएको हो। उनका पिताको नाम मोहिनी मोहन बरठाकुर र माताको नाम स्वर्गीय इलि बठाकुर। उनीहरूका तीन सन्तानमध्ये एकजना जुबिन अनि दुई छोरी जङ्की र पामी बोठाकुर।
                </p>
                <p>
                    जुबिनको जन्म मेघालयको तुरामा भएको थियो। जुबिनको अर्थ भयो पार्सीहरूका देवताले लिने तरुवालको नाम हो। जुबिनका पितृ मेजिस्ट्रे थिए, साथै उनी एकजना कवि साहित्यकार पनि हुनुहुन्छ। जुबिनको सानैदेखि पुस्तकहरू पढ्ने बानी थियो। माता पनि नृत्यमा पारदर्शी, सुगायिका अनि अभिनेत्री पनि हुनुहुन्थ्यो। त्यसैले घरमा सांगीतिक माहोल बनिएको थियो।
                </p>

                <h2 className="section-heading">संगीत यात्रा</h2>
                <p>
                    भूपेन हाजरिकाको महापरायन हुँदा एउटा भेटवार्तामा जुबिनले भनेका छन् — "जिनियस सधैँ जिनियस — जिनियस कहिल्यै मरेर जाँदैन।" सानैदेखि वरगीत, भुपेन्द्र संगीत, ज्योति सङ्गीत, राभा संगीत, भक्ति गीत आदि गाउन थाले। उनको पहिलो एल्बम 'अनामिका' सन् १९९२ मा निक्लियो, जसले उनलाई असमिया संगीत जगतमा चर्चित बनायो।
                </p>
                <p>
                    राष्ट्रिय स्तरमा उनको नाम २००६ मा आयो — बलिउड चलचित्र 'ग्याङस्टर'को गीत <em>'या अली'</em> मार्फत चर्चाको शिखरमा पुग्यो। यो गीतले उनलाई अन्तर्राष्ट्रिय स्तरमा जनप्रिय आइकनको रूपमा परिचित गरायो।
                </p>

                <div className="quote-block">
                    "म पैसाको धनी होइन — मनको धनी हुन चाहन्छु।"
                    <cite>— जुबिन गर्ग</cite>
                </div>

                <h2 className="section-heading">विविध भाषामा योगदान</h2>
                <p>
                    जुबिन गर्ग बहुभाषिक कलाकार थिए। असमिया, हिन्दी, बङ्गाली, नेपाली, बोड़ो, कोच-राजबंशी, तमिल, तेलुगु, कन्नड, मराठी, मलयालम लगायत ४०+ भाषामा उनले स्वर दिएका छन्। विभिन्न भाषामा ३८,०००+ भन्दा बढी गीत गाएर भारतीय गीति इतिहासमा रेकर्ड गरेका छन्।
                </p>
                <p>
                    जुबिन गर्ग एक पोख्त उदाहरण हुन् — <em>अनेकतामा एकता — युनिटी इन डाइभर्सिटी</em> — गुणको व्यवहारिक प्रयोग गरेका छन्।
                </p>

                <h2 className="section-heading">उल्लेखनीय सम्मान</h2>
                <p>उनले जीवनभर अनेकौं राष्ट्रिय र अन्तर्राष्ट्रिय पुरस्कार पाए, जसमा प्रमुख हुन्:</p>
                <ul className="awards-list">
                    <li>🏆 ५५औँ राष्ट्रिय चलचित्र पुरस्कार — श्रेष्ठ अकाहिनीमूलक संगीत परिचालना (<em>Echo of Silence</em>)</li>
                    <li>🎵 ग्लोबल इन्डियन फिल्म अवार्ड — श्रेष्ठ पुरुष कण्ठ शिल्पी (<em>या अली</em>, २००६)</li>
                    <li>🎶 फिल्मफेयर + जी सिने + आइफा — श्रेष्ठ कण्ठ शिल्पी (<em>या अली</em>)</li>
                    <li>🏅 बि.एफ.जे.ए. अवार्ड — श्रेष्ठ संगीत परिचालक (<em>सुधो तुमी</em>, २००५)</li>
                    <li>🎤 प्राग सिने अवार्ड — बहुपटक श्रेष्ठ कण्ठ शिल्पी (२००५–२०२३)</li>
                    <li>🌟 गुगल द्वारा 'Humming King' उपाधिले विश्वस्तरमा सम्मान</li>
                    <li>🇮🇳 १२४ राष्ट्रले एकसाथ खोजेको व्यक्तित्व — विश्व रेकर्ड</li>
                    <li>📚 लिम्का बुक अफ वर्ल्ड रेकर्ड — एसियाको सर्वाधिक जनभेला (पार्थिव यात्रामा)</li>
                </ul>

                <div className="quote-block">
                    "जिनियस कहिल्यै मरेर जाँदैन।"
                    <cite>— जुबिन गर्ग</cite>
                </div>

                <h2 className="section-heading">सांस्कृतिक योगदान</h2>
                <p>
                    जुबिन गर्ग मात्र गायक वा कलाकार होइनन् — उनी संस्कृतिका अभियन्ता पनि हुन्। उनी 'कलागुरु आर्टिस्ट फाउण्डेशन'का सक्रिय सदस्य थिए, जसले असम तथा पूर्वोत्तर भारतको कला-संस्कृतिको संरक्षण र सम्बर्द्धनमा योगदान पुर्‍याएका छन्। २०१२ को असम बाढीमा पीडितहरूलाई सहयोग, २०१९ कोभिडको समयमा आफ्नो घरलाई 'कोभिड केयर सेन्टर' बनाएर आफ्नो उदार हृदय देखाएका छन्।
                </p>

                <h2 className="section-heading">व्यक्तिगत जीवन</h2>
                <p>
                    जुबिन गर्गले आफूलाई कुनै एक जाति वा धर्मसँग सीमित नराखी विश्वजनीन भावना व्यक्त गर्थे। उनी दुर्बल, रोगी, असहाय र पीडितको पक्षमा खड़ा हुन्थे। उनी भन्थे — "समाजका छोराछोरी नै मेरा छोराछोरी हुन्।" २००२ मा उनले गरिमा साइकिया गर्गसँग विवाह गरे।
                </p>
                <p>
                    जुबिन जीवजन्तुलाई अत्यधिक माया गर्थे। घरमा चराचुरुङ्गी, कुकुर, सुँगा, बकुल्ला पालेका थिए। गैंडाको सेवा गर्ने पहिला व्यक्ति पनि उनै थिए। वृक्षरोपण र स्वच्छता अभियान उनका प्रिय कार्यक्रम थिए।
                </p>

                <div className="quote-block">
                    "कुनै जानवरलाई मारेर विकास, पूजा अथवा धार्मिक आस्था बन्न सक्तैन।"
                    <cite>— जुबिन गर्ग</cite>
                </div>

                <h2 className="section-heading">अन्तिम अध्याय</h2>
                <p>
                    १९ सेप्टेम्बर २०२५ मा सिंगापुरमा स्कुबा डाइभिङ गर्ने क्रममा दुर्घटनामा परेर उनी अकालमै दिवंगत भए। मृत्युको समयमा उनी ५२ वर्षका मात्र थिए। असम सरकारले उनलाई राजकीय सम्मानका साथ अन्त्येष्टि गर्‍यो। लिम्का बुक अफ वर्ल्डमा एसियाको सर्वाधिक जनभेला दर्ता भइसकेको छ।
                </p>
                <p>
                    गत २८ सेप्टेम्बर २०२५ मा भारतका प्रधानमन्त्री मोदीले भनेका छन् — असमका उज्ज्वल रत्न जुबिन गर्ग अमर रहनेछन्।
                </p>

                <div className="finale-section">
                    <p>
                        उनको स्वर, उनका गीत र उनको योगदान सदैव जीवित रहनेछ।
                        वास्तवमै, जुबिन गर्ग असम मात्र होइन — सम्पूर्ण भारतीय संगीतका साझा धरोहर हुन्।
                    </p>
                    <p>
                        असम जुबिन विहीन भएको आज एक वर्ष भयो।
                        जुबिनको आत्माले परमात्माको ठाउँमा बास गरोस् र फेरि जुबिनको जन्म होस् —
                        यही कामना गर्दै उनीप्रति भावपूर्ण श्रद्धाञ्जली अर्पण गर्दछु।
                    </p>
                    <p className="final-quote">
                        "I will die like a king." — जुबिन गर्ग
                    </p>
                </div>

                <div className="author-meta">
                    <p>लेखक: कपिल बरठाकुर | प्रकाशित: सेप्टेम्बर २०२५ | Sahitya Sanskriti</p>
                </div>

                <div style={{ marginTop: '40px', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <LikeButton contentId="shradhanjali-zubeen-garg" />
                    <SocialShare
                        title="वर्षदिन तिमी बि — जुबिन गर्गलाई श्रद्धाञ्जली"
                        url={window.location.href}
                    />
                </div>

                <AdSenseUnit />

                <CommentSection contentId="shradhanjali-zubeen-garg" />
            </div>
        </div>
    );
};

export default ShradhanjaliZubeenGarg;
