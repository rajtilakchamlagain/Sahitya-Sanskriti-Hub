import React, { useEffect, useRef, useState } from 'react';
import { Music, MapPin, Calendar, Heart, Sparkles, Quote, Disc3 } from 'lucide-react';
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

    // Scroll to top on mount
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const songs = [
        {
            title: "शुभकामना तिमीलाई",
            lyrics: "शुभकामना तिमीलाई \nफलोस् फुलोस् भोलिको जीवन \nयही नै कामना। शुभकामना...",
            meaning: "यस गीतमा मानवीय सम्बन्धभित्रको पवित्र शुभेच्छा र आशीर्वादको भावना अभिव्यक्त भएको छ। जीवनका अनिश्चितताबीच पनि प्रियजनको उज्ज्वल भविष्यको कामना गर्ने उदात्त मनोभाव यहाँ प्रकट हुन्छ। यसले केवल व्यक्तिगत सुखको कामना मात्र होइन, समग्र जीवनलाई सकारात्मक सोच, आशा र उत्साहले भरिपूर्ण बनाउने सन्देश दिन्छ। यो गीत मानौँ जीवनको यात्रामा एक आत्मीय साथीजस्तै हो, जसले सधैं अगाडि बढ्न प्रेरित गरेको छ। गायकले यस गीतमा भावपूर्ण स्वरलाई समावेश गरेका छन्।"
        },
        {
            title: "मादलुको तालैमा नाची",
            lyrics: "मादलुको तालैमा नाची\nबाँसुरीको स्वरैमा गाई\nघुमी घुमी नाचहे मारुनी...",
            meaning: "यो गीत नेपाली लोकजीवनको जीवन्त चित्र हो। गाउँघरको मेला, पर्व, उत्सव र सामूहिक रमाइलोपनको झल्को यसमा पाइन्छ। मादल र बाँसुरीजस्ता परम्परागत वाद्ययन्त्रहरू केवल संगीतका साधन मात्र होइनन्, ती हाम्रो पहिचान र संस्कृतिका प्रतीक हुन्। यस गीतले समुदायबीचको एकता, उल्लास र सांस्कृतिक निरन्तरताको भावना उजागर गर्दै, जीवनलाई सरल र आनन्दमय रूपमा बाँच्ने प्रेरणा दिएको छ।"
        },
        {
            title: "कसले मेरो बाटोमा काँडा रोपिदिन्छ",
            lyrics: "कसले मेरो बाटोमा काँडा रोपिदिन्छ\nकसले मेरो छातीमा पिर थपिदिन्छ....\nतिमी काँडा रोप्दै जाउ म सुसेल्दै जाउँला\nभेटेसम्म तिम्रो भूल सच्चाउदै जाउँला।",
            meaning: "शब्दमा जति नै गहिराई नआओस् किन यदि भाव र स्वरको सही समायोजन भएन भने त्यो गीत सुन्नमा त्यति आनन्द आउँदैन। त्यसैले कलाकारले यस गीतमा आफ्नो इच्छा शक्तिलाई प्रयोग गरेका छन्। यस गीतमा जीवनका कठिनाइ, धोका र पीडाको यथार्थ चित्रण गरिएको छ। तर यसको गहिराइ त्यतिमै सीमित छैन—यसले प्रतिकूल परिस्थितिमा पनि धैर्य, सहनशीलता र क्षमाशीलताको बाटो रोज्नुपर्ने सन्देश दिन्छ। “तिमी काँडा रोप्दै जाउ, म सुसेल्दै जाउँला” भन्ने भावले नकारात्मकतामाथि सकारात्मकताको विजयलाई देखाउँछ। यो गीतले मानिसलाई द्वेष होइन, सहिष्णुता र आत्मबलका साथ अघि बढ्न प्रेरित गरेको छ।"
        },
        {
            title: "मुटुमा काँडा बिजे",
            lyrics: "मुटुमा काँडा बिजे हाँसीहाँसी सहनुपर्छ\nजिन्दगीको गोरेटोमा सुख दुःख झेल्नुपर्छ।",
            meaning: "गीत जीवनदर्शनको गहिरो अभिव्यक्ति हो। यहाँ दुःख, पीडा र संघर्षलाई जीवनको अभिन्न अङ्गका रूपमा स्वीकार गर्नुपर्ने सन्देश दिइएको छ। जीवनको यात्रामा सुख र दुःख दुवै आउँछन्, र ती सबैलाई धैर्य र सकारात्मक दृष्टिकोणका साथ सामना गर्नुपर्छ भन्ने शिक्षा यसमा निहित छ। हाँसीहाँसी पीडा सहनु भनेको हार मान्नु होइन, बरु जीवनप्रति दृढता र आत्मबल कायम राख्नु हो भन्ने गहिरो सन्देश यसले दिएको छ। सुख दुःख पीडामा व्यक्त गर्ने भाव स्वर यहाँ कलाकारमा प्रचुर मात्रामा पाइन्छ।"
        },
        {
            title: "निरस यो जिन्दगीमा",
            lyrics: "निरस यो जिन्दगीमा गीत पनि देउ कल्पना\nरित्तो यो सम्झनामा याद बनिदेउ कल्पना\nकालो यो रातहरूमा ज्योति भएर चन्द्रमा\nमेरै बनेर साथमा सपना बनिदेउ सम्झना।",
            meaning: "गीत भावनात्मक शून्यता र एक्लोपनको अवस्थाबाट जन्मिएको जस्तो लाग्छ। जीवन जब निरस र रित्तो महसुस हुन्छ, त्यतिबेला प्रेम, कल्पना र स्मृतिहरूले त्यसलाई अर्थपूर्ण बनाउने प्रयास गर्छन्। “कल्पना” यहाँ केवल व्यक्ति होइन, जीवनमा रंग भर्ने एक प्रतीक हो—आशा, प्रेम र सौन्दर्यको प्रतीक। यो गीतले जीवनमा भावनात्मक सम्पर्क र आत्मीयताको कति ठूलो महत्व हुन्छ भन्ने कुरा अत्यन्त मार्मिक रूपमा व्यक्त गरिएको छ। कोहीबेला रुवाईको स्वरले पनि मानिसको संवेदनाका भावहरु अलगअलग रुपमा प्रकट गर्दछ। यदुमनि शर्माले गीतहरूमा आफ्नो जोडदार स्वर पक्षलाई राखेका छन्।"
        },
        {
            title: "जहाँ रहेपनि गीतमा",
            lyrics: "जहाँ रहेपनि गीतमा मेरो तिम्रै हुने छ,\nधोका नै सही म माथि तिम्रो यो गुण रहने छ -\nसाँझको यामको गहना बनी जुनकिरी बाले झैँ,\nएकान्त पाखामा मोहिनी फिजाई बतास चले झैँ-\nहिँड्दा तिमी पाउमा नुपुर रुन्झुन् रुन्झुन हुनेछ...",
            meaning: "गीतमा प्रेमको गहिरो समर्पण र स्थायित्वको अनुभूति हुन्छ। त्यहाँ स्वरले यसको चरम शिखरमा पुर्याउँछ। यो चरम प्राप्ति केवल कलाकारको हृदयको स्वरबाट मात्र सम्भव छ। दूरी, समय वा परिस्थितिले प्रेमलाई कमजोर पार्न सक्दैन भन्ने भाव यसमा स्पष्ट छ। “धोका नै सही” भन्ने स्वीकारोक्ति भित्र पनि प्रेमको निस्वार्थता र त्याग झल्किन्छ। यो गीतले सम्बन्धको आध्यात्मिक गहिराइलाई उजागर गर्दै, साँचो प्रेम शरीरभन्दा पर, स्मृति र आत्मामा बाँचिरहने कुरा व्यक्त गर्छ। अत्यन्त कोमल, मार्मिक र आत्मीय अनुभूति दिने यो गीत प्रेमको अमर स्वरूपको प्रतीक हो।"
        }
    ];

    return (
        <div className="shradhanjali-memorial">
            <SEO title="श्रद्धाञ्जली: कलाकार यदुमनि शर्मा | Sahitya Sanskriti" />
            <style>{`
                .shradhanjali-memorial { 
                    background: #080808; 
                    color: #e0d0b0; 
                    font-family: 'var(--font-body)', 'serif'; 
                    overflow-x: hidden; 
                    position: relative; 
                    padding-bottom: 100px;
                }
                .reveal { opacity: 0; transform: translateY(40px); transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-active { opacity: 1 !important; transform: translateY(0) !important; }
                
                /* The Glow overlay */
                .glow-overlay { 
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                    background: radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 60%); 
                    pointer-events: none; z-index: 1; 
                }
                
                /* Typography (Fluid for Mobile) */
                .fluid-text { font-size: clamp(17px, 2.5vw, 20px); line-height: 2.0; opacity: 0.9; margin-bottom: 24px; color: rgba(255,255,255,0.85); }
                .fluid-heading { font-size: clamp(28px, 5vw, 48px); color: #D4AF37; font-family: 'var(--font-heading)', serif; margin-bottom: 20px; }
                
                /* Layout Containers */
                .content-wrapper { max-width: 1000px; margin: 0 auto; padding: 0 20px; position: relative; z-index: 2; }
                
                /* Hero */
                .hero-section { min-height: 80vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 100px 20px 40px; }
                .hero-shloka { font-size: clamp(22px, 4vw, 32px); color: #D4AF37; max-width: 800px; margin-bottom: 20px; line-height: 1.8; font-style: italic; }
                
                /* Premium Glass Card */
                .premium-card {
                    background: rgba(255, 255, 255, 0.02);
                    backdrop-filter: blur(16px);
                    border: 1px solid rgba(212, 175, 55, 0.15);
                    border-radius: 30px;
                    padding: clamp(30px, 6vw, 60px);
                    margin-bottom: 60px;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.4);
                }

                /* Portrait */
                .portrait-wrap { text-align: center; margin-bottom: 50px; }
                .portrait-img { 
                    width: 250px; height: 250px; border-radius: 50%; object-fit: cover; 
                    border: 4px solid rgba(212, 175, 55, 0.3); box-shadow: 0 0 50px rgba(212, 175, 55, 0.2); 
                    margin: 0 auto 30px; filter: sepia(0.2) contrast(1.1);
                }

                /* Interactive Flip Cards (Treasure Map Style) */
                .flip-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 30px; margin-top: 40px; perspective: 1000px; }
                .flip-card { background: transparent; height: 400px; perspective: 1000px; cursor: pointer; }
                .flip-card-inner { position: relative; width: 100%; height: 100%; text-align: center; transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); transform-style: preserve-3d; }
                .flip-card:hover .flip-card-inner, .flip-card:active .flip-card-inner { transform: rotateY(180deg); }
                
                .flip-card-front, .flip-card-back {
                    position: absolute; width: 100%; height: 100%; backface-visibility: hidden;
                    border-radius: 20px; padding: 30px; display: flex; flex-direction: column; justify-content: center;
                    border: 1px solid rgba(212, 175, 55, 0.2);
                }
                .flip-card-front { 
                    background: linear-gradient(145deg, rgba(30,30,30,0.8), rgba(15,15,15,0.9)); 
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                }
                .flip-card-back { 
                    background: linear-gradient(145deg, rgba(212,175,55,0.1), rgba(10,10,10,0.95)); 
                    transform: rotateY(180deg); 
                    border-color: #D4AF37;
                    align-items: flex-start; text-align: left; overflow-y: auto;
                }
                
                .song-lyric { font-size: 18px; line-height: 1.8; font-style: italic; color: #e0d0b0; opacity: 0.8; white-space: pre-line; }
                .song-meaning { font-size: 15px; line-height: 1.8; color: #fff; opacity: 0.9; text-align: justify; }

                /* Signature Block */
                .signature-block { text-align: right; margin-top: 60px; padding-top: 30px; border-top: 1px solid rgba(212,175,55,0.2); }
                .signature-text { color: #D4AF37; font-size: clamp(20px, 3vw, 28px); font-family: 'var(--font-heading)', serif; font-style: italic; }
                
                /* Hint Text */
                .interaction-hint { text-align: center; color: #D4AF37; opacity: 0.6; font-size: 14px; margin-bottom: 30px; letter-spacing: 2px; text-transform: uppercase; animation: pulse 2s infinite; }
                @keyframes pulse { 0% { opacity: 0.3; } 50% { opacity: 0.8; } 100% { opacity: 0.3; } }
            `}</style>

            <div className="glow-overlay" />
            
            <header className="hero-section">
                <div className="reveal" ref={el => sectionRefs.current[0] = el}>
                    <Sparkles size={48} color="#D4AF37" style={{ marginBottom: '30px' }} />
                    <p className="hero-shloka">“कालचक्रं यथा नित्यं, भ्रमते न निवर्तते।<br />तथा जीवनमृत्युभ्यां, लोकः सर्वः प्रवर्तते॥”</p>
                    <p style={{ opacity: 0.7, fontSize: 'clamp(16px, 2vw, 20px)', maxWidth: '700px', margin: '20px auto', lineHeight: '1.8' }}>
                        - जसरी कालचक्र सधैं घुमिरहन्छ र कहिल्यै रोकिँदैन, त्यसरी नै जीवन र मृत्युको चक्र संसारमा चलिरहन्छ।
                    </p>
                </div>
            </header>

            <div className="content-wrapper">
                {/* Intro Section */}
                <section className="reveal premium-card" ref={el => sectionRefs.current[1] = el}>
                    <div className="portrait-wrap">
                        <img src="/shradhanjali_tribute_portrait_1775849567109.png" alt="Yadumani Sharma" className="portrait-img" />
                        <h1 className="fluid-heading">कलाकार यदुमनि शर्मा</h1>
                        <p style={{ fontSize: '18px', color: '#a0a090', letterSpacing: '4px' }}>एक सम्झना</p>
                    </div>

                    <div className="fluid-text">
                        <p>असमे गोर्खा समाजका विशिष्ट व्यक्तित्व यदुमनि शर्मा हाम्रो समाजमा परिचित नाम हो। सानैदेखि संगीत साहित्य आदि क्षेत्रमा रुचि राख्ने यदुमानी शर्मा सन् १९७५ मा पि यु परीक्षा पास गरिसकेपछि सांस्कृतिक क्षेत्रमा आफ्नो योगदान अघि बढाउँछन्। गहपुर क्षेत्रमा नेपाली समाजमा गोर्खाली संस्कृतिलाई गीत र संस्कृतिका विभिन्न कार्यक्रम गराएर सामाजिक सांस्कृतिक भावना जगाएका छन्।</p>
                        
                        <p>त्यसबेला देशमा असम आन्दोलनको सुरुवातको समय बृहत समाजसँग मिलेर बस्नुपर्ने त्यसको साथै आफ्नो सांस्कृतिक परिवेशलाई मलजल गर्ने क्षेत्रमा उनको योगदान उल्लेखनीय छ। गोर्खाली समाज संस्कृति भानु जयन्ती, देवकोटा जयन्ती, कटुवाल जयन्ती आदिका साथै विभिन्न चाडपर्वहरूमा सांस्कृतिक कार्यक्रम र गीत उत्सवादीले नै मलजल भएका छन्। हाम्रो चाडपर्व धर्मीय आस्था र परम्परा र हाम्रो संस्कृतिलाई छुट्याउन नसकिने एउटै खोलाको पानी भएर बगेको छ। उहाँले सिकाएका गीत नृत्यका साथै सांस्कृतिक कार्यक्रमहरू गाउँघरमा उहाँहरुकै नेतृत्वमा हुन्थ्यो भन्ने प्रसङ्ग भग्नी सेवा देवीले आफैं नाचेको कुरा उल्लेख गर्नुहुन्छ।</p>

                        <p>यस क्षेत्रमा यदुमनी शर्माको गहपुर क्षेत्रमा उल्लेखनीय योगदान छ। उनले केवल नेपाली गीत मात्र होइन असमीया, हिन्दी, बङ्गाली विभिन्न भाषामा गीत गाएका छन्। विशेषगरी समर हजारीका, भुपेन हजारीका, हिरेन भट्टचार्य आदि आदिका गीतहरू मञ्चमा गाएर यदुमनि शर्माले कम उमेर मै स्वीकृति पाएका थिए।</p>

                        <p>हामी साना थियौँ ताते ताते गर्दै गरेको बेलामा सन् १९७९ मा उनी अल इन्डिया रेडियो गुहाटीमा रेडियो आर्टिस्टको रुपमा स्वीकृति पाउँछन्। अल इन्डिया रेडियो गुहाटीको नेपाली सेक्सनका सेक्सन सहयोगी गंगा शर्माको सक्रियतामा त्यो विभाग चलिरहेको थियो। हामीले सानामा सुन्ने गर्थ्यो, अल इन्डिया रेडियो गुहाटीको पूर्वाञ्चल कार्यक्रममा ३. १५ बजे समयमा श्रुतिमधुर बाँसुरीको धुनले पूर्वाञ्चलका गोर्खालीहरू सुन्न धीरभइ रेडियो नजदिक बसी रहेका हुन्थे। त्यसबेला हामी सानै थियौं। गीत सुन्ने अर्को कुनै साधन थिएन। रेडियोमै सबै मानिस निर्भर थिए।</p>

                        <p>असमका विभिन्न कलाकारहरूले दिएको योगदान भित्र यदुमनी शर्मा जस्ता प्रतिभाको योगदान यो समाजका लागि उल्लेखनीय छ।</p>
                    </div>
                </section>

                {/* The Treasure Map of Songs */}
                <section className="reveal" ref={el => sectionRefs.current[2] = el} style={{ marginTop: '100px', marginBottom: '100px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <Disc3 size={40} color="#D4AF37" style={{ margin: '0 auto 20px' }} />
                        <h2 className="fluid-heading">संगीतका मर्महरू</h2>
                        <p className="interaction-hint">(टच गर्नुहोस् वा होभर गर्नुहोस्)</p>
                    </div>

                    <div className="flip-grid">
                        {songs.map((song, idx) => (
                            <div key={idx} className="reveal flip-card" ref={el => sectionRefs.current[3 + idx] = el}>
                                <div className="flip-card-inner">
                                    {/* Front side - Lyrics */}
                                    <div className="flip-card-front">
                                        <Music size={24} color="#D4AF37" style={{ margin: '0 auto 20px' }} />
                                        <h3 style={{ color: '#D4AF37', fontSize: '22px', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>{song.title}</h3>
                                        <p className="song-lyric">"{song.lyrics}"</p>
                                    </div>
                                    
                                    {/* Back side - Meaning */}
                                    <div className="flip-card-back">
                                        <Quote size={20} color="#D4AF37" style={{ marginBottom: '15px' }} />
                                        <p className="song-meaning">{song.meaning}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Personal Memories */}
                <section className="reveal premium-card" ref={el => sectionRefs.current[10] = el}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <Heart size={36} color="#D4AF37" fill="rgba(212,175,55,0.2)" style={{ margin: '0 auto 15px' }} />
                        <h2 className="fluid-heading">एक आत्मीय साइनो</h2>
                    </div>
                    
                    <div className="fluid-text">
                        <p>कवि कलाकारहरूको भाव विचार केवल व्यक्तिको आवाज होइन हरेक व्यक्तिमा रहने सक्ने भावनाहरुको वाह्य प्रकाश हो। समाज प्रकृति सामाजिक व्यवस्था माया प्रेम सद्भाव पीडा व्यथा यौवन सबै विचारहरु कवि कलाकारहरुले पवित्र हृदयले व्यक्त गरेका हुन्छन्। यदुमनि शर्मा पनि त्यस्तै एकजना प्रेरणादायी कलाकार हुन्।</p>
                        
                        <p>अब हाम्रो साइनो सम्पर्कको कुरो गर्नु हो भने हाम्रो सम्बन्ध गहपूर निवासी तिम्सिना परिवारकै भान्जी उमाकान्त तिम्सिनाकी छोरीसँग हाम्रो दाम्पत्य जीवन सुरु हुँदा यदुमनी शर्मा हाम्रा मामा ससुराको सम्बन्धमा गाँसिनुभएको छ। पहिला उहाँको गोगामुखमा बसोबास थियो। भेटघाट कम्ती थियो। जब गहपुरमा बस्न थाल्नुभयो तब वर्षमा दुई एकपल्ट भेट्ने मौका हुनथाल्यो। म उनीप्रति आग्रही पनि थिएँ। किनकि उनी एकजना विशिष्ट कलाकार हुनुहुन्छ कलाकारप्रति मेरो त्यसै झुकाउ पनि छ। गीत सुन्ने गुनगुनाउने बानी पनि छ।</p>
                        
                        <p>त्यसैले जब म ससुराल जान्छु त्यसबेला मामा ससुराको घरमा र काका ससुरा लिला तिम्सिनाको घरमा पनि पुग्छु नै। त्यहीमाथि ज्वाईंहरूलाई ससुराली मामा ससुरा भनेपछि दशैंमा जानुपर्ने हुन्छ नै। यो पनि एउटा खुसीको मुहुर्त नै हुन्थ्यो। जब म मामाको घरमा जान्थे उहाँ हार्मोनियम तबला गिटार घरमा सजाइरहेको हुन्थ्यो। उहाँहरुसँग सादरपूर्वक भेटघाटले खुसीको परिवेश बनिन्थ्यो। यति हुँदाहुँदै मेरो दृष्टि सजाएर राखिएको बाद्य बाजनातिरै पुग्दथ्यो। जब म हार्मोनियम खोलेर गुनगुनाउन थाल्थे, तब मामा ससुरा आएर सोध्नुहुन्थ्यो। अनि बसी बियालोमा विगतका गीतका प्रसङ्गहरु गर्नुहुन्थ्यो। उहाँले आफै हार्मोनियम बजाएर गीत गाउनुहुन्थ्यो। त्यसबेलाका गीतहरूको लय मिठास स्वाद छुट्टै छ। गीतहरूमा सालिनता छ शब्दहरूमा लय, अलङ्कार र अभिव्यञ्जना छ। म एक टक लागेर मुग्ध भई सुन्दथेँ। दशैंको टिको लाउने प्रसङ्ग त्यसबेला हामी भुलेका हुन्थ्यौ।</p>
                        
                        <p>माइजु भन्नुहुन्थ्यो अहिले बिरामी हुनुहुन्छ साह्रै गाउन सक्नुहुन्न। तपाईँ आउदा मामा मात्रै यसरी गाउनुभएको हो। त्यो अघिको समय भुल्न सक्नुहुन्न तपाईं आउँदा साह्रै राम्रो लाग्छ। ब्युझाइदिए जस्तो लाग्छ। कोहीबेला मामा गीतका प्रसङ्गमा भावुक हुनुहुन्थ्यो। मामाले गाएको बेलामा मैले केही समय मोबाइल रेकर्ड गरेर सञ्जालमा पनि हालेको मलाई अनुभव छ। म मामाप्रति माइजुको अगाध निष्ठा र माया प्रेम देख्दथे।</p>
                        
                        <p>मामाका गीतहरूमा शब्द चयनको गाम्भिर्यतालाई शब्द उच्चारणको विशिष्टता र एक शब्दसँग अर्को शब्दको लयात्मक संयोजन छुट्टै पहिचान छ। सबै गायकको गलामा यो विशिष्टता देखिँदैन। मामाको घर सांस्कृतिक चर्चाको एउटा केन्द्र बनेर रहेको थियो र वर्तमान पनि रहेको छ।</p>

                        <p>अन्त्यमा मामाले परिवारमा छोराछोरी नातिनातिना सबैलाई छाडेर गतवर्ष सन् २०२५ को २ एप्रिलमा यो लोक बाट परलोकगामी हुनुभयो। उहाँको आकस्मिक वियोगले समाजलाई धेरै क्षति पुर्याएको छ। उहाँले दिएको योगदान आउने पिढीका लागि प्रेरणा बनोस्। मामाको वर्षदिनको श्रद्धाञ्जली अनुष्ठानमा यिनै दुई शब्दद्वारा हार्दिक श्रद्धाञ्जली ज्ञापन गर्दछु।</p>
                        
                        <p style={{ textAlign: 'center', color: '#D4AF37', marginTop: '30px', fontSize: '24px' }}>ॐ शान्तिः शान्तिः शान्तिः।</p>
                    </div>

                    <div className="signature-block">
                        <div className="signature-text">— ड० तिलक शर्मा</div>
                        <div style={{ color: '#a0a090', fontSize: '16px', marginTop: '5px' }}>जामुगुडीहाट</div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ShradhanjaliYadumani;
