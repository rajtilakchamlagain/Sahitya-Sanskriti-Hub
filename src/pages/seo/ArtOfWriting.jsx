import React, { useRef } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import ArticleShare from '../../components/ArticleShare';
import StudyShareCard from '../../components/StudyShareCard';
import AIProfessorWidget from '../../components/AIProfessorWidget';

const ArtOfWriting = () => {
    const shareRef = useRef(null);

    return (
        <div style={{
            position: 'relative',
            background: 'transparent', // Allow the BossTier immersive canvas to show through
            padding: '80px 20px',
            minHeight: '100vh',
            fontFamily: 'serif',
            color: '#2A1B1A', // Deep Espresso Reading Text
            overflow: 'hidden'
        }}>
            {/* Billion Dollar Inner Styling / Animations */}
            <style>
                {`
                @keyframes luxFadeInUp {
                    from { opacity: 0; transform: translateY(40px) scale(0.98); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes floatArtifact {
                    0% { transform: translateY(0) rotate(-5deg) scale(1); }
                    50% { transform: translateY(-30px) rotate(5deg) scale(1.02); }
                    100% { transform: translateY(0) rotate(-5deg) scale(1); }
                }
                @keyframes pulseGlow {
                    0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.2); }
                    70% { box-shadow: 0 0 0 20px rgba(212, 175, 55, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
                }
                .lux-card {
                    animation: luxFadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    background: #ffffff;
                    border: 1px solid rgba(139, 0, 0, 0.1);
                    border-top: 2px solid rgba(212, 175, 55, 0.4);
                    box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.08), inset 0 0 40px rgba(212, 175, 55, 0.02);
                }
                .lux-text-highlight {
                    background: -webkit-linear-gradient(45deg, #8B0000, #D4AF37);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                `}
            </style>

            {/* Background Texture: Light Graph/Grid Paper Effect for Focus */}
            <div style={{
                position: 'fixed',
                top: '0', left: '0', width: '100%', height: '100%',
                backgroundImage: 'linear-gradient(rgba(139, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 0, 0, 0.04) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            {/* Floating Deep Background Giant Icon */}
            <div style={{ position: 'absolute', top: '10%', right: '-10%', opacity: 0.02, animation: 'floatArtifact 20s infinite ease-in-out', zIndex: 0, pointerEvents: 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 24 24" fill="none" stroke="#8B0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>
            </div>
            
            <div style={{ position: 'absolute', bottom: '20%', left: '-5%', opacity: 0.015, animation: 'floatArtifact 25s infinite ease-in-out reverse', zIndex: 0, pointerEvents: 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="#8B0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>
            </div>

            {/* Gold Border Inlay for the Premium Vibe */}
            <div style={{
                position: 'fixed',
                top: '20px', left: '20px', right: '20px', bottom: '20px',
                border: '1px solid rgba(212, 175, 55, 0.15)',
                pointerEvents: 'none',
                zIndex: 0,
                borderRadius: '12px'
            }}></div>

            <div className="lux-card" style={{ 
                position: 'relative', 
                zIndex: 1, 
                maxWidth: '900px', 
                margin: '0 auto', 
                padding: '60px 50px',
                borderRadius: '24px'
            }}>
            <SEO
                title="लेखन कला : पृष्ठभूमि | The Art of Writing"
                description="लेखन कलाको अवधारणा, पूर्वीय र पाश्चात्य परम्परामा यसको विकास, र नेपाली साहित्यमा यसको ऐतिहासिक पृष्ठभूमिबारे विस्तृत अध्ययन सामग्री।"
                keywords="लेखन कला, Art of Writing, नेपाली साहित्य अध्ययन, Nepali Literature Study, भरतमुनि, एरिस्टोटल, Study Material, पृष्ठभूमि"
                publishedTime={new Date().toISOString()}
                article={true}
            />

            {/* Hidden High-Res Share Card Canvas */}
            <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
                <StudyShareCard 
                    ref={shareRef}
                    title="लेखन कला : पृष्ठभूमि"
                    excerpt={`मानव सभ्यताको विकाससँगै विचार र अनुभवलाई अभिव्यक्त गर्ने सशक्त माध्यमको रूपमा लेखन कलाको विकास र ऐतिहासिक पृष्ठभूमि।`}
                    author="Sahitya Archive"
                />
            </div>

            <header style={{ marginBottom: '40px', borderBottom: '1px solid rgba(139, 0, 0, 0.1)', paddingBottom: '20px' }}>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '38px', color: '#8B0000', marginBottom: '16px', lineHeight: 1.2, fontWeight: 'bold' }}>
                    लेखन कला : पृष्ठभूमि
                </h1>
                <p className="nepali-content" style={{ fontSize: '18px', fontWeight: '500', color: '#6B4A3C' }}>
                    मानव सभ्यताको विकाससँगै विचार र अनुभवलाई अभिव्यक्त गर्ने सशक्त माध्यमको रूपमा लेखन कलाको विकास।
                </p>
            </header>

            <article className="nepali-content" style={{ fontSize: '18px', lineHeight: '1.8', color: '#2A1B1A' }}>
                <p style={{ marginBottom: '24px' }}>
                    लेखन कलाको अवधारणा मानव सभ्यताको प्रारम्भसँगै विकसित भएको हो। मानव सभ्यताको विकाससँगै विचार र अनुभवलाई अभिव्यक्त गर्ने आवश्यकता पनि बढ्दै गयो। समयक्रममा लिपिको विकास भयो र त्यसैसँग लेखन कलाको पनि प्रारम्भ भयो। यसरी लेखनले मानव सञ्चारको महत्वपूर्ण साधनको रूपमा स्थान प्राप्त गर्यो। लेखन कला केवल सूचना आदान– प्रदानको माध्यम मात्र नभई मानवीय भावना, कल्पना, ज्ञान र अनुभवलाई स्थायी रूपमा अभिलेख गर्ने सशक्त माध्यम बन्यो।
                </p>

                <p style={{ marginBottom: '32px' }}>
                    प्राचीन कालदेखि नै विभिन्न सभ्यताहरूमा लेखनलाई ज्ञान संरक्षण र प्रसारणको आधारका रूपमा प्रयोग गर्दै आएको पाइन्छ। यसले इतिहास, संस्कृति र परम्परालाई पुस्तादेखि पुस्तासम्म सुरक्षित राख्न महत्वपूर्ण भूमिका खेलेको छ।
                </p>

                <section style={{ margin: '40px 0' }}>
                    <h2 style={{ fontSize: '26px', color: '#8B0000', marginBottom: '20px', fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}> पूर्वीय र पाश्चात्य परम्परा </h2>
                    <p style={{ marginBottom: '16px' }}>
                        पूर्वीय परम्परामा लेखनलाई कला र साधनाको रूपमा हेरिएको पाइन्छ, जहाँ भाव, रस र अभिव्यक्तिलाई विशेष महत्व दिइन्छ। प्राचीन पूर्वीय परम्परामा, विशेषतः <strong>भरतमुनिको नाट्यशास्त्र</strong>, <strong>कालिदासको शाकुन्तल</strong> जस्ता ग्रन्थहरूले अभिव्यक्तिलाई कला मान्दै भाषा, भाव र शैलीको महत्वलाई जोड दिएका छन्। यसले लेखनलाई केवल सूचना दिने माध्यम नभई रचनात्मक र भावनात्मक अभिव्यक्तिको माध्यमका रूपमा स्थापित गर्यो।
                    </p>
                    <p>
                        पाश्चात्य परम्परामा भने लेखनलाई संरचना, शैली र तर्कसँग जोडेर व्यवस्थित रूपमा विकास गरिएको छ। यी दुवै दृष्टिकोणले लेखन कलालाई समृद्ध बनाएका छन्। पाश्चात्य परम्परामा <strong>एरिस्टोटलले</strong> आफ्नो ग्रन्थ <em>Poetics</em> मा साहित्य र नाटकलाई कला मानेर त्यसका तत्त्वहरूको विश्लेषण गरेका छन्। यसले लेखनलाई एक व्यवस्थित र अध्ययनयोग्य विधाका रूपमा विकास गर्न ठूलो मद्दत गर्यो।
                    </p>
                </section>

                <section style={{ margin: '40px 0' }}>
                    <h2 style={{ fontSize: '26px', color: '#8B0000', marginBottom: '20px', fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}> मध्यकाल र नेपाली साहित्यमा विकास </h2>
                    <p style={{ marginBottom: '16px' }}>
                        मध्यकाल र पुनर्जागरण कालमा <strong>भवभूति</strong>, <strong>तुलसीदास</strong> र <strong>सुरदासका</strong> लेखन कला अझ विकसित हुँदै गयो। पाश्चात्य खण्डमा विशेषतः <strong>William Shakespeare</strong> जस्ता प्रख्यात साहित्यकारहरूले भाषा, शैली र अभिव्यक्तिलाई उच्च स्तरमा पुर्याए। यस अवधिमा लेखनलाई सृजनात्मक र कलात्मक अभिव्यक्तिको रूपमा व्यापक मान्यता प्राप्त भयो।
                    </p>
                    <p>
                        नेपाली साहित्यको सन्दर्भमा हेर्दा, लेखन कलाको सुरुआत मौखिक परम्पराबाट भएको हो। लोकगीत,आहान, लोककथा र वेद,पुराण, उपनिषद्,पन्चतन्त्र आदि धार्मिक वाचनमार्फत विचारहरू व्यक्त गरिन्थे। पछि अनुदित हुँदै हास्यकदम्ब, हितोपदेश, सोमनाथको आदर्श राघव, भानुभक्तको रामायण, लेखनाथको तरुण तपसी, तुलाचन आलेको सबाईकाव्य, हरिनारायण विद्याभूषणको गीतमाला,सुधपा आदिका साथै विभिन्न साहित्यिक संस्था र पत्रपत्रिकाका लिखित साहित्यको विकाससँगै लेखनले व्यवस्थित रूप लियो र विभिन्न विधाहरू—कविता, कथा, निबन्ध, नाटक आदि—मार्फत विस्तार भयो।
                    </p>
                </section>

                <section style={{ margin: '48px 0', padding: '32px', backgroundColor: 'rgba(139, 0, 0, 0.03)', borderRadius: '16px', borderLeft: '4px solid #8B0000' }}>
                    <h2 style={{ fontSize: '22px', color: '#8B0000', marginBottom: '16px', fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}>निष्कर्ष</h2>
                    <p style={{ margin: '0 0 16px 0' }}>
                        आधुनिक युगमा लेखन कला अझै व्यापक र बहुआयामिक बनेको छ। शिक्षा, सञ्चार, प्रविधि र सामाजिक परिवर्तनका कारण लेखनको प्रयोग र महत्व अझ बढेको छ। विज्ञानको प्रविधिले एआई जस्तो नयाँ प्रविधि सिर्जना गरेर लेखन कलालाई दृश्यसँग जोडेर अथवा नयाँ तक्निक प्रयोग गरेर लेखन कला व्यक्तिको सृजनशीलता, बौद्धिकता र अभिव्यक्ति क्षमताको महत्वपूर्ण सूचकका रूपमा स्थापित गर्दै आएको छ।
                    </p>
                    <p style={{ margin: 0, fontStyle: 'italic', fontWeight: '600', color: '#8B0000', fontSize: '19px' }}>
                        "लेखन कला भनेको शब्दहरूको माध्यमबाट आफ्ना विचार, भावना, अनुभव तथा ज्ञानलाई स्पष्ट, व्यवस्थित र प्रभावकारी रूपमा अभिव्यक्त गर्ने कला हो।"
                    </p>
                </section>

                {/* Article Share Flow */}
                <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <ArticleShare title="लेखन कला : पृष्ठभूमि | The Art of Writing" elementRef={shareRef} />
                </div>

                <section style={{ marginTop: '40px', padding: '32px', background: 'rgba(139, 0, 0, 0.02)', borderRadius: '16px', border: '1px solid rgba(139, 0, 0, 0.1)' }}>
                    <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: '#8B0000', marginBottom: '20px', fontWeight: 'bold' }}>सम्बन्धित अध्ययन सामग्री</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <li>
                            <Link to="/study" style={{ color: '#2A1B1A', textDecoration: 'none', fontWeight: '600', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                &larr; मूल पृष्ठ (Study Materials) फर्कनुहोस्
                            </Link>
                        </li>
                        <li>
                            <Link to="/nepali-sahitya" style={{ color: '#2A1B1A', textDecoration: 'none', fontWeight: '600', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                नेपाली साहित्यको इतिहास सुन्नुहोस् &rarr;
                            </Link>
                        </li>
                    </ul>
                </section>
            </article>
        </div>

        <AIProfessorWidget 
            pageTitle="लेखन कला : पृष्ठभूमि" 
            contextText="लेखन कलाको अवधारणा मानव सभ्यताको प्रारम्भसँगै विकसित भएको हो। पूर्वीय परम्परामा भरतमुनि र पाश्चात्यमा एरिस्टोटलले यसको विकास गरे। नेपाली साहित्यमा यो मौखिक परम्परा हुँदै लिखित रूपमा आयो।"
        />
        </div>
    );
};

export default ArtOfWriting;
