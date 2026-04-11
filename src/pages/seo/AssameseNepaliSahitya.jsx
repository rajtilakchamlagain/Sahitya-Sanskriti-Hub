import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

const AssameseNepaliSahitya = () => {
    return (
        <div className="content-paper" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <SEO
                title="নেপালী সাহিত্য আৰু সংস্কৃতি | Dr. Tilak Sarmah"
                description="নেপালী সাহিত্যৰ ইতিহাস আৰু আধুনিক কবিতাৰ বিশ্লেষণ। ড° তিলক শৰ্মাৰ ৰচনা আৰু নেপালী সংস্কৃতিৰ ওপৰত এক দৃষ্টিপাত।"
                keywords="নেপালী সাহিত্য, নেপালী কবিতা, নেপালী কবিতাৰ অৰ্থ, সাহিত্য আৰু সংস্কৃতি, ড° তিলক শৰ্মা, Assamese Nepali Literature"
                publishedTime="2026-02-16T00:00:00+05:30"
                article={true}
                hreflangs={[
                    { lang: "ne", path: "/nepali-sahitya" },
                    { lang: "hi", path: "/hi/nepali-sahitya" },
                    { lang: "en", path: "/en/nepali-literature" }
                ]}
            />
            <header style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', color: 'var(--primary-maroon)', marginBottom: '16px' }}>
                    নেপালী সাহিত্য আৰু সংস্কৃতি: এক চমু পৰিচয়
                </h1>
                <p className="nepali-content" style={{ fontSize: '20px', fontWeight: '500' }}>
                    অসমীয়া আৰু নেপালী সংস্কৃতিৰ মাজত এক গভীৰ সম্পৰ্ক আছে। এই প্ৰবন্ধত আমি নেপালী সাহিত্যৰ ঐশ্বৰ্যৰ বিষয়ে আলোচনা কৰিম।
                </p>
            </header>

            <article className="nepali-content">
                <section>
                    <h2>১. নেপালী সাহিত্যৰ ইতিহাস</h2>
                    <p>
                        নেপালী ভাষাৰ সাহিত্য সুপ্ৰাচীন। ভানুভক্ত আচাৰ্যৰ দ্বাৰা ৰচিত ৰামায়ণ নেপালী সাহিত্যৰ এক মাইলৰ খুঁটি।
                        অসমতো নেপালী সাহিত্যৰ চৰ্চা বহু দিন ধৰি চলি আহিছে।
                    </p>
                </section>

                <section>
                    <h2>২. আধুনিক কবিতা আৰু ইয়াৰ ধাৰা</h2>
                    <p>
                        বৰ্তমান সময়ৰ <strong>নেপালী কবিতা</strong>ত মানৱ জীৱনৰ সংগ্ৰাম আৰু প্ৰকৃতিৰ সৌন্দৰ্য দুয়োটা দেখিবলৈ পোৱা যায়।
                        কবিসকলে নিজৰ কাপেৰে সমাজৰ বাস্তৱ ছবি দাঙি ধৰিছে।
                    </p>
                </section>

                <section>
                    <h2>৩. ড° তিলক শৰ্মা আৰু তেখেতৰ অৱদান</h2>
                    <p>
                        তেজপুৰৰ বিশিষ্ট সাহিত্যিক <strong>ড° তিলক শৰ্মা</strong>ই অসমীয়া আৰু নেপালী দুয়োটা ভাষাতে সাহিত্য চৰ্চা কৰি আহিছে।
                        তেখেতৰ কবিতাত এক দৰ্শন আৰু আধ্যাত্মিক চেতনা বিৰাজমান।
                    </p>
                </section>

                {/* FAQ Section */}
                <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '2px solid var(--accent-gold)' }}>
                    <h2 style={{ marginBottom: '24px' }}>সঘনাই সোধা প্ৰশ্নসমূহ (FAQ)</h2>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>১. অসমীয়া আৰু নেপালী সাহিত্যৰ মাজত কি সাদৃশ্য আছে?</h3>
                        <p>দুয়োটা ভাষাৰেই মূল উৎস সংস্কৃত। শংকৰদেৱ আৰু ভানুভক্তৰ ভক্তি ধাৰাৰ কবিতাত যথেষ্ট মিল দেখা যায়। অসমৰ মাটিত ৰচিত নেপালী সাহিত্যত ব্ৰহ্মপুত্ৰ আৰু পাহাৰৰ কথা একেলগে পোৱা যায়।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>২. অসমৰ প্ৰখ্যাত নেপালী সাহিত্যিক কোনসকল?</h3>
                        <p>হৰিভক্ত কটুৱাল, লীলা বাহাদুৰ ছেত্ৰী, আৰু ড° তিলক শৰ্মা অন্যতম। তেখেতসকলৰ ৰচনাই অসমীয়া সাহিত্যৰ ভঁৰালো চহকী কৰিছে।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>৩. নেপালী সাহিত্য পঢ়িবলৈ কোনখন কিতাপ ভাল?</h3>
                        <p>'মনামদন' আৰু 'বঁসাই' (উপন্যাস) পঢ়িবলৈ অতি সহজ আৰু জনপ্ৰিয়। এইবোৰৰ অসমীয়া অনুবাদো বজাৰত উপলব্ধ হৈছে।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>৪. ড° তিলক শৰ্মাৰ কবিতাত কি বিশেষত্ব আছে?</h3>
                        <p>তেখেতৰ কবিতাত প্ৰকৃতি প্ৰেম, মানৱতা আৰু আধ্যাত্মিকতাৰ ত্ৰিবেনী সংগম ঘটিছে। তেখেতে শব্দৰ জৰিয়তে শান্তিৰ বাৰ্তা বিলাই দিয়ে।</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>৫. নেপালী ভাষা অসমৰ শিক্ষা ব্যৱস্থাত আছেনে?</h3>
                        <p>হয়, অসমৰ বহুতো বিদ্যালয় আৰু মহাবিদ্যালয়ত নেপালী ভাষাক এটা ঐচ্ছিক বিষয় বা মেজৰ বিষয় হিচাপে পঢ়ুৱা হয়। গুৱাহাটী বিশ্ববিদ্যালয়তো ইয়াৰ পাঠ্যক্ৰম আছে।</p>
                    </div>
                </section>

                <section style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-paper)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}>
                    <h3>অধিক পঢ়ক</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/nepali-sahitya" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline' }}>
                                নেপালী ভাষাত মূল প্ৰবন্ধ পঢ়ক
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

export default AssameseNepaliSahitya;
