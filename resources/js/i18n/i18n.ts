import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { common } from "./common";
const resources = {
    en: {
        translation: {
            ...common.en.translation
        }
    },
    ar: {
        translation: {
            ...common.ar.translation
        }
    }
};
// get the locale from localStorage or default to 'en'
let savedLocale = 'en';
if (typeof window !== 'undefined') {
    savedLocale = window.localStorage.getItem('locale') || 'en';
}

// set the initial language based on the saved locale
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: savedLocale, // set the initial language
        fallbackLng: 'en', // use en if detected lng is not available
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;