import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart } from 'lucide-react';

const ShradhanjaliBanner = () => {
    return (
        <section className="shradhanjali-banner">
            <style>{`
                .shradhanjali-banner {
                    margin: 0 16px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, #1a0f0f 0%, #0a0a0a 100%);
                    padding: 40px;
                    border: 1px solid rgba(212, 175, 55, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 30px;
                    overflow: hidden;
                    position: relative;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                }

                .shradhanjali-banner::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(212, 175, 55, 0.03) 0%, transparent 70%);
                    animation: slowRotate 20s linear infinite;
                }

                @keyframes slowRotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .banner-content {
                    position: relative;
                    z-index: 2;
                    flex: 1;
                }

                .banner-label {
                    background: rgba(212, 175, 55, 0.1);
                    color: #D4AF37;
                    padding: 6px 16px;
                    border-radius: 30px;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 20px;
                    border: 1px solid rgba(212, 175, 55, 0.2);
                }

                .banner-title {
                    font-size: clamp(24px, 4vw, 36px);
                    color: #f0e6d2;
                    font-family: 'serif';
                    margin-bottom: 12px;
                    line-height: 1.2;
                }

                .banner-subtitle {
                    color: #a0a0a0;
                    font-size: 16px;
                    max-width: 500px;
                    line-height: 1.6;
                }

                .banner-btn {
                    padding: 14px 32px;
                    background: #D4AF37;
                    color: #000;
                    border-radius: 12px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.3s;
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    z-index: 2;
                    white-space: nowrap;
                    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
                }

                .banner-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.5);
                    background: #f1c40f;
                }

                .banner-image-preview {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    border: 2px solid #D4AF37;
                    padding: 5px;
                    background: rgba(25, 20, 20, 0.8);
                    position: relative;
                    z-index: 2;
                }

                .banner-image-preview img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    object-fit: cover;
                    filter: sepia(0.2);
                }

                @media (max-width: 768px) {
                    .shradhanjali-banner {
                        flex-direction: column;
                        text-align: center;
                        padding: 30px 20px;
                    }
                    .banner-image-preview { margin-bottom: 20px; }
                    .banner-subtitle { margin: 0 auto 24px; }
                }
            `}</style>
            
            <div className="banner-image-preview">
                <img src="/shradhanjali_tribute_portrait_1775849567109.png" alt="Yadumani Sharma" />
            </div>

            <div className="banner-content">
                <div className="banner-label">
                    <Sparkles size={14} /> Memorial Tribute
                </div>
                <h2 className="banner-title">कलाकार यदुमनि शर्मा: एक स्वर्णिम सम्झना</h2>
                <p className="banner-subtitle">
                    असमे गोर्खा समाजका सुप्रसिद्ध कलाकार यदुमनि शर्माको जीवन र सङ्गीतमय यात्राको विशेष श्रद्धाञ्जली।
                </p>
            </div>

            <Link to="/shradhanjali" className="banner-btn">
                श्रद्धाञ्जली अर्पण गर्नुहोस् <Heart size={18} />
            </Link>
        </section>
    );
};

export default ShradhanjaliBanner;
