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
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" role="button" aria-expanded="false">Dropdown</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a className="dropdown-item" id="section1-tab" data-toggle="tab" href="#section1" role="tab" aria-controls="section1" aria-selected="false">Action</a></li>
                        <li><a className="dropdown-item" id="section2-tab" data-toggle="tab" href="#section2" role="tab" aria-controls="section2" aria-selected="false">Another action</a></li>
                        <li><a className="dropdown-item" id="section3-tab" data-toggle="tab" href="#section3" role="tab" aria-controls="section3" aria-selected="false">Something else here</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" id="section3-tab" data-toggle="tab" href="#section3" role="tab" aria-controls="section3" aria-selected="false">Separated link</a></li>
                    </ul>
                </li>				
            </ul>
            <Favorites />
        </div>
	);
};
