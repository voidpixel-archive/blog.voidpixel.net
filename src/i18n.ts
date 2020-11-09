import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {Language} from "./store/config";
import Backend from 'i18next-http-backend';

i18n
    .use(initReactI18next)
    .use(Backend)
    .init({
        fallbackLng: Language.EN,
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    });
i18n.languages = Object.values(Language);

export default i18n;