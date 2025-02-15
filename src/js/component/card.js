import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({ category, data }) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Comprobación inicial para ver si el uid está en los favoritos de la categoría
        if (store.favorites[category] && store.favorites[category].includes(data.uid)) {
            setIsFavorite(true);
        } else {
            setIsFavorite(false);
        }
    }, [store.favorites, category, data.uid]);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        actions.toggleFavorite(category, data.uid); // Llama al método de flux
    };

    // Construye la URL de búsqueda de imágenes de Google
    const googleImageSearchUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(data.name)}`;
    
    return (
        <div className="col-12 col-md-2 px-2 py-2">
            <div className="card text-white bg-transparent border-light h-100 d-flex flex-column justify-content-between">
                <a href={googleImageSearchUrl} target="_blank" rel="noopener noreferrer" className="d-flex justify-content-center align-items-center img-link" style={{height: "200px"}}>
                    <img src={data.image} className="card-img-top card-image" alt={data.name} style={{width: "150px", height: "150px"}} />
                </a>
                <Link to={`/detail/${category}/${data.uid}`} className="rectangle-link card-hover d-flex flex-column justify-content-center align-items-center">
                    <div className="my-3 rectangle" style={{width: "24px", height: "4px", backgroundColor: "white", borderRadius: "2px", alignSelf: "center"}}></div>
                    <div className="card-body text-center d-flex flex-column justify-content-center" style={{minHeight: "90px"}}>
                        <h5 className="card-title text-white">{data.name}</h5> 
                    </div> 
                </Link>
                <button className="card-icon btn btn-link btn-no-outline favorite-btn text-white py-1" onClick={toggleFavorite}>
                    <i className={`btn-icon mx-auto ${isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}`}></i>
                </button>
            </div>
        </div>
    );
};
