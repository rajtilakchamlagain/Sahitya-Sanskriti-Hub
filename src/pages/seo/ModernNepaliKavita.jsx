import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

const ModernNepaliKavita = () => {
    return (
        <div className="content-paper" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <SEO
                title="आधुनिक नेपाली कविता | Modern Nepali Poetry Trends"
                description="आधुनिक नेपाली कविताका विशेषताहरू, प्रयोगवादी धारा, र समकालीन कविहरूको योगदान। भूपि शेरचन देखि विप्लव ढकाल सम्मको यात्रा।"
                keywords="आधुनिक नेपाली कविता, Modern Nepali Poetry, भूपि शेरचन, प्रयोगवाद, समकालीन कविता, उत्तर-आधुनिकता"
                publishedTime="2026-02-17T00:00:00+05:30"
                article={true}
            />

            <header style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '38px', color: 'var(--primary-maroon)', marginBottom: '16px' }}>
                    आधुनिक नेपाली कविता: प्रयोग र प्रवृत्ति
                </h1>
                <p className="nepali-content" style={{ fontSize: '18px', fontWeight: '500' }}>
                    वि.सं. १९९१ पछि नेपाली कविताले नयाँ मोड लियो। गद्य शैली, विम्बहरूको प्रयोग र मनोविज्ञानको प्रवेशले कवितालाई क्लिष्ट तर अर्थपूर्ण बनायो।
                </p>
            </header>

            <article className="nepali-content">
                <section>
                    <h2>१. आधुनिकताको सुरुवात</h2>
                    <p>
                        'शारदा' पत्रिकाको प्रकाशनसँगै नेपाली कवितामा आधुनिकता भित्रियो।
                        <strong>रिमाल</strong> को "आमाको सपना" र <strong>देवकोटा</strong> को "पागल" कविताले यस युगको शंखघोष गरे।
                        यस समयका कविहरूले परम्परागत छन्दलाई तोडेर गद्यमा भावना पोख्न थाले।
                    </p>
                </section>

                <section>
                    <h2>२. प्रयोगवादी धारा (Experimentalism)</h2>
                    <p>
                        मोहन कोइराला, बैरागी काइँला, र ईश्वर बल्लभले 'तेस्रो आयाम' (Tesro Aayam) सुरु गरे।
                        उनीहरूले कवितालाई सपाट वर्णनबाट माथि उठाएर ठोस, वस्तुपरक र त्रिमितीय बनाउने प्रयास गरे।
                        यो धारा अलि बौद्धिक र जटिल मानिन्छ।
                    </p>
                </section>

                <section>
                    <h2>३. व्यंग्य र सरलता (भूपि शेरचनको युग)</h2>
                    <p>
                        प्रयोगवादको क्लिष्टताबाट वाक्क भएका पाठकहरूलाई <strong>भूपि शेरचन</strong> ले "घुम्ने मेचमाथि अन्धो मान्छे" दिएर राहत दिए।
                        उनका कविताहरू सरल, व्यंग्यात्मक र मुटु छुने खालका छन्।
                        "हल्लै हल्लाको देश" र "यो हल्लै हल्लाको देश हो" आज पनि उत्तिकै सान्दर्भिक छन्।
                    </p>
                </section>

                <section>
                    <h2>४. समकालीन कविता (Contemporary Poetry)</h2>
                    <p>
                        २०४६ सालको जनआन्दोलनपछि कवितामा समावेशी स्वरहरू सुनिन थाले।
                        महिला, दलित, जनजाति र मधेशी स्रष्टाहरूले पहिचानको मुद्दालाई कवितामा उतारेका छन्।
                        श्रवण मुकारुङको "बिसे नगर्चीको बयान" यसको सशक्त उदाहरण हो।
                    </p>
                </section>

                <section style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-paper)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>सम्बन्धित लिङ्कहरू</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/nepali-kavita" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 600 }}>
                                मूल पृष्ठ: नेपाली कविता &rarr;
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/nepali-literary-movements" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 600 }}>
                                नेपाली साहित्यिक आन्दोलनहरू &rarr;
                            </Link>
                        </li>
                    </ul>
                </section>
            </article>
        </div>
    );
};

export default ModernNepaliKavita;
