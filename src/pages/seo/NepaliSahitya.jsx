import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import SummaryBox from '../../components/SummaryBox';

const NepaliSahitya = () => {
    return (
        <div className="content-paper" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <SEO
                title="नेपाली साहित्य | विस्तृत परिचय र विश्लेषण | Comprehensive Guide"
                description="नेपाली साहित्यको इतिहास, विकासक्रम र आधुनिक प्रवृत्तिहरूको विस्तृत अध्ययन। नेपाली कविता, कथा र नाटकहरूको गहन विश्लेषण र समालोचना।"
                keywords="नेपाली साहित्य, नेपाली साहित्यको इतिहास, भानुभक्त आचार्य, लक्ष्मीप्रसाद देवकोटा, नेपाली कथा, नेपाली नाटक, Nepali Literature History"
                publishedTime="2026-02-17T00:00:00+05:30"
                article={true}
                hreflangs={[
                    { lang: "hi", path: "/hi/nepali-sahitya" },
                    { lang: "as", path: "/as/nepali-sahitya" },
                    { lang: "en", path: "/en/nepali-literature" }
                ]}
            />

            <header style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', color: 'var(--primary-maroon)', marginBottom: '16px' }}>
                    नेपाली साहित्य: एक विस्तृत परिचय
                </h1>

                <SummaryBox
                    title="नेपाली साहित्य के हो?"
                    definition="नेपाली साहित्य भन्नाले नेपाली भाषामा लेखिएका सबै साहित्यिक कृतिहरू — कविता, कथा, उपन्यास, निबन्ध, र नाटकहरूको समष्टिगत रूपलाई बुझिन्छ। यसको जरो संस्कृत र लोक साहित्यमा गाडिएको छ।"
                    takeaway="भानुभक्त आचार्य देखि आधुनिक डायस्पोरा लेखन सम्म, नेपाली साहित्यले समाजको ऐना र चेतनाको संवाहकको भूमिका खेलेको छ।"
                />

                <p className="nepali-content" style={{ fontSize: '20px', fontWeight: '500' }}>
                    <strong>नेपाली साहित्य</strong> हिमालयको काखमा हुर्किएको एक समृद्ध र पुरानो परम्परा हो। यस लेखमा हामी यसको इतिहास, प्रमुख विधा, र कालखण्डहरूको विस्तृत अध्ययन गर्नेछौं। यदि तपाईँ नेपाली साहित्यको विद्यार्थी वा अनुसन्धाता हुनुहुन्छ भने, यो मार्गनिर्देशन तपाईँका लागि हो।
                </p>
            </header>

            <article className="nepali-content">
                {/* 1. Historical Background */}
                <section>
                    <h2>१. नेपाली साहित्यको ऐतिहासिक पृष्ठभूमि</h2>
                    <p>
                        नेपाली साहित्यको इतिहासलाई मुख्यतया तीन कालखण्डमा विभाजन गर्न सकिन्छ।
                        <strong>प्राथमिक काल</strong> मा वीरगाथा र भक्तिधाराको बाहुल्यता थियो। सुवानन्द दासको 'पृथ्वीनारायण' कविता यसको उत्कृष्ट नमुना हो।
                        यस युगमा साहित्य राजा-महाराजाहरूको स्तुति र धार्मिक भजनमा सीमित थियो।
                    </p>
                </section>

                {/* 2. The Golden Era of Motiram & Bhanubhakta */}
                <section>
                    <h2>२. माध्यमिक काल: भानुभक्त र मोतीरामको युग</h2>
                    <p>
                        <strong>भानुभक्त आचार्य</strong> (आदिकवि) ले संस्कृतको रामायणलाई सरल नेपाली भाषामा अनुवाद गरेर साहित्यलाई जनस्तरमा पुर्‍याए।
                        त्यसपछि <strong>मोतीराम भट्ट</strong> ले शृङ्गारिक धारा भित्र्याए र भानुभक्तको जीवनी प्रकाशन गरेर समालोचनाको जग बसाले।
                        यो युग भाषिक एकीकरण र साहित्यिक जागरणको युग थियो।
                    </p>
                </section>

                {/* 3. Modern Era & Advancements */}
                <section>
                    <h2>३. आधुनिक काल र नयाँ प्रयोगहरू</h2>
                    <p>
                        वि.सं. १९९१ मा 'शारदा' पत्रिकाको प्रकाशनसँगै आधुनिक काल सुरु भयो।
                        यस युगमा <strong>लक्ष्मीप्रसाद देवकोटा</strong>, <strong>सिद्धिचरण श्रेष्ठ</strong> र <strong>गोपालप्रसाद रिमाल</strong> जस्ता हस्तीहरूले स्वच्छन्दतावाद र क्रान्तिकारी चेतनाको विगुल फुके।
                        मनोविश्लेषणात्मक कथा र अस्तित्ववादी उपन्यासहरूको लेखन पनि यसै समयमा फस्टायो।
                    </p>
                </section>

                {/* 4. Genres: Poetry, Stories, Novels */}
                <section>
                    <h2>४. प्रमुख विधा: कविता, कथा र उपन्यास</h2>
                    <p>
                        नेपाली साहित्यमा कविता विधा सबैभन्दा सशक्त छ। तर, गुरुप्रसाद मैनालीका सामाजिक कथाहरू र विश्वेश्वर प्रसाद कोइरालाका मनोवैज्ञानिक उपन्यासहरूले गद्य साहित्यलाई पनि उत्तिकै उचाइमा पुर्‍याएका छन्।
                        नाटक र निबन्धमा पनि बालकृष्ण सम र शंकर लामिछाने जस्ता महारथीहरूको योगदान अतुलनीय छ।
                    </p>
                </section>

                {/* 5. Diaspora Literature */}
                <section>
                    <h2>५. डायस्पोरा (प्रवासी) साहित्य</h2>
                    <p>
                        आज नेपाली साहित्य नेपालको सिमाना नाघेर विश्वव्यापी बनेको छ। दार्जिलिङ, सिक्किम, र असमदेखि लिएर अमेरिका र युरोपसम्म नेपाली स्रष्टाहरूले कलम चलाइरहेका छन्।
                        प्रवासी नेपाली साहित्यले "पहिचानको खोजी" र "गृह-विछोडको पीडा" लाई मुख्य विषय बनाएको छ।
                    </p>
                </section>

                {/* FAQ Section */}
                <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '2px solid var(--accent-gold)' }}>
                    <h2 style={{ marginBottom: '24px' }}>प्रायः सोधिने प्रश्नहरू (FAQ)</h2>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>१. नेपाली साहित्यका आदिकवि को हुन्?</h3>
                        <p>नेपाली साहित्यका आदिकवि <strong>भानुभक्त आचार्य</strong> हुन्। उनले रामायणलाई नेपाली भाषामा अनुवाद गरेर ठूलो योगदान दिए।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>२. 'मुनामदन' कसको कृति हो?</h3>
                        <p>'मुनामदन' महाकवि <strong>लक्ष्मीप्रसाद देवकोटा</strong> द्वारा रचित खण्डकाव्य हो, जुन नेपाली साहित्यको सबैभन्दा लोकप्रिय कृति मानिन्छ।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>३. गद्य र पद्य साहित्यमा के फरक छ?</h3>
                        <p>लय र छन्दमा लेखिएको साहित्य 'पद्य' (जस्तै: कविता, महाकाव्य) हो भने, व्याकरणिक संरचना र स्वतन्त्र प्रवाहमा लेखिएको साहित्य 'गद्य' (जस्तै: कथा, उपन्यास) हो।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>४. आधुनिक नेपाली कथाका प्रवर्तक को हुन्?</h3>
                        <p>आधुनिक नेपाली कथाका प्रवर्तक <strong>गुरुप्रसाद मैनाली</strong> हुन्। उनको 'नासो' कथासंग्रह अत्यन्त चर्चित छ।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>५. नेपाली साहित्यको अध्ययन कसरी सुरु गर्ने?</h3>
                        <p>सुरुवात गर्नका लागि मुनामदन, घुम्ने मेचमाथि अन्धो मान्छे, र नासो जस्ता सरल र उत्कृष्ट कृतिहरू पढ्नुहोस्।</p>
                    </div>
                </section>

                {/* Internal Linking Box */}
                <section style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-paper)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>सम्बन्धित विषयहरू</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/nepali-kavita" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 600 }}>
                                नेपाली कविताको आधुनिक प्रवृत्ति &rarr;
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/nepali-kavita-arth" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 600 }}>
                                कविताको अर्थ र विश्लेषण विधी &rarr;
                            </Link>
                        </li>
                        <li>
                            <Link to="/culture" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 600 }}>
                                नेपाली संस्कृति र परम्परा &rarr;
                            </Link>
                        </li>
                    </ul>
                </section>
            </article>
        </div>
    );
};

export default NepaliSahitya;
