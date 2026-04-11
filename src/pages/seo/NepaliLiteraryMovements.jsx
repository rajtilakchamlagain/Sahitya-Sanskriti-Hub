import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

const NepaliLiteraryMovements = () => {
    return (
        <div className="content-paper" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <SEO
                title="नेपाली साहित्यिक आन्दोलनहरू | Literary Movements in Nepal"
                description="तेस्रो आयाम, झर्रोवादी आन्दोलन, र राल्फा आन्दोलन। नेपाली साहित्यलाई परिवर्तन गर्ने ऐतिहासिक अभियानहरूको जानकारी।"
                keywords="नेपाली साहित्यिक आन्दोलन, Tesro Aayam, Ralfa Movement, Boot Polish Movement, Nepali Literature History"
                publishedTime="2026-02-17T00:00:00+05:30"
                article={true}
            />

            <header style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '38px', color: 'var(--primary-maroon)', marginBottom: '16px' }}>
                    नेपाली साहित्यका प्रमुख आन्दोलनहरू
                </h1>
                <p className="nepali-content" style={{ fontSize: '18px', fontWeight: '500' }}>
                    समय-समयमा आएका साहित्यिक आन्दोलनले नेपाली साहित्यको धार परिवर्तन गरेका छन्। यहाँ प्रमुख अभियानहरूको चर्चा गरिएको छ।
                </p>
            </header>

            <article className="nepali-content">
                <section>
                    <h2>१. झर्रोवादी आन्दोलन (Jharrobad)</h2>
                    <p>
                        <strong>वर्ष:</strong> २०१२ साल<br />
                        <strong>केन्द्र:</strong> बनारस र काठमाडौँ<br />
                        <strong>प्रमुख हस्ती:</strong> बालकृष्ण पोखरेल, तारानाथ शर्मा, बल्लभमणि दाहाल।<br />
                        <strong>उद्देश्य:</strong> नेपाली भाषामा घुसेका अनावश्यक संस्कृत र हिन्दी शब्दहरू हटाएर ठेट (झर्रो) नेपाली शब्द प्रयोगमा जोड दिनु।
                    </p>
                </section>

                <section>
                    <h2>२. तेस्रो आयाम (Tesro Aayam)</h2>
                    <p>
                        <strong>वर्ष:</strong> २०२० साल (दार्जिलिङ)<br />
                        <strong>प्रवर्तक:</strong> इन्द्रबहादुर राई, बैरागी काइँला, ईश्वर बल्लभ (इ-बै-ई)।<br />
                        <strong>उद्देश्य:</strong> साहित्यमा 'लम्बाइ' र 'चौडाइ' मात्र भयो, अब 'गहिराइ' (तेस्रो आयाम) पनि चाहिन्छ भन्ने मान्यता। यसले वस्तुपरक लेखन र बौद्धिकतामा जोड दियो।
                    </p>
                </section>

                <section>
                    <h2>३. राल्फा आन्दोलन (Ralfa Movement)</h2>
                    <p>
                        <strong>वर्ष:</strong> २०२३/२४ साल<br />
                        <strong>प्रमुख हस्ती:</strong> पारिजात, रामेश, रायन, मञ्जुल।<br />
                        <strong>उद्देश्य:</strong> स्थापित सामाजिक मूल्यमान्यता र परम्पराको विद्रोह। यो एउटा अराजक तर शशक्त सांस्कृतिक विद्रोह थियो। राल्फाले गीत र संगीतको माध्यमबाट चेतना फैलाउने काम गर्यो।
                    </p>
                </section>

                <section>
                    <h2>४. बूट पालिस आन्दोलन</h2>
                    <p>
                        <strong>वर्ष:</strong> २०३१ साल<br />
                        <strong>सन्दर्भ:</strong> काठमाडौँको न्युरोडमा कविहरूले बूट पालिस गरेर "साहित्यकारको आर्थिक अवस्था कमजोर छ तर स्वाभिमान उच्च छ" भन्ने सन्देश दिएका थिए। यो सांकेतिक विरोध थियो।
                    </p>
                </section>

                <section>
                    <h2>५. सडक कविता क्रान्ति</h2>
                    <p>
                        <strong>वर्ष:</strong> २०३६ साल<br />
                        <strong>उद्देश्य:</strong> बन्द कोठाबाट कवितालाई सडकमा ल्याउने अभियान। प्रजातन्त्रको माग गर्दै कविहरूले चोक-चोकमा कविता वाचन गरेका थिए।
                    </p>
                </section>

                <section style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-paper)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>सम्बन्धित लिङ्कहरू</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/modern-nepali-kavita" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 600 }}>
                                आधुनिक नेपाली कविता &rarr;
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
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

export default NepaliLiteraryMovements;
