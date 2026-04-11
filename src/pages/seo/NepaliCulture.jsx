import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import SummaryBox from '../../components/SummaryBox';

const NepaliCulture = () => {
    return (
        <div className="content-paper" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <SEO
                title="नेपाली संस्कृति र परम्परा | Culture, Festivals & Heritage"
                description="नेपाली संस्कृति, चाडपर्व, र मौलिक परम्पराहरूको खोजी। भाषा, भेषभूषा, दशैं तिहार र सामाजिक मूल्यमान्यताहरूको विस्तृत अध्ययन।"
                keywords="नेपाली संस्कृति, Nepali Culture, दशैं, तिहार, छठ, नेपाली चाडपर्व, संस्कार र संस्कृति, Culture of Nepal"
                publishedTime="2026-02-17T00:00:00+05:30"
                article={true}
            />

            <header style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', color: 'var(--primary-maroon)', marginBottom: '16px' }}>
                    नेपाली संस्कृति: परम्परा र पहिचान
                </h1>

                <SummaryBox
                    title="संस्कृति भनेको के हो?"
                    definition="कुनै पनि समाजको जीवनशैली, चाडपर्व, रीतिरिवाज, र मूल्यमान्यताहरूको समष्टिलाई संस्कृति भनिन्छ। नेपाली संस्कृति विविधतामा एकताको उत्कृष्ट नमुना हो।"
                    takeaway="हाम्रो संस्कृतिले हामीलाई 'को हौं' भनेर चिनाउँछ। यसको संरक्षण र पुस्तान्तरण आजको मुख्य आवश्यकता हो।"
                />

                <p className="nepali-content" style={{ fontSize: '20px', fontWeight: '500' }}>
                    नेपाल बहुजातीय र बहुभाषिक मुलुक हो। यहाँका हरेक समुदायसँग आफ्नै मौलिक परम्परा र चाडपर्वहरू छन्। यस लेखमा हामी नेपाली संस्कृतिका विविध पक्षहरूको चर्चा गर्नेछौं।
                </p>
            </header>

            <article className="nepali-content">
                {/* 1. Unity in Diversity */}
                <section>
                    <h2>१. विविधतामा एकता (Unity in Diversity)</h2>
                    <p>
                        नेपाल बहुजातीय, बहुभाषिक, र बहुसांस्कृतिक देश हो।
                        हिमाल, पहाड र तराईका आ-आफ्नै विशिष्ट रहनसहन छन्, तर सबै नेपाली "सयौं थुँगा फूलका हामी एउटै माला नेपाली" भन्ने भावनामा बाँधिएका छन्।
                        यो सहिष्णुता र सद्भाव विश्वकै लागि उदाहरण हो।
                    </p>
                </section>

                {/* 2. Major Festivals */}
                <section>
                    <h2>२. हाम्रा प्रमुख चाडपर्वहरू</h2>
                    <p>
                        नेपालीहरू उत्सवप्रेमी हुन्छन्। वर्षभरी नै यहाँ कुनै न कुनै चाड मनाइन्छ।
                    </p>
                    <ul>
                        <li><strong>दशैं (विजयादशमी):</strong> असत्यमाथि सत्यको विजय र पारिवारिक मिलनको पर्व।</li>
                        <li><strong>तिहार (दीपावली):</strong> काग, कुकुर, गाई, गोरु र दाजुभाइ पूजा गरिने प्रकृति प्रेमी पर्व।</li>
                        <li><strong>छठ:</strong> सूर्य भगवानको उपासना गरिने तराईको महान् चाड।</li>
                        <li><strong>ल्होसार:</strong> गुरुङ, तामाङ र शेर्पा समुदायले मनाउने नयाँ वर्ष।</li>
                    </ul>
                </section>

                {/* 3. Folk Culture */}
                <section>
                    <h2>३. लोक संस्कृति र संगीत</h2>
                    <p>
                        हाम्रो लोकगीत र लोकदोहोरीमा माटोको सुगन्ध पाइन्छ।
                        पालाम (लिम्बू), साकेला (राई), देउडा (सुदूरपश्चिम), र सेलो (तामाङ) जस्ता भाकाहरूले हाम्रो सांस्कृतिक पहिचान बोकेका छन्।
                        नौमती बाजा र पञ्चैबाजा नेपाली विवाह उत्सवका अभिन्न अंग हुन्।
                    </p>
                </section>

                {/* 4. Language & Identity */}
                <section>
                    <h2>४. भाषा, भेषभूषा र पहिचान</h2>
                    <p>
                        दौरा-सुरुवाल र गुन्यू-चोलो हाम्रो राष्ट्रिय पोशाक हुन्।
                        नेपाली भाषा सम्पर्क भाषा (Lingua Franca) को रूपमा रहे पनि, मैथिली, भोजपुरी, नेवारी, र गुरुङ जस्ता मातृभाषाहरू हाम्रो अमूल्य सम्पत्ति हुन्।
                    </p>
                </section>

                {/* 5. Modernization vs Tradition */}
                <section>
                    <h2>५. आधुनिकता र परम्पराको द्वन्द्व</h2>
                    <p>
                        विश्वव्यापीकरणको प्रभावले हाम्रा कतिपय मौलिक संस्कृतीहरू हराउने जोखिममा छन्।
                        तर, नयाँ पुस्ताले 'Cultural Renaissance' (सांस्कृतिक पुनर्जागरण) मार्फत यसलाई जोगाउन थालेको छ।
                        हामीले आधुनिक र वैज्ञानिक सोच अपनाउँदै आफ्नो जरा बिर्सनु हुँदैन।
                    </p>
                </section>

                {/* FAQ Section */}
                <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '2px solid var(--accent-gold)' }}>
                    <h2 style={{ marginBottom: '24px' }}>संस्कृति सम्बन्धी प्रश्नोत्तर (FAQ)</h2>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>१. नेपाललाई किन 'चाडपर्वहरूको देश' भनिन्छ?</h3>
                        <p>किनभने यहाँ विभिन्न जातजाति र धर्मका मानिसहरूले वर्षैभरी ५० भन्दा बढी चाडपर्वहरू हर्षोल्लासका साथ मनाउँछन्।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>२. 'वसुधैव कुटुम्बकम्' को अर्थ के हो?</h3>
                        <p>यसको अर्थ "सारा संसार नै मेरो परिवार हो" भन्ने हुन्छ, जुन नेपाली संस्कृतिको मूल दर्शन हो।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>३. देउडा गीत कहाँ प्रचलित छ?</h3>
                        <p>देउडा गीत र नाच नेपालको सुदूरपश्चिम र मध्यपश्चिम क्षेत्रमा अत्यन्त प्रचलित छ।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>४. कुमारी प्रथा भनेको के हो?</h3>
                        <p>कुमारी प्रथा नेवारी संस्कृतिमा जीवित देवीको रूपमा बालिकालाई पुज्ने परम्परा हो। यो विश्वकै अनौठो परम्परा मानिन्छ।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>५. हाम्रो संस्कृति कसरी जोगाउन सकिन्छ?</h3>
                        <p>आफ्नो भाषा बोल्ने, चाडपर्व मनाउने, र नयाँ पुस्तालाई यसबारे जानकारी दिने गरेमा संस्कृति जिवित रहन्छ।</p>
                    </div>
                </section>

                {/* Internal Linking Box */}
                <section style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-paper)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>सम्बन्धित सामग्री</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/nepali-sahitya" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 600 }}>
                                नेपाली साहित्य र समाज &rarr;
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/author/dr-tilak-sarmah" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 600 }}>
                                डा. तिलक सरमाहका सांस्कृतिक लेखहरू &rarr;
                            </Link>
                        </li>
                    </ul>
                </section>
            </article>
        </div>
    );
};

export default NepaliCulture;
