import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

const HindiNepaliSahitya = () => {
    return (
        <div className="content-paper" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <SEO
                title="नेपाली साहित्य और कविता | Dr. Tilak Sarmah"
                description="नेपाली साहित्य और संस्कृति का विस्तृत परिचय। आधुनिक नेपाली कविता का अर्थ और डॉ. तिलक सरमाह की रचनाओं का विश्लेषण।"
                keywords="नेपाली साहित्य, नेपाली कविता, नेपाली कविता का अर्थ, साहित्य और संस्कृति, आधुनिक नेपाली साहित्य, Nepali Sahitya in Hindi"
                publishedTime="2026-02-16T00:00:00+05:30"
                article={true}
                hreflangs={[
                    { lang: "ne", path: "/nepali-sahitya" },
                    { lang: "as", path: "/as/nepali-sahitya" },
                    { lang: "en", path: "/en/nepali-literature" }
                ]}
            />
            <header style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', color: 'var(--primary-maroon)', marginBottom: '16px' }}>
                    नेपाली साहित्य: एक परिचय
                </h1>
                <p className="nepali-content" style={{ fontSize: '20px', fontWeight: '500' }}>
                    हिमालय की गोद में पनपा <strong>नेपाली साहित्य</strong> भारतीय उपमहाद्वीप की सांस्कृतिक धरोहर का एक अभिन्न अंग है।
                </p>
            </header>

            <article className="nepali-content">
                <section>
                    <h2>१. नेपाली साहित्य का ऐतिहासिक परिप्रेक्ष्य</h2>
                    <p>
                        नेपाली भाषा और साहित्य का इतिहास अत्यंत प्राचीन है। यह संस्कृत से जन्मी एक आर्य भाषा है। भानुभक्त आचार्य की रामायण ने इसे जन-जन तक पहुँचाया।
                        आज नेपाली साहित्य में आधुनिकता और परंपरा का अद्भुत संगम देखने को मिलता है।
                    </p>
                </section>

                <section>
                    <h2>२. आधुनिक नेपाली कविता</h2>
                    <p>
                        <strong>नेपाली कविता</strong> का भाव पक्ष अत्यंत प्रबल है। लक्ष्मीप्रसाद देवकोटा जैसे महाकवि ने इसे विश्व स्तर पर पहचान दिलाई।
                        समकालीन कवि जीवन के संघर्ष, प्रेम, और अस्तित्ववाद को अपनी कविताओं का विषय बनाते हैं।
                    </p>
                    <p>
                        "साहित्य समाज का दर्पण है" - यह उक्ति नेपाली संदर्भ में भी उतनी ही सटीक बैठती है।
                    </p>
                </section>

                <section>
                    <h2>३. डॉ. तिलक सरमाह का योगदान</h2>
                    <p>
                        असम के तेजपुर से संबंध रखने वाले <strong>डॉ. तिलक सरमाह</strong> नेपाली और असमिया साहित्य के बीच एक सेतु का काम करते हैं।
                        उनकी रचनाओं में भारतीय संस्कृति की मूल चेतना विद्यमान है।
                    </p>
                </section>

                {/* FAQ Section */}
                <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '2px solid var(--accent-gold)' }}>
                    <h2 style={{ marginBottom: '24px' }}>अक्सर पूछे जाने वाले प्रश्न (FAQ)</h2>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>१. क्या नेपाली और हिंदी साहित्य में समानता है?</h3>
                        <p>जी हाँ, दोनों भाषाओं की लिपि देवनागरी है और व्याकरण में भी काफी समानता है। प्रेमचंद और समकालीन नेपाली साहित्यकारों के लेखन में सामाजिक यथार्थवाद का समान प्रभाव देखा जा सकता है।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>२. हिंदी पाठकों के लिए सर्वश्रेष्ठ नेपाली पुस्तक कौन सी है?</h3>
                        <p>महाकवि देवकोटा की <strong>'मुनामदन'</strong> सबसे लोकप्रिय है। इसका हिंदी अनुवाद आसानी से उपलब्ध है और यह प्रेम और त्याग की एक अद्भुत गाथा है।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>३. नेपाली साहित्य के 'शेक्सपियर' किसे कहा जाता है?</h3>
                        <p>लक्ष्मीप्रसाद देवकोटा को उनकी बहुमुखी प्रतिभा के कारण अक्सर यह उपाधि दी जाती है। उन्होंने महाकाव्य, खंडकाव्य, निबंध और नाटक सभी विधाओं में उत्कृष्ट रचनाएँ की हैं।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>४. भारत में नेपाली साहित्य की क्या स्थिति है?</h3>
                        <p>नेपाली भारत की आठवीं अनुसूची में शामिल 22 भाषाओं में से एक है। दार्जिलिंग, सिक्किम और असम में नेपाली साहित्य का एक बहुत बड़ा और समृद्ध इतिहास रहा है।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>५. डॉ. तिलक सरमाह का मुख्य शोध कार्य क्या है?</h3>
                        <p>डॉ. सरमाह ने असमिया और नेपाली लोक-संस्कृति के तुलनात्मक अध्ययन पर काम किया है। उनकी कविताएँ पूर्वोत्तर भारत की साझी विरासत को दर्शाती हैं।</p>
                    </div>
                </section>

                <section style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-paper)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}>
                    <h3>और पढ़ें</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/nepali-sahitya" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline' }}>
                                नेपाली भाषा में मूल लेख (Original in Nepali)
                            </Link>
                        </li>
                        <li>
                            <Link to="/en/nepali-literature" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline' }}>
                                Read in English
                            </Link>
                        </li>
                    </ul>
                </section>
            </article>
        </div>
    );
};

export default HindiNepaliSahitya;
