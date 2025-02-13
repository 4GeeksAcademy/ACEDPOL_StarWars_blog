import React from "react";
import { Favorites } from "./favorites";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLinkClick = (path, state) => {
        navigate(path, { state });
    };

    return (
        <div className="d-flex justify-content-center mt-2">
            <ul className="nav nav-tabs justify-content-center w-50" id="myTab" role="tablist">
                <li className="nav-item">
                    <Link 
                        to="/" 
                        className={`nav-link ${location.pathname === "/" && "active"}`} 
                    >
                        Inicio
                    </Link>
                </li> 
                <li className="nav-item">
                    <Link 
                        to={{ pathname: "/databank", search: "?category=personajes" }} 
                        className={`nav-link ${location.pathname === "/databank" && location.search === "?category=personajes" && "active"}`} 
                    >
                        Personajes
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to={{ pathname: "/databank", search: "?category=planetas" }} 
                        className={`nav-link ${location.pathname === "/databank" && location.search === "?category=planetas" && "active"}`} 
                    >
                        Planetas
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to={{ pathname: "/databank", search: "?category=vehiculos" }} 
                        className={`nav-link ${location.pathname === "/databank" && location.search === "?category=vehiculos" && "active"}`} 
                    >
                        Vehículos
                    </Link>
                </li>
            </ul>
            <Favorites />
        </div>
    );
};
