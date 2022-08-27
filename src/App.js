import { useTranslation } from "react-i18next";

import { Navbar, FAB } from "./components";

import "./App.css";

const App = () => {
	const { t, i18n } = useTranslation();

	// Change Language Event Handler
	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
		// Stores language name in local storage to use in next session
		localStorage.setItem("Language", language);
	};

	return (
		<div className="App">
			<Navbar />

			<FAB changeLanguage={changeLanguage} />
		</div>
	);
};

export default App;
