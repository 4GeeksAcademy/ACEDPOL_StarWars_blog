import React, { useState, useEffect } from "react";
import { Favorites } from "./favorites";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    const [showFavorites, setShowFavorites] = useState(queryParams.get("favorites") === "true");

    useEffect(() => {
        setShowFavorites(queryParams.get("favorites") === "true");
    }, [location.search]);

    const toggleFavorites = () => {
        const newShowFavorites = !showFavorites;
        setShowFavorites(newShowFavorites);

        // Update the query params
        if (newShowFavorites) {
            queryParams.set("favorites", "true");
        } else {
            queryParams.delete("favorites");
        }

        // Navigate to the updated URL
        navigate({
            pathname: location.pathname,
            search: queryParams.toString()
        });
    };

    const getLinkWithFavorites = (baseLink) => {
        return showFavorites ? `${baseLink}&favorites=true` : baseLink;
    };

    const isActive = (path) => {
        return location.search.includes(path) ? "nav-link active" : "nav-link";
    };

    const isCategoryValid = category === "people" || category === "planets" || category === "vehicles";

    return (
        <div className="d-flex justify-content-center mt-2">
            {isCategoryValid && (
                <div className="position-fixed bottom-0 end-0 mb-2 me-2">
                    <button className={`btn btn-toggle ${showFavorites ? 'active' : ''} btn-no-outline`} onClick={toggleFavorites}>
                        Favoritos
                    </button>
                </div>
            )}
            <ul className="nav nav-tabs justify-content-center w-50" id="myTab" role="tablist">
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/" && "active"}`} to="/">Inicio</Link>
                </li> 
                <li className="nav-item">
                    <Link className={isActive("category=people")} to={getLinkWithFavorites("/databank?category=people")}>Personajes</Link>
                </li>
                <li className="nav-item">
                    <Link className={isActive("category=planets")} to={getLinkWithFavorites("/databank?category=planets")}>Planetas</Link>
                </li>
                <li className="nav-item">
                    <Link className={isActive("category=vehicles")} to={getLinkWithFavorites("/databank?category=vehicles")}>Vehículos</Link>
                </li>
            </ul>
            <Favorites />
        </div>
    );
};
