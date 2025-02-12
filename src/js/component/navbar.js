import React from "react";
import { Link } from "react-router-dom";
import { Favorites } from "./favorites";

export const Navbar = () => {
	return (
		<div className="d-flex justify-content-center mt-2">
            <ul className="nav nav-tabs justify-content-center w-50" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Perfil</a>
                </li>			
            </ul>
            <Favorites />
        </div>
	);
};
