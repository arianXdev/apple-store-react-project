import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en/translation.json";
import fa from "../locales/fa/translation.json";

i18next.use(initReactI18next).init({
	resources: {
		en: {
			translation: en,
		},
		fa: {
			translation: fa,
		},
	},
	// default language
	lng: localStorage.getItem("Language") || "en",
});

export default i18next;
