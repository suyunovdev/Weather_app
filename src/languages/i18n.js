import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';

import ukr from './ukr.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: en,

    ukr: ukr,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;