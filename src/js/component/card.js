import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ data, image }) => {
    // Construye la URL de búsqueda de imágenes de Google
    const googleImageSearchUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(data.name)}`;
    
    return (
        <div className="col-12 col-md-2 px-2 py-2">
            <div className="card text-white bg-transparent border-light h-100 d-flex flex-column justify-content-between">
                <a href={googleImageSearchUrl} target="_blank" rel="noopener noreferrer" className="d-flex justify-content-center align-items-center img-link" style={{height: "200px"}}>
                    <img src={image} className="card-img-top card-image" alt={data.name} style={{width: "150px", height: "150px"}} />
                </a>
                <Link to={`/detail/${data.uid}`} className="rectangle-link card-hover d-flex flex-column justify-content-center align-items-center">
                    <div className="my-3 rectangle" style={{width: "24px", height: "4px", backgroundColor: "white", borderRadius: "2px", alignSelf: "center"}}></div>
                    <div className="card-body text-center d-flex flex-column justify-content-center" style={{minHeight: "90px"}}>
                        <h5 className="card-title text-white">{data.name}</h5> 
                    </div> 
                </Link> 
            </div>
        </div>
    );
};
