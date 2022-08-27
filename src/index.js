import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Mac, IPad, IPhone, Watch, AirPods, TV, Accessories, Support } from "./components";
import App from "./App";

import "./helpers/i18next";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<App />} />
					<Route path="/store/mac" element={<Mac />} />
					<Route path="/store/ipad" element={<IPad />} />
					<Route path="/store/iphone" element={<IPhone />} />
					<Route path="/store/watch" element={<Watch />} />
					<Route path="/store/airpods" element={<AirPods />} />
					<Route path="/store/tv" element={<TV />} />
					<Route path="/store/accessories" element={<Accessories />} />
					<Route path="/support" element={<Support />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
