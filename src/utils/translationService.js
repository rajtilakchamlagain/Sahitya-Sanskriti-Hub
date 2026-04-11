import axios from 'axios';

const CACHE_KEY_PREFIX = 'trans_cache_';

/**
 * Translates texts using the Vercel Serverless Function Proxy.
 * Checks localStorage first to save API quota.
 * 
 * @param {string|string[]} text - Text or array of texts to translate
 * @param {string} targetLang - Target language code (e.g., 'es', 'fr')
 * @returns {Promise<string|string[]>} - Translated text(s)
 */
export const translateText = async (text, targetLang) => {
    if (!text || !targetLang) return text;
    if (targetLang === 'en' || targetLang === 'auto') return text; // Assuming source is English/Mixed, or leave as is

    const isArray = Array.isArray(text);
    const textsToTranslate = isArray ? text : [text];

    // 1. Check Cache
    const cachedTranslations = [];
    const indicesToFetch = [];
    const itemsToFetch = [];

    textsToTranslate.forEach((t, index) => {
        const cacheKey = `${CACHE_KEY_PREFIX}${targetLang}_${btoa(encodeURIComponent(t.substring(0, 50)))}`; // Simple hash
        const cached = localStorage.getItem(cacheKey);

        if (cached) {
            cachedTranslations[index] = cached;
        } else {
            indicesToFetch.push(index);
            itemsToFetch.push(t);
        }
    });

    // If all in cache, return immediately
    if (itemsToFetch.length === 0) {
        return isArray ? cachedTranslations : cachedTranslations[0];
    }

    try {
        // 2. Call API for missing items
        const response = await axios.post('/api/translate', {
            text: itemsToFetch,
            targetLang
        });

        const newTranslations = response.data.translations;

        // 3. Update Cache & Result Array
        newTranslations.forEach((translatedText, i) => {
            const originalIndex = indicesToFetch[i];
            const originalText = itemsToFetch[i];
            cachedTranslations[originalIndex] = translatedText;

            // Save to localStorage
            const cacheKey = `${CACHE_KEY_PREFIX}${targetLang}_${btoa(encodeURIComponent(originalText.substring(0, 50)))}`;
            try {
                localStorage.setItem(cacheKey, translatedText);
            } catch (e) {
                console.warn('LocalStorage full, skipping cache');
            }
        });

        return isArray ? cachedTranslations : cachedTranslations[0];

    } catch (error) {
        console.error('TranslationService Error:', error);
        // Fallback: Return original text if failed
        return text;
    }
};

export const SUPPORTED_LANGUAGES = [
    { code: 'hi', name: 'Hindi (हिन्दी)' },
    { code: 'ne', name: 'Nepali (नेपाली)' }, // Might be source, but good to have
    { code: 'en', name: 'English' },
    { code: 'bn', name: 'Bengali (বাংলা)' },
    { code: 'as', name: 'Assamese (অসমীয়া)' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'ja', name: 'Japanese' },
    { code: 'zh-Hans', name: 'Chinese (Simplified)' },
    // Add more up to 100 as needed
];
