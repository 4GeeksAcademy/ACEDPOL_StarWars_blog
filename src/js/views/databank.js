import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const DataBank = () => {
    const { store } = useContext(Context);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    const favorites = queryParams.get("favorites");

    const getCategoryData = () => {
        switch (category) {
            case "people":
                return store.people;
            case "planets":
                return store.planets;
            case "vehicles":
                return store.vehicles;
            default:
                return [];
        }
    };

    const categoryData = getCategoryData(category);

    return (
        <div className="text-white">
            <h1>Databank</h1>
            {category === "people" && <div>Contenido de Personajes</div>}
            {category === "planets" && <div>Contenido de Planetas</div>}
            {category === "vehicles" && <div>Contenido de Vehículos</div>}
            {favorites === "true" && <div>Mostrando solo favoritos</div>}
            <div className="row">
                {categoryData.map((item, index) => (
                    <Card key={index} data={item} />
                ))}
            </div>
        </div>
    );
};
