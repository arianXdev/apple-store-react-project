import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Mac, IPad, IPhone, Watch, AirPods, TV, Accessories, Support, Products, ProductDetails, Footer, NotFound } from "./components";
import App from "./App";

import "./helpers/i18next";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Navbar /> <Footer />
						</>
					}
				>
					<Route index element={<App />} />
					<Route index element={<Footer />} />
					<Route path="mac" element={<Mac />}>
						<Route path=":macId" element={<Products productName="mac" />}>
							<Route path=":macProductId" element={<ProductDetails />} />
						</Route>
					</Route>

					<Route path="ipad" element={<IPad />} />
					<Route path="iphone" element={<IPhone />} />
					<Route path="watch" element={<Watch />} />
					<Route path="airpods" element={<AirPods />} />
					<Route path="tv" element={<TV />} />
					<Route path="accessories" element={<Accessories />} />
					<Route path="support" element={<Support />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
