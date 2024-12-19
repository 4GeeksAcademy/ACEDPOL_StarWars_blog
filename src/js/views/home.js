import React from "react";
import "../../styles/home.css";

import titleImage from "../../img/Star_Wars_Logo.png"

export const Home = () => (
	<div>
		<div className="content"> 
			<div className="container w-50 mt-5 pt-5 text-center"> 
				<img src={titleImage} className="img-fluid" alt="title image"></img>
				<h1 className="text-white">Bienvenido</h1> 
				<p className="text-white">Este es un ejemplo de una página con una imagen de fondo fija y centrada.</p> 
			</div> 
		</div>
	</div>
);
