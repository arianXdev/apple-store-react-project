import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Navbar, FAB, Mac, IPad, IPhone, Watch, AirPods, TV, Accessories, Support } from "./components";

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

			<Routes>
				<Route path="/store/mac" element={<Mac />} />
				<Route path="/store/ipad" element={<IPad />} />
				<Route path="/store/iphone" element={<IPhone />} />
				<Route path="/store/watch" element={<Watch />} />
				<Route path="/store/airpods" element={<AirPods />} />
				<Route path="/store/tv" element={<TV />} />
				<Route path="/store/accessories" element={<Accessories />} />
				<Route path="/store/support" element={<Support />} />
			</Routes>
		</div>
	);
};

export default App;
