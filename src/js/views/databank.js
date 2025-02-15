import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import jediAnakin from "../../img/jedi-anakin.jpeg";
import tieFighter from "../../img/tie-fighter.jpeg";
import deathStar from "../../img/death-star.jpeg";

export const DataBank = () => {
    const { store } = useContext(Context);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    const favorites = queryParams.get("favorites");

    const getCategoryData = () => {
        let data = [];
        switch (category) {
            case "people":
                data = store.people;
                break;
            case "planets":
                data = store.planets;
                break;
            case "vehicles":
                data = store.vehicles;
                break;
            default:
                data = [];
        }

        if (favorites === "true") {
            const favoriteIds = store.favorites[category] || [];
            data = data.filter(item => favoriteIds.includes(item.uid));
        }

        return data;
    };

    const categoryData = getCategoryData();

    // Define un objeto que mapea cada categoría a su imagen correspondiente
    const categoryImages = {
        people: jediAnakin,
        planets: deathStar,
        vehicles: tieFighter
    };

    return (
        <div className="text-white">
            <div className="container">
                <div className="d-flex flex-column align-items-center mt-4">
                    <h1>Databank</h1>
                    {category === "people" && <div className="text-info">Contenido de Personajes</div>}
                    {category === "planets" && <div className="text-info">Contenido de Planetas</div>}
                    {category === "vehicles" && <div className="text-info">Contenido de Vehículos</div>}
                    {favorites === "true" && <div className="text-secondary">Mostrando solo favoritos</div>}
                </div>
                <div className="row card-container justify-content-center">
                    {categoryData.map((item, index) => (
                        <Card key={index} category={category} data={item} image={categoryImages[category]} />
                    ))}
                </div>
            </div>
        </div>
    );
};
