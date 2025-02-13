import React from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../component/card";

export const DataBank = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    const favorites = queryParams.get("favorites");

    return (
        <div className="text-white">
            <h1>Databank</h1>
            {category === "personajes" && <div>Contenido de Personajes</div>}
            {category === "vehiculos" && <div>Contenido de Vehículos</div>}
            {category === "planetas" && <div>Contenido de Planetas</div>}
            {favorites === "true" && <div>Mostrando solo favoritos</div>}
            <Card />
        </div>
    );
};
