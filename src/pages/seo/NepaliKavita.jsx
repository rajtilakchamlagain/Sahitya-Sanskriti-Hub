import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import SummaryBox from '../../components/SummaryBox';

const NepaliKavita = () => {
    return (
        <div className="content-paper" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <SEO
                title="नेपाली कविता | आधुनिक र शास्त्रीय संग्रह | Nepali Poetry Hub"
                description="नेपाली कविताको भण्डार। आधुनिक, शास्त्रीय र समकालीन नेपाली कविताहरूको संग्रह र विश्लेषण। छन्द, गद्य कविता र गजलहरूको विस्तृत जानकारी।"
                keywords="नेपाली कविता, Nepali Poem, Nepali Kavita, आधुनिक नेपाली कविता, छन्द कविता, गजल, हाइकु, नेपाली साहित्य"
                publishedTime="2026-02-17T00:00:00+05:30"
                article={true}
            />

            <header style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', color: 'var(--primary-maroon)', marginBottom: '16px' }}>
                    नेपाली कविता: विकासक्रम र आधुनिक प्रवृत्तिहरू
                </h1>

                <SummaryBox
                    title="नेपाली कविताको सार"
                    definition="मानवीय संवेदना, प्रकृति प्रेम, र सामाजिक विद्रोहलाई लयात्मक वा गद्यात्मक शैलीमा प्रस्तुत गर्ने विधा नै नेपाली कविता हो।"
                    takeaway="वीरधारा, भक्तिधारा, र शृङ्गारिक काल हुँदै आधुनिक प्रयोगवादसम्म आइपुग्दा नेपाली कविताले ठूलो फड्को मारेको छ।"
                />

                <p className="nepali-content" style={{ fontSize: '20px', fontWeight: '500' }}>
                    <strong>नेपाली कविता</strong> ले नेपाली साहित्यको मेरुदण्डको रूपमा काम गरेको छ। भानुभक्तको सरलतादेखि देवकोटाको स्वच्छन्दतासम्म, र रिमालको विद्रोहदेखि भूपिको व्यंग्यसम्म — नेपाली कविताको यात्रा रोमाञ्चक छ।
                </p>
            </header>

            <article className="nepali-content">
                {/* 1. Metrical Poetry */}
                <section>
                    <h2>१. छन्द कविता (Metrical Poetry)</h2>
                    <p>
                        नेपाली कविताको जग <strong>शास्त्रीय छन्द</strong> मा अडिएको छ। संस्कृत साहित्यबाट प्रभावित भएर शार्दूलविक्रीडित, शिखरिणी, र मन्दाक्रान्ता जस्ता छन्दहरूमा उत्कृष्ट महाकाव्यहरू रचिएका छन्।
                        लेखनाथ पौड्याललाई 'कविशिरोमणि' भन्नुको कारण उनको छन्द माथिको अभूतपूर्व पकड हो।
                    </p>
                </section>

                {/* 2. Prose Poetry */}
                <section>
                    <h2>२. गद्य कविता (Prose Poetry)</h2>
                    <p>
                        समयको परिवर्तनसँगै, कविहरूले छन्दको बन्धन तोडेर स्वतन्त्र गद्य शैली अपनाए। यसलाई <strong>गद्य कविता</strong> भनिन्छ।
                        गोपालप्रसाद रिमाल हँदै भूपि शेरचनसम्म आइपुग्दा, गद्य उविताले आम मानिसको व्यथा र विद्रोहलाई सरल भाषामा बोल्न थाल्यो।
                        "हुने बिरुवाको चिल्लो पात" भनेझैं आधुनिक कविहरूले गद्यमै शशक्त बिम्बहरू प्रयोग गरेका छन्।
                    </p>
                </section>

                {/* 3. Revolutionary Trend */}
                <section>
                    <h2>३. प्रगतिवादी र क्रान्तिकारी धारा</h2>
                    <p>
                        राणा शासन र पञ्चायत विरुद्धको आवाज उठाउन कविता एक प्रमुख हतियार बन्यो।
                        युद्धप्रसाद मिश्र र पारिजात जस्ता स्रष्टाहरूले गरिब, निमुखा र शोषित वर्गको पक्षमा कलम चलाए।
                        यस्ता कविताहरूमा आगो ओकल्ने शक्ति हुन्छ।
                    </p>
                </section>

                {/* 4. Experimentalism */}
                <section>
                    <h2>४. प्रयोगवाद र आधुनिकता</h2>
                    <p>
                        इन्द्रबहादुर राईको 'तेस्रो आयाम' आन्दोलनले नेपाली साहित्यमा नयाँ दृष्टिकोण ल्यायो।
                        आजका कविहरू अस्तित्ववाद, विसंगतिवाद, र उत्तर-आधुनिकतावादका सिद्धान्तहरू प्रयोग गरेर कविता लेख्छन्।
                        यो केही जटिल भए पनि बौद्धिक पाठकहरूका लागि अत्यन्त रोचक हुन्छ।
                    </p>
                </section>

                {/* 5. Haiku & Gazal */}
                <section>
                    <h2>५. हाइकु र गजलको प्रभाव</h2>
                    <p>
                        पछिल्लो समयमा जापानी शैलीको 'हाइकु' र फारसी शैलीको 'गजल' नेपाली साहित्यमा अत्यन्त लोकप्रिय भएको छ।
                        मोतीराम भट्टले भित्र्याएको गजल आज युवा पुस्ताको ढुकढुकी बनेको छ। थोरै शब्दमा धेरै भन्न सक्ने खुबी नै यिनीहरूको विशेषता हो।
                    </p>
                </section>

                {/* FAQ Section */}
                <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '2px solid var(--accent-gold)' }}>
                    <h2 style={{ marginBottom: '24px' }}>कविता सम्बन्धी प्रश्नोत्तर (FAQ)</h2>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>१. कवितामा 'विम्ब' भनेको के हो?</h3>
                        <p>विम्ब (Image) भनेको शब्दहरू मार्फत पाठकको मनमा चित्र कोर्ने कला हो। जस्तै: "घामको झुल्का" ले आशाको विम्ब दिन्छ।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>२. गजल र कवितामा के फरक छ?</h3>
                        <p>गजलमा 'रदिफ' र 'काफिया' को नियम हुन्छ र यो शेरहरूमा लेखिन्छ। कविता स्वतन्त्र हुन्छ वा छन्दमा हुन्छ।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>३. नेपाली साहित्यका प्रमुख महिला कविहरू को हुन्?</h3>
                        <p>पारिजात (विष्णु कुमारी वाइवा), कुन्ता शर्मा, तोया गुरुङ, र वानिरा गिरी प्रमुख महिला हस्ताक्षर हुन्।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>४. छन्द कविता कसरी लेख्ने?</h3>
                        <p>छन्द कविता लेख्न गण, मात्रा, र यतिको ज्ञान हुनुपर्छ। यो पिंगल शास्त्रको नियममा आधारित हुन्छ।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>५. कविता विश्लेषणका आधारहरू के हुन्?</h3>
                        <p>मूल भाव, भाषा शैली, अलङ्कार, विम्ब, र लय विधानको आधारमा कविताको विश्लेषण गरिन्छ।</p>
                    </div>
                </section>

                {/* Internal Linking Box */}
                <section style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-paper)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>थप अन्वेषण</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/nepali-kavita-arth" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 600 }}>
                                सप्रसंग व्याख्या कसरी लेख्ने? &rarr;
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/poems" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 600 }}>
                                नेपाली कविता संग्रह (Poems Collection) &rarr;
                            </Link>
                        </li>
                        <li>
                            <Link to="/nepali-sahitya" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 600 }}>
                                नेपाली साहित्यको इतिहास &rarr;
                            </Link>
                        </li>
                    </ul>
                </section>
            </article>
        </div>
    );
};

export default NepaliKavita;
