import React from "react";
import "../../styles/home.css";

import titleImage from "../../img/Star_Wars_Logo.png"

export const Home = () => (
	<div>
		<div className="content"> 
			<div className="container w-50 mt-5 pt-5 text-center"> 
				<img src={titleImage} className="img-fluid" alt="title image"></img>
				<div style={{marginTop: -40}}>
					<h1 className="text-white"> Bienvenido </h1> 
					<p className="text-white mb-0"> Esta es una versión minimalista del 'Banco de datos de Star Wars' </p>
					<p className="text-white"> con una funcionalidad de "Read later" o "favoritos". </p> 
				</div>
			</div> 
		</div>
	</div>
);
