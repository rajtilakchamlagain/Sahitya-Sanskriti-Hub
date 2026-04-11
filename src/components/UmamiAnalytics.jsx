import { useEffect } from 'react';

/**
 * Initializes Umami Analytics script dynamically.
 * Umami is deeply bound to the History API and natively handles SPA route changes!
 */
const UmamiAnalytics = () => {
    useEffect(() => {
        const websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;
        
        // If the Key exists and the script hasn't been injected yet
        if (websiteId && !document.querySelector('script[data-umami-script="true"]')) {
            const script = document.createElement('script');
            script.async = true; // Use async for zero render-blocking
            script.defer = true;
            script.src = 'https://cloud.umami.is/script.js';
            script.setAttribute('data-website-id', websiteId);
            script.setAttribute('data-umami-script', 'true');
            document.head.appendChild(script);
        }
    }, []);

    return null;
};

export default UmamiAnalytics;
