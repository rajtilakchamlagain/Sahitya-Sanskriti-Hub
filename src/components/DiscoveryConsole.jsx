import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Feather, Bookmark, Compass, ArrowRight } from 'lucide-react';

const DiscoveryConsole = () => {
    const portals = [
        {
            title: "Exploring Poetry",
            nepali: "कविता यात्रा",
            path: "/poems",
            icon: <Feather size={20} />,
            color: "var(--primary-maroon)",
            delay: "0s"
        },
        {
            title: "Memorial Hall",
            nepali: "श्रद्धाञ्जली",
            path: "/shradhanjali",
            icon: <Sparkles size={20} />,
            color: "#D4AF37",
            delay: "0.1s"
        },
        {
            title: "Literary Works",
            nepali: "लेख-रचना",
            path: "/articles",
            icon: <Bookmark size={20} />,
            color: "var(--accent-gold)",
            delay: "0.2s"
        }
    ];

    return (
        <div className="discovery-console">
            <style>{`
                .discovery-console {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    width: 100%;
                    max-width: 600px;
                    margin: 32px auto 0;
                }

                .portal-row {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 12px;
                }

                @media (max-width: 640px) {
                    .portal-row {
                        grid-template-columns: 1fr;
                    }
                }

                .portal-btn {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    padding: 20px 12px;
                    background: var(--bg-glass-heavy);
                    border: 1px solid rgba(255, 255, 255, 0.4);
                    border-radius: 16px;
                    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
                    text-decoration: none;
                    position: relative;
                    overflow: hidden;
                    animation: slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both;
                }

                .portal-btn:hover {
                    transform: translateY(-5px);
                    background: white;
                    border-color: var(--primary-maroon);
                    box-shadow: 0 10px 30px rgba(159, 18, 57, 0.1);
                }

                .portal-icon-box {
                    width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    background: rgba(0, 0, 0, 0.03);
                    color: var(--primary-maroon);
                    transition: 0.3s;
                }

                .portal-btn:hover .portal-icon-box {
                    background: var(--primary-maroon);
                    color: white;
                    transform: scale(1.1);
                }

                .portal-title-np {
                    font-family: var(--font-heading);
                    font-weight: 700;
                    font-size: 16px;
                    color: var(--text-main);
                }

                .portal-title-en {
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: var(--text-muted);
                }

                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .fast-nav-hint {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    font-size: 13px;
                    color: var(--text-muted);
                    margin-top: 8px;
                    opacity: 0.7;
                }
            `}</style>

            <div className="portal-row">
                {portals.map((p, i) => (
                    <Link key={i} to={p.path} className="portal-btn" style={{ animationDelay: p.delay }}>
                        <div className="portal-icon-box" style={{ color: p.color }}>
                            {p.icon}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <span className="portal-title-np">{p.nepali}</span>
                            <span className="portal-title-en">{p.title}</span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="fast-nav-hint">
                <Compass size={14} /> Quick navigation to our core heritage
            </div>
        </div>
    );
};

export default DiscoveryConsole;
