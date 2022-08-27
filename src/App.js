import { useTranslation } from "react-i18next";

import "./App.css";

const App = () => {
	const { t, i18n } = useTranslation();

	// Change Language Event Handler
	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
		// Stores language name in local storage to use in next session
		localStorage.setItem("Language", language);
	};

	return <div className="App"></div>;
};

export default App;
