import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation.json';
import arTranslation from './locales/ar/translation.json';

// Define resources with translations
const resources = {
  en: {
    translation: enTranslation
  },
  ar: {
    translation: arTranslation
  }
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Init i18next
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    debug: import.meta.env.DEV,
    
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    
    // Right-to-left support for Arabic
    detection: {
      order: ['localStorage', 'navigator'],
    },
    
    // Special handling for languages that require RTL layout
    react: {
      useSuspense: true,
    },
  });

export default i18n; 