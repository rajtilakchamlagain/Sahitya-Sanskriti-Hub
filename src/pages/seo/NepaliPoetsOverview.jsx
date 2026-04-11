import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

const NepaliPoetsOverview = () => {
    return (
        <div className="content-paper" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <SEO
                title="प्रमुख नेपाली कविहरू | Famous Nepali Poets Biography"
                description="भानुभक्त, देवकोटा, लेखनाथ, पारिजात र अन्य महान नेपाली कविहरूको संक्षिप्त जीवनी र मुख्य कृतिहरूको सङ्ग्रह।"
                keywords="नेपाली कविहरू, Nepali Poets, भानुभक्त आचार्य, लक्ष्मीप्रसाद देवकोटा, पारिजात, माधव घिमिरे"
                publishedTime="2026-02-17T00:00:00+05:30"
                article={true}
            />

            <header style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '38px', color: 'var(--primary-maroon)', marginBottom: '16px' }}>
                    नेपाली साहित्यका नक्षत्रहरू (प्रमुख कवि)
                </h1>
                <p className="nepali-content" style={{ fontSize: '18px', fontWeight: '500' }}>
                    जसले शब्दको माध्यमबाट समाज र चेतनालाई नयाँ दिशा दिए, ती महान स्रष्टाहरूको संक्षिप्त परिचय।
                </p>
            </header>

            <article className="nepali-content">
                <div className="poet-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>

                    {/* Bhanubhakta */}
                    <div className="poetry-card" style={{ padding: '24px' }}>
                        <h3 style={{ color: 'var(--primary-maroon)', marginBottom: '8px' }}>१. भानुभक्त आचार्य (१८१४–१८६८)</h3>
                        <p><strong>उपाधि:</strong> आदिकवि</p>
                        <p><strong>विशेषता:</strong> नेपाली भाषामा रामायणको अनुवाद, भाषिक एकीकरण।</p>
                        <p><strong>प्रमुख कृति:</strong> रामायण, वधूशिक्षा, भक्तमाला।</p>
                    </div>

                    {/* Laxmi Prasad Devkota */}
                    <div className="poetry-card" style={{ padding: '24px' }}>
                        <h3 style={{ color: 'var(--primary-maroon)', marginBottom: '8px' }}>२. लक्ष्मीप्रसाद देवकोटा (१९०९–१९५९)</h3>
                        <p><strong>उपाधि:</strong> महाकवि</p>
                        <p><strong>विशेषता:</strong> स्वच्छन्दतावाद, मानवतावाद, र आशु कवित्व।</p>
                        <p><strong>प्रमुख कृति:</strong> मुनामदन, शाकुन्तल, पागल (कविता)।</p>
                    </div>

                    {/* Lekhnath Paudyal */}
                    <div className="poetry-card" style={{ padding: '24px' }}>
                        <h3 style={{ color: 'var(--primary-maroon)', marginBottom: '8px' }}>३. लेखनाथ पौड्याल (१८८५–१९६६)</h3>
                        <p><strong>उपाधि:</strong> कविशिरोमणि</p>
                        <p><strong>विशेषता:</strong> शास्त्रीय छन्द, परिष्कृत शैली, आध्यात्मिक चेतना।</p>
                        <p><strong>प्रमुख कृति:</strong> तरुण तपसी, ऋतुविचार, बुद्धि विनोद।</p>
                    </div>

                    {/* Parijat */}
                    <div className="poetry-card" style={{ padding: '24px' }}>
                        <h3 style={{ color: 'var(--primary-maroon)', marginBottom: '8px' }}>४. पारिजात (१९३७–१९९३)</h3>
                        <p><strong>वास्तविक नाम:</strong> विष्णु कुमारी वाइवा</p>
                        <p><strong>विशेषता:</strong> विसंगतिवाद, शून्यवाद, र प्रगतिशील चिन्तन।</p>
                        <p><strong>प्रमुख कृति:</strong> शिरीषको फूल (उपन्यास), मानुषी।</p>
                    </div>

                    {/* Madhav Prasad Ghimire */}
                    <div className="poetry-card" style={{ padding: '24px' }}>
                        <h3 style={{ color: 'var(--primary-maroon)', marginBottom: '8px' }}>५. माधवप्रसाद घिमिरे (१९१९–२०२०)</h3>
                        <p><strong>उपाधि:</strong> राष्ट्रकवि</p>
                        <p><strong>विशेषता:</strong> राष्ट्रप्रेम, प्रकृति प्रेम, र गीति लय।</p>
                        <p><strong>प्रमुख कृति:</strong> गौरी, मालती मङ्गले, राष्ट्रनिर्माता।</p>
                    </div>

                    {/* Gopal Prasad Rimal */}
                    <div className="poetry-card" style={{ padding: '24px' }}>
                        <h3 style={{ color: 'var(--primary-maroon)', marginBottom: '8px' }}>६. गोपालप्रसाद रिमाल (१९१८–१९७३)</h3>
                        <p><strong>उपाधि:</strong> आधुनिक कवि / गद्य कविताका प्रवर्तक</p>
                        <p><strong>विशेषता:</strong> क्रान्तिकारी चेतना, विद्रोह।</p>
                        <p><strong>प्रमुख कृति:</strong> आमाको सपना, एक दिन एक पटक।</p>
                    </div>

                </div>

                <section style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-paper)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>सम्बन्धित लिङ्कहरू</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/nepali-kavita" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 600 }}>
                                नेपाली कविता संग्रह &rarr;
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/modern-nepali-kavita" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 600 }}>
                                आधुनिक नेपाली कविहरू &rarr;
                            </Link>
                        </li>
                    </ul>
                </section>
            </article>
        </div>
    );
};

export default NepaliPoetsOverview;
