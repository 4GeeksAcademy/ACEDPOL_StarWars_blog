import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { DataBank } from "./views/databank";
import { DetailView } from "./views/detailView";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import background from "../img/Fondo_estrellado.png"

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<img className="fondo-img" src={background}></img>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/databank" element={<DataBank />} />
						<Route path="/detail/:category/:uid" element={<DetailView />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
