import React from "react";
import { Link } from "react-router-dom";

export const Favorites = () => {
    return (
        <div className="position-absolute top-0 end-0 mt-2">
            <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                <li class="nav-item dropdown"> 
                    <a class="nav-link dropdown-toggle" id="dropdownMenuButton2" data-bs-toggle="dropdown" role="button" aria-expanded="false">Favoritos</a> 
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton2"> 
                        <li> 
                            <span class="dropdown-header">Personajes</span> 
                        </li> 
                        <li><a class="dropdown-item" href="#">Luke Skywalker</a></li> 
                        <li><a class="dropdown-item" href="#">Darth Vader</a></li> 
                        <li><a class="dropdown-item" href="#">Leia Organa</a></li> 
                        <li> 
                            <hr class="dropdown-divider" /> 
                        </li> 
                        <li> 
                            <span class="dropdown-header">Planetas</span> 
                        </li> 
                        <li><a class="dropdown-item" href="#">Tatooine</a></li> 
                        <li><a class="dropdown-item" href="#">Alderaan</a></li> 
                        <li><a class="dropdown-item" href="#">Hoth</a></li> 
                        <li> 
                            <hr class="dropdown-divider" /> 
                        </li> 
                        <li> 
                            <span class="dropdown-header">Vehículos</span> 
                        </li> 
                        <li><a class="dropdown-item" href="#">X-Wing</a></li> 
                        <li><a class="dropdown-item" href="#">TIE Fighter</a></li> 
                        <li><a class="dropdown-item" href="#">Millennium Falcon</a></li> 
                    </ul> 
                </li>
            </ul>
        </div>
    );
};
