import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./i18n/en.json";
import ta from "./i18n/ta.json";
import ma from './i18n/ma.json';
import ka from './i18n/ka.json';
import hi from './i18n/hi.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translation: en,
      },
      ta: {
        translation: ta,
      },
      ma: {
        translation: ma,
      },
      ka: {
        translation: ka,
      },
      hi: {
        translation: hi,
      },
    },
  });

export default i18n;
