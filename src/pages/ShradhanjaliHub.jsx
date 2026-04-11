import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Music, GraduationCap, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const ShradhanjaliHub = () => {
    const tributes = [
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
                    background: #050505;
                    color: #fff;
                    min-height: 100vh;
                    padding: 80px 20px;
                    font-family: 'serif';
                    position: relative;
                }

                .starry-bg {
                    position: fixed;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: radial-gradient(circle at center, #0a0a0a 0%, #050505 100%);
                    z-index: 1;
                }

                .hub-header {
                    text-align: center;
                    margin-bottom: 80px;
                    position: relative;
                    z-index: 2;
                }

                .hub-title {
                    font-size: clamp(32px, 6vw, 64px);
                    color: #D4AF37;
                    margin-bottom: 20px;
                    letter-spacing: 4px;
                }

                .hub-subtitle {
                    font-size: 20px;
                    color: #a0a0a0;
                    max-width: 700px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .portals-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 450px));
                    gap: 40px;
                    justify-content: center;
                    position: relative;
                    z-index: 2;
                }

                .portal-card {
                    background: rgba(20, 20, 20, 0.6);
                    border: 1px solid rgba(212, 175, 55, 0.2);
                    border-radius: 20px;
                    overflow: hidden;
                    text-decoration: none;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                }

                .portal-card:hover {
                    transform: translateY(-15px) scale(1.02);
                    border-color: #D4AF37;
                    box-shadow: 0 20px 50px rgba(212, 175, 55, 0.15);
                }

                .portal-image-wrap {
                    height: 400px;
                    overflow: hidden;
                    position: relative;
                }

                .portal-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(0.5) contrast(1.1);
                    transition: all 0.8s;
                }

                .portal-card:hover .portal-image {
                    filter: grayscale(0) contrast(1);
                    transform: scale(1.1);
                }

                .portal-overlay {
                    position: absolute;
                    bottom: 0; left: 0; width: 100%;
                    height: 50%;
                    background: linear-gradient(to top, #141414, transparent);
                }

                .portal-info {
                    padding: 30px;
                    text-align: center;
                }

                .portal-role {
                    color: #D4AF37;
                    font-size: 14px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    margin-bottom: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                }

                .portal-name {
                    font-size: 28px;
                    color: #f0e6d2;
                    margin-bottom: 15px;
                }

                .enter-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: #fff;
                    font-weight: bold;
                    opacity: 0.6;
                    transition: 0.3s;
                }

                .portal-card:hover .enter-btn {
                    opacity: 1;
                    color: #D4AF37;
                }
            `}</style>

            <div className="starry-bg" />

            <div className="hub-header">
                <Sparkles size={48} color="#D4AF37" style={{ marginBottom: '20px' }} />
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
                            <div className="portal-overlay" />
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

            <div style={{ textAlign: 'center', marginTop: '100px', opacity: 0.5, fontSize: '14px', position: 'relative', zIndex: 2 }}>
                ॐ शान्तिः शान्तिः शान्तिः।
            </div>
        </div>
    );
};

export default ShradhanjaliHub;
