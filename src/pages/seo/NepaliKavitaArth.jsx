import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import SummaryBox from '../../components/SummaryBox';

const NepaliKavitaArth = () => {
    return (
        <div className="content-paper" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <SEO
                title="नेपाली कविताको अर्थ र व्याख्या | Poem Analysis Guide"
                description="कुनै पनि नेपाली कविताको अर्थ कसरी लेख्ने? सप्रसंग व्याख्या गर्ने सरल तरिका। शब्दशक्ति, रस, र अलङ्कारको प्रयोग गरेर कविता विश्लेषण गर्ने विधि।"
                keywords="नेपाली कविताको अर्थ, Poem Meaning in Nepali, सप्रसंग व्याख्या, कविता विश्लेषण, शब्दशक्ति, रस र अलङ्कार, Poem Analysis Guide"
                publishedTime="2026-02-17T00:00:00+05:30"
                article={true}
            />

            <header style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', color: 'var(--primary-maroon)', marginBottom: '16px' }}>
                    नेपाली कविताको अर्थ र व्याख्या
                </h1>

                <SummaryBox
                    title="कविता विश्लेषणको विधि"
                    definition="कविताको गहिराइ नाप्ने कला नै अर्थ र व्याख्या हो। यसमा शब्दशक्ति (अभिधा, लक्षणा, व्यञ्जना) र रस-अलङ्कारको प्रयोग बुझ्न आवश्यक छ।"
                    takeaway="सहि व्याख्याले कविताको मर्मलाई उजागर गर्छ र पाठकलाई कविको भावनासँग जोड्छ।"
                />

                <p className="nepali-content" style={{ fontSize: '20px', fontWeight: '500' }}>
                    कविताको गहिराइ बुझ्न शब्दको मात्र होइन, भावको पनि ज्ञान हुनुपर्छ। यहाँ हामी कविता विश्लेषणका शास्त्रीय र आधुनिक विधिहरू, सप्रसंग व्याख्या गर्ने ढाँचा, र समीक्षात्मक उत्तर लेखन सिक्नेछौं।
                </p>
            </header>

            <article className="nepali-content">
                {/* 1. Sabda Shakti */}
                <section>
                    <h2>१. शब्दशक्ति: अभिधा, लक्षणा र व्यञ्जना</h2>
                    <p>
                        कविताको अर्थ बुझ्न <strong>शब्दशक्ति</strong> को ज्ञान अपरिहार्य छ।
                    </p>
                    <ul>
                        <li><strong>अभिधा (Abidha):</strong> शब्दको सोझो वा कोशगत अर्थ (जस्तै: गाई = एक जनावर)।</li>
                        <li><strong>लक्षणा (Lakshana):</strong> शब्दको मुख्य अर्थ छोडेर जोडिने अर्को अर्थ (जस्तै: उ गाई हो = उ सोझो छ)।</li>
                        <li><strong>व्यञ्जना (Vyanjana):</strong> सन्दर्भ अनुसार लाग्ने विशेष अर्थ (जस्तै: घाम डुब्यो = घर जाने बेला भयो / पूजा गर्ने बेला भयो)।</li>
                    </ul>
                </section>

                {/* 2. Rasa and Alankar */}
                <section>
                    <h2>२. रस र अलङ्कारको प्रयोग</h2>
                    <p>
                        कवितालाई सुन्दर बनाउने तत्व <strong>अलङ्कार</strong> हो भने, पाठकलाई आनन्द दिने तत्व <strong>रस</strong> हो।
                        अनुप्रास र उपमा अलङ्कारको प्रयोगले कवितामा संगीतात्मकता थप्छ। त्यस्तै, शृङ्गार, वीर, र करुण रसले पाठकको मन छुन्छ।
                    </p>
                </section>

                {/* 3. Saprastanga Vyakhya Steps */}
                <section>
                    <h2>३. सप्रसंग व्याख्या गर्ने तरिका</h2>
                    <p>
                        कुनै पनि पद्यांशको सप्रसंग व्याख्या गर्दा निम्न चरणहरू अपनाउनुपर्छ:
                    </p>
                    <ol>
                        <li><strong>सन्दर्भ (Context):</strong> कुन कविता, कवि र पुस्तकबाट लिइएको हो?</li>
                        <li><strong>प्रसंग (Contextual Meaning):</strong> कुन सन्दर्भमा यो भनाइ आएको हो?</li>
                        <li><strong>व्याख्या (Explanation):</strong> विस्तृत अर्थ, विम्ब र प्रतीकको विश्लेषण।</li>
                        <li><strong>विशेष प्राप्ति (Critical Note):</strong> भाषा शैली र मूल सन्देश।</li>
                    </ol>
                </section>

                {/* 4. Critical Analysis */}
                <section>
                    <h2>४. समीक्षात्मक विश्लेषण (Critical Analysis)</h2>
                    <p>
                        समीक्षा गर्दा कविको उद्देश्य र सामाजिक परिवेशलाई जोडेर हेर्नुपर्छ।
                        के कविले समाजको यथार्थ चित्रण गरेका छन्? वा उनी कल्पनाको संसारमा छन्? यसको तर्कपूर्ण उत्तर दिनु नै समीक्षा हो।
                    </p>
                </section>

                {/* 5. Comparative Study */}
                <section>
                    <h2>५. तुलनात्मक अध्ययन</h2>
                    <p>
                        एउटै विषयमा दुई फरक कविले कसरी लेखेका छन्? जस्तै: देवकोटाको 'पागल' र रिमालको 'आमाको सपना' बीचको क्रान्तिकारी चेतनाको तुलना।
                        यसले तपाइँको उत्तरलाई वजनदार बनाउँछ।
                    </p>
                </section>

                {/* FAQ Section */}
                <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '2px solid var(--accent-gold)' }}>
                    <h2 style={{ marginBottom: '24px' }}>व्याख्या सम्बन्धी प्रश्नोत्तर (FAQ)</h2>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>१. भाव विस्तार र सप्रसंग व्याख्यामा के फरक छ?</h3>
                        <p>भाव विस्तारमा केवल अर्थ र सन्देशमा जोड दिइन्छ, तर सप्रसंग व्याख्यामा 'कुन पाठबाट लिइएको हो' भन्ने सन्दर्भ खुलाउनु अनिवार्य हुन्छ।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>२. कविताको 'मूल भाव' कसरी पत्ता लगाउने?</h3>
                        <p>कविता पूरै पढेपछि कविले दिन खोजेको मुख्य सन्देश वा केन्द्रीय विचार नै मूल भाव हो।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>३. परीक्षामा कति लामो व्याख्या लेख्ने?</h3>
                        <p>सामान्यतया ५ अंकको प्रश्नका लागि १५०-२०० शब्दको व्याख्या उपयुक्त हुन्छ।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>४. प्रतीक (Symbol) भनेको के हो?</h3>
                        <p>कुनै अमूर्त कुरालाई बुझाउन प्रयोग गरिने मूर्त वस्तु नै प्रतीक हो। जस्तै: 'बाघ' क्रुरताको प्रतीक हुन सक्छ।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>५. शब्द चयनको महत्व के छ?</h3>
                        <p>सहि शब्द चयनले भावनालाई शशक्त बनाउँछ। 'मृत्यु' र 'देहावसान' उस्तै अर्थ लागे पनि प्रयोगको सन्दर्भ फरक हुन्छ।</p>
                    </div>
                </section>

                {/* Internal Linking Box */}
                <section style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-paper)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>उपयोगी लिङ्कहरू</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/nepali-kavita" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 600 }}>
                                नेपाली कविताका उदाहरणहरू &rarr;
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/nepali-sahitya" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 600 }}>
                                साहित्य सिद्धान्त र इतिहास &rarr;
                            </Link>
                        </li>
                        <li>
                            <Link to="/author/dr-tilak-sarmah" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline', fontWeight: 600 }}>
                                डा. तिलक सरमाहका समालोचनाहरू &rarr;
                            </Link>
                        </li>
                    </ul>
                </section>
            </article>
        </div>
    );
};

export default NepaliKavitaArth;
