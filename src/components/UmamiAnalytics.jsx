import { useEffect } from 'react';

/**
 * Initializes Umami Analytics script dynamically.
 * Umami is deeply bound to the History API and natively handles SPA route changes!
 */
const UmamiAnalytics = () => {
    useEffect(() => {
        // Hardcoded Website ID as requested
        const websiteId = "cdf17d15-bd9e-4507-bd32-f15d1c974922";
        
        // If the script hasn't been injected yet
        if (!document.querySelector('script[data-website-id="' + websiteId + '"]')) {
            const script = document.createElement('script');
            script.async = true; // Use async for zero render-blocking
            script.defer = true;
            script.src = 'https://cloud.umami.is/script.js';
            script.setAttribute('data-website-id', websiteId);
            
            // Only track live domain (filters out localhost/dev traffic)
            script.setAttribute('data-domains', 'sahityasanskriti.online'); 
            
            document.head.appendChild(script);
        }
    }, []);

    return null;
};

export default UmamiAnalytics;
