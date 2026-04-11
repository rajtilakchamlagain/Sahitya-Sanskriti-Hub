import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

const ClassicalNepaliSahitya = () => {
    return (
        <div className="content-paper" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <SEO
                title="शास्त्रीय नेपाली साहित्य | Classical Nepali Literature"
                description="भानुभक्त, मोतीराम र लेखनाथ पौड्यालको योगदान। संस्कृत छन्द, वीर गाथा र भक्ति धाराको विस्तृत चर्चा।"
                keywords="शास्त्रीय नेपाली साहित्य, Classical Nepali Literature, भानुभक्त आचार्य, मोतीराम भट्ट, लेखनाथ पौड्याल, वसन्त शर्मा"
                publishedTime="2026-02-17T00:00:00+05:30"
                article={true}
            />

            <header style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '38px', color: 'var(--primary-maroon)', marginBottom: '16px' }}>
                    शास्त्रीय नेपाली साहित्य र यसको महत्व
                </h1>
                <p className="nepali-content" style={{ fontSize: '18px', fontWeight: '500' }}>
                    नेपाली साहित्यको जग वीरहरूका गाथा र भक्तहरूका भजनमा अडिएको छ। यो कालखण्डले नै हाम्रो भाषाको मानकीकरण गर्‍यो।
                </p>
            </header>

            <article className="nepali-content">
                <section>
                    <h2>१. वीर धारा (Heroic Era)</h2>
                    <p>
                        नेपाल एकीकरणको समयमा सिपाहीहरूको रगत उम्लाउन "वीर रस" प्रधान कविताहरू लेखिए।
                        सुवानन्द दासको "पृथ्वीनारायण" र शक्तिवल्लभ अर्यालका रचनाहरूले गोर्खाली वीरताको गाथा गाएका छन्।
                        यस समयको भाषामा संस्कृत र हिन्दीको प्रभाव बढी थियो।
                    </p>
                </section>

                <section>
                    <h2>२. भक्ति धारा (Devotional Era)</h2>
                    <p>
                        युद्धपछि शान्तिको खोजीमा साहित्यकारहरू ईश्वरतिर लागे।
                        भानुभक्त आचार्यले "अध्यात्म रामायण" अनुवाद गरेर नेपाली घर-घरमा भक्तिभाव पुर्‍याए।
                        बसन्त शर्माको "कृष्णचरित्र" पनि यसै युगको उत्कृष्ट उपहार हो।
                    </p>
                </section>

                <section>
                    <h2>३. शृङ्गारिक धारा (Romantic Era)</h2>
                    <p>
                        मोतीराम भट्टको उदयसँगै नेपाली साहित्यमा शृङ्गार र प्रेमका कुरा हुन थाले।
                        दरबारीया र रसिक मिजासका कविताहरू लेखिए। मोतीरामले गजल भित्र्याएर युवाहरूलाई आकर्षित गरे।
                        यस युगलाई "माध्यमिक काल" पनि भनिन्छ।
                    </p>
                </section>

                <section>
                    <h2>४. नव्य-शास्त्रीयता (Neo-Classicism)</h2>
                    <p>
                        लेखनाथ पौड्याल, सोमनाथ सिग्देल र माधव घिमिरेले शास्त्रीय छन्दलाई परिष्कृत गरे।
                        उनीहरूको कवितामा नैतिकता, दर्शन र प्रकृतिको चित्रण पाइन्छ।
                        "तरुण तपसी" र "गौरी" जस्ता महाकाव्यहरू यसै धाराका उपज हुन्।
                    </p>
                </section>

                <section style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-paper)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>सम्बन्धित लिङ्कहरू</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/nepali-sahitya" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 600 }}>
                                मूल पृष्ठ: नेपाली साहित्य &rarr;
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/nepali-poets-overview" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 600 }}>
                                प्रमुख नेपाली कविहरू &rarr;
                            </Link>
                        </li>
                    </ul>
                </section>
            </article>
        </div>
    );
};

export default ClassicalNepaliSahitya;
