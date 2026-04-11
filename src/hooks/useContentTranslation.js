import { useState, useEffect } from 'react';
import { translateText } from '../utils/translationService';
// import i18n from '../i18n'; // Unused for now as we use localStorage directly

const useContentTranslation = (originalText) => {
    const [translatedText, setTranslatedText] = useState(originalText);
    const [isTranslating, setIsTranslating] = useState(false);
    const currentLang = localStorage.getItem('app_language') || 'en';

    useEffect(() => {
        let isMounted = true;

        const doTranslate = async () => {
            if (!originalText) return;
            if (currentLang === 'en' || currentLang === 'auto') {
                if (isMounted) setTranslatedText(originalText);
                return;
            }

            setIsTranslating(true);
            try {
                const result = await translateText(originalText, currentLang);
                if (isMounted) setTranslatedText(result);
            } catch (error) {
                console.error("Translation hook error:", error);
                if (isMounted) setTranslatedText(originalText);
            } finally {
                if (isMounted) setIsTranslating(false);
            }
        };

        doTranslate();

        return () => { isMounted = false; };
    }, [originalText, currentLang]);

    return { translatedText, isTranslating, currentLang };
};

export default useContentTranslation;
