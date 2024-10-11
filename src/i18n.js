import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationKH from './locales/kh/translation.json';

// Retrieve the saved language from local storage, if available.
const savedLanguage = localStorage.getItem('i18nextLng') || 'kh';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      kh: {
        translation: translationKH,
      },
    },
    lng: savedLanguage, // Use the saved language or the default.
    fallbackLng: 'kh',
    interpolation: {
      escapeValue: false,
    },
  });

// Function to change the language and save the selection in local storage.
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng);
});

export default i18n;
