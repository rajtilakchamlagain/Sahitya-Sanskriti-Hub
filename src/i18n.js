import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translateText } from './utils/translationService';

// Custom Backend to using our TranslationService
const CustomBackend = {
    type: 'backend',
    read: async (language, namespace, callback) => {
        // This is where standard i18next loads JSON files.
        // We will mock this or return empty, because we are doing "Dynamic Translation" 
        // of content, not just static UI keys. 
        // However, for the UI elements (buttons, nav), we might want some static strings.

        // For this "Free Hybrid" approach, we largely rely on on-demand translation 
        // in components via a helper hook or component, rather than pre-loading 100 files.
        // But to make `t('key')` work, we need something here.

        callback(null, {}); // Return empty resource bundle
    }
};

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: localStorage.getItem('app_language') || 'en', // Default to prev selection or EN
        interpolation: {
            escapeValue: false, // React already safes from XSS
        },
        resources: {
            en: { translation: {} }, // Populate with static keys if needed
            // We do NOT load 100 languages here. 
            // We will use a custom hook `useSmartTranslation` for dynamic content.
        }
    });

export default i18n;
