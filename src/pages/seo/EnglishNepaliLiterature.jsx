import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

const EnglishNepaliLiterature = () => {
    return (
        <div className="content-paper" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <SEO
                title="Nepali Literature & Poetry: An Overview | Dr. Tilak Sarmah"
                description="Explore the rich history of Nepali Literature (Sahitya) and Poetry (Kavita). An analysis of Himalayan poetry and modern cultural trends by Dr. Tilak Sarmah."
                keywords="Nepali Poetry, Nepali Literature, Nepali Poem Meaning, Himalayan Poetry, Modern Nepali Literature, Dr Tilak Sarmah"
                publishedTime="2026-02-16T00:00:00+05:30"
                article={true}
                hreflangs={[
                    { lang: "ne", path: "/nepali-sahitya" },
                    { lang: "hi", path: "/hi/nepali-sahitya" },
                    { lang: "as", path: "/as/nepali-sahitya" }
                ]}
            />

            <header style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', color: 'var(--primary-maroon)', marginBottom: '16px' }}>
                    Nepali Literature: A Window to the Himalayas
                </h1>
                <p className="nepali-content" style={{ fontSize: '20px', fontWeight: '500' }}>
                    <strong>Nepali Literature</strong> is a vibrant tapestry of culture, philosophy, and emotion. Here, we explore the essence of Himalayan expression.
                </p>
            </header>

            <article className="nepali-content">
                <section>
                    <h2>1. The Roots of Nepali Sahitya</h2>
                    <p>
                        Nepali literature, or <em>Nepali Sahitya</em>, has its roots deeply embedded in the Sanskrit tradition and the folk culture of the Himalayas.
                        It gained a distinct identity with the works of <strong>Bhanubhakta Acharya</strong>, who is revered as the first poet (Aadikavi).
                    </p>
                </section>

                <section>
                    <h2>2. Understanding Nepali Poetry (Kavita)</h2>
                    <p>
                        Poetry, or <em>Kavita</em>, is the soul of Nepali expression. From the romanticism of the Motiram era to the revolutionary spirit of the modern times, Nepali poetry has evolved significantly.
                    </p>
                    <p>
                        To truly grasp the <strong>Nepali Poem Meaning</strong>, one must understand the socio-cultural context of the region—the struggle, the beauty of nature, and the spiritual quest.
                    </p>
                </section>

                <section>
                    <h2>3. Modern Trends & Global Appeal</h2>
                    <p>
                        Today, Nepali literature is breaking geographical boundaries. Themes of diaspora, identity, and global humanism are prevalent.
                        Scholars like <strong>Dr. Tilak Sarmah</strong> are instrumental in bridging the gap between traditional heritage and modern thought.
                    </p>
                </section>

                {/* FAQ Section */}
                <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '2px solid var(--accent-gold)' }}>
                    <h2 style={{ marginBottom: '24px' }}>Frequently Asked Questions (FAQ)</h2>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>1. What is the most famous Nepali literary work?</h3>
                        <p><strong>"Muna Madan"</strong> by Laxmi Prasad Devkota is arguably the most famous. It is a heartbreaking ballad about migration, love, and sacrifice that resonates with every Nepali.</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>2. Is Nepali literature available in English?</h3>
                        <p>Yes, many classic and modern works have been translated. "The Blue Mimosa" (Shirishko Phool) by Parijat and works by Manjushree Thapa are widely available in English.</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>3. Who is known as the 'Wordsworth of Nepal'?</h3>
                        <p><strong>Lekhnath Paudyal</strong> is often compared to Wordsworth due to his profound love for nature and his ability to weave natural imagery into his classical verses.</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>4. What are the main themes of Nepali poetry?</h3>
                        <p>Nature, patriotism (Bir Ras), social injustice, and existentialism are common themes. Modern poetry often explores the complexities of Identity and Diaspora life.</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>5. Where can I read Dr. Tilak Sarmah's poems?</h3>
                        <p>You can read selected poems of Dr. Tilak Sarmah right here on <strong>Sahitya Sanskriti Hub</strong>. We feature his key works along with analysis and translations.</p>
                    </div>
                </section>

                <section style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-paper)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}>
                    <h3>Discover More</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/nepali-sahitya" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline' }}>
                                Read Full Article in Nepali (Original)
                            </Link>
                        </li>
                        <li>
                            <Link to="/author/dr-tilak-sarmah" style={{ color: 'var(--primary-maroon)', textDecoration: 'underline' }}>
                                About Dr. Tilak Sarmah
                            </Link>
                        </li>
                    </ul>
                </section>
            </article>
        </div>
    );
};

export default EnglishNepaliLiterature;
