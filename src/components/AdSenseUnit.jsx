import React, { useEffect, useRef } from 'react';

/**
 * Reusable AdSense Component for Sahitya Sanskriti Hub
 * Uses publisher ID ca-pub-6868347085273750
 */
const AdSenseUnit = ({ 
    slot = "", 
    format = "auto", 
    responsive = "true", 
    style = {},
    className = "" 
}) => {
    const adRef = useRef(null);
    const isPushed = useRef(false);

    useEffect(() => {
        try {
            if (window.adsbygoogle && !isPushed.current) {
                // Ensure the ad element is mounted and has not been filled yet
                if (adRef.current && adRef.current.innerHTML.trim() === "") {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                    isPushed.current = true;
                }
            }
        } catch (e) {
            console.debug("AdSense load check:", e?.message);
        }
    }, []);

    return (
        <div 
            className={`adsense-wrapper ${className}`} 
            style={{ 
                margin: '24px auto', 
                textAlign: 'center', 
                overflow: 'hidden',
                minHeight: '90px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                ...style 
            }}
        >
            <span style={{ 
                fontSize: '10px', 
                color: 'var(--text-light)', 
                letterSpacing: '1px', 
                textTransform: 'uppercase',
                marginBottom: '6px',
                opacity: 0.6
            }}>
                विज्ञापन / Advertisement
            </span>
            <ins 
                ref={adRef}
                className="adsbygoogle"
                style={{ display: 'block', width: '100%', minWidth: '250px' }}
                data-ad-client="ca-pub-6868347085273750"
                data-ad-slot={slot || undefined}
                data-ad-format={format}
                data-full-width-responsive={responsive}
            />
        </div>
    );
};

export default AdSenseUnit;
