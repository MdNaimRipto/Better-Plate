import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const title = "Hello";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    lng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          key: title,
        },
      },
      ban: {
        translation: {
          key: "হ্যালো",
        },
      },
    },
  });
