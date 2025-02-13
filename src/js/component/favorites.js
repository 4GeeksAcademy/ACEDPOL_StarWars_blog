import React from "react";
import { Link } from "react-router-dom";

export const Favorites = () => {
    return (
        <div className="position-absolute top-0 end-0 mt-2">
            <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                <li className="nav-item dropdown"> 
                    <a className="nav-link dropdown-toggle" id="dropdownMenuButton2" data-bs-toggle="dropdown" role="button" aria-expanded="false">Favoritos</a> 
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton2"> 
                        <li> 
                            <Link 
                                to={{ pathname: "/databank", search: "?category=personajes&favorites=true" }} 
                                className="dropdown-header" 
                                style={{ textDecoration: 'none' }}
                            >
                                Personajes
                            </Link> 
                        </li> 
                        <li><a className="dropdown-item" href="#">Luke Skywalker</a></li> 
                        <li><a className="dropdown-item" href="#">Darth Vader</a></li> 
                        <li><a className="dropdown-item" href="#">Leia Organa</a></li> 
                        <li> 
                            <hr className="dropdown-divider" /> 
                        </li> 
                        <li> 
                            <Link 
                                to={{ pathname: "/databank", search: "?category=planetas&favorites=true" }} 
                                className="dropdown-header" 
                                style={{ textDecoration: 'none' }}
                            >
                                Planetas
                            </Link> 
                        </li> 
                        <li><a className="dropdown-item" href="#">Tatooine</a></li> 
                        <li><a className="dropdown-item" href="#">Alderaan</a></li> 
                        <li><a className="dropdown-item" href="#">Hoth</a></li> 
                        <li> 
                            <hr className="dropdown-divider" /> 
                        </li> 
                        <li> 
                            <Link 
                                to={{ pathname: "/databank", search: "?category=vehiculos&favorites=true" }} 
                                className="dropdown-header" 
                                style={{ textDecoration: 'none' }}
                            >
                                Vehículos
                            </Link> 
                        </li> 
                        <li><a className="dropdown-item" href="#">X-Wing</a></li> 
                        <li><a className="dropdown-item" href="#">TIE Fighter</a></li> 
                        <li><a className="dropdown-item" href="#">Millennium Falcon</a></li> 
                    </ul> 
                </li>
            </ul>
        </div>
    );
};
