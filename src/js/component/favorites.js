import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Favorites = () => {
    const { store } = useContext(Context);

    const getFavoriteItems = (category) => {
        return store.favorites[category].map(uid => {
            const item = store[category].find(item => item.uid === uid);
            return item ? (
                <li key={uid}>
                    <Link to={`/detail/${category}/${uid}`} className="dropdown-item" style={{ textDecoration: 'none' }}>
                        {item.name}
                    </Link>
                </li>
            ) : null;
        });
    };

    return (
        <div className="position-absolute top-0 end-0 mt-2">
            <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="dropdownMenuButton2" data-bs-toggle="dropdown" role="button" aria-expanded="false">Favoritos</a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
                        <li>
                            <Link
                                to={{ pathname: "/databank", search: "?category=people&favorites=true" }}
                                className="dropdown-header"
                                style={{ textDecoration: 'none' }}
                            >
                                Personajes
                            </Link>
                        </li>
                        {getFavoriteItems("people")}
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <Link
                                to={{ pathname: "/databank", search: "?category=planets&favorites=true" }}
                                className="dropdown-header"
                                style={{ textDecoration: 'none' }}
                            >
                                Planetas
                            </Link>
                        </li>
                        {getFavoriteItems("planets")}
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <Link
                                to={{ pathname: "/databank", search: "?category=vehicles&favorites=true" }}
                                className="dropdown-header"
                                style={{ textDecoration: 'none' }}
                            >
                                Vehículos
                            </Link>
                        </li>
                        {getFavoriteItems("vehicles")}
                    </ul>
                </li>
            </ul>
        </div>
    );
};
