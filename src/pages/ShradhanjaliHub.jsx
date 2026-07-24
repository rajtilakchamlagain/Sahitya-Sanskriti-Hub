import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Music, GraduationCap, ChevronRight, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';

const ShradhanjaliHub = () => {
    const tributes = [
        {
            id: 'geeta-upadhyay',
            name: 'हामी सबैकी दिदी: गीता उपाध्याय',
            role: 'शिक्षा, साहित्य र संस्कृतिकी सेतु',
            image: '/aaa.jpeg',
            icon: <BookOpen size={24} />,
            path: '/shradhanjali/geeta-upadhyay'
        },
        {
            id: 'yadumani-sharma',
            name: 'कलाकार यदुमनि शर्मा',
            role: 'विशिष्ट सङ्गीत साधक',
            image: '/shradhanjali_tribute_portrait_1775849567109.png',
            icon: <Music size={24} />,
            path: '/shradhanjali/yadumani-sharma'
        },
        {
            id: 'dev-sharma-chapagai',
            name: 'कृति शिक्षक देव शर्मा चापागाईं',
            role: 'आदर्श शिक्षक तथा समाज सेवक',
            image: '/dev_sharma_tribute_portrait_1775849859980.png',
            icon: <GraduationCap size={24} />,
            path: '/shradhanjali/dev-sharma-chapagai'
        }
    ];

    return (
        <div className="shradhanjali-hub">
            <SEO title="श्रद्धाञ्जली: हाम्रो गौरवमय स्मृति | Sahitya Sanskriti" />
            <style>{`
                .shradhanjali-hub {
                    background: #FDFAFC;
                    color: #2C2C2C;
                    min-height: 100vh;
                    padding: 100px 20px;
                    font-family: 'serif';
                    position: relative;
                }

                .hub-header {
                    text-align: center;
                    margin-bottom: 120px;
                    position: relative;
                    z-index: 2;
                }

                .hub-title {
                    font-size: clamp(45px, 8vw, 80px);
                    color: #111;
                    margin-bottom: 25px;
                    letter-spacing: -2px;
                    font-weight: 700;
                }

                .hub-subtitle {
                    font-size: 24px;
                    color: #555;
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.8;
                    font-style: italic;
                }

                .portals-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
                    gap: 60px;
                    max-width: 1400px;
                    margin: 0 auto;
                    justify-content: center;
                    position: relative;
                    z-index: 2;
                }

                .portal-card {
                    background: #fff;
                    border: 1px solid rgba(0,0,0,0.03);
                    border-radius: 2px;
                    overflow: hidden;
                    text-decoration: none;
                    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.8s ease;
                    position: relative;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.04);
                    display: flex;
                    flex-direction: column;
                }

                .portal-card:hover {
                    transform: translateY(-15px);
                    box-shadow: 0 30px 60px rgba(140, 120, 83, 0.15);
                    border-color: rgba(140, 120, 83, 0.2);
                }

                .portal-image-wrap {
                    height: 500px;
                    overflow: hidden;
                    position: relative;
                    background: #fdfdfd;
                    padding: 15px;
                }

                .portal-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
                    filter: sepia(0.15) contrast(1.05);
                }

                .portal-card:hover .portal-image {
                    transform: scale(1.03);
                    filter: sepia(0) contrast(1.1);
                }

                .portal-info {
                    padding: 40px 30px;
                    text-align: center;
                    background: #fff;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    border-top: 1px solid rgba(0,0,0,0.03);
                }

                .portal-role {
                    color: #8C7853;
                    font-size: 13px;
                    letter-spacing: 4px;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    font-weight: 600;
                    font-family: 'sans-serif';
                }

                .portal-name {
                    font-size: 34px;
                    color: #111;
                    margin-bottom: 25px;
                    font-weight: 700;
                    line-height: 1.3;
                    letter-spacing: -0.5px;
                }

                .enter-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    color: #a0a0a0;
                    font-weight: bold;
                    transition: 0.3s;
                    text-transform: uppercase;
                    font-size: 13px;
                    letter-spacing: 2px;
                    font-family: 'sans-serif';
                }

                .portal-card:hover .enter-btn {
                    color: #8C7853;
                }
            `}</style>

            <div className="hub-header">
                <Sparkles size={40} color="#8C7853" style={{ marginBottom: '20px' }} />
                <h1 className="hub-title">श्रद्धाञ्जली</h1>
                <p className="hub-subtitle">
                    हाम्रो समाज र संस्कृतिका ती धरोहरहरू, जसले आफ्नो जीवन कर्म र साधनाद्वारा हामीलाई मार्ग देखाउनुभयो।
                </p>
            </div>

            <div className="portals-grid">
                {tributes.map(tribute => (
                    <Link key={tribute.id} to={tribute.path} className="portal-card">
                        <div className="portal-image-wrap">
                            <img src={tribute.image} alt={tribute.name} className="portal-image" />
                        </div>
                        <div className="portal-info">
                            <div className="portal-role">{tribute.icon} {tribute.role}</div>
                            <h2 className="portal-name">{tribute.name}</h2>
                            <div className="enter-btn">
                                श्रद्धाञ्जली हेर्नुहोस् <ChevronRight size={18} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '100px', color: '#8C7853', fontSize: '18px', position: 'relative', zIndex: 2, letterSpacing: '4px', fontWeight: 'bold' }}>
                ॐ शान्तिः शान्तिः शान्तिः।
            </div>
        </div>
    );
};

export default ShradhanjaliHub;
