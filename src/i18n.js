import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from './locals/translationEN.json';
import translationRU from './locals/translationRU.json';

const resources = {
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('lang') || 'en',

    interpolation: {
      escapeValue: false
    }
  });


  export default i18n;