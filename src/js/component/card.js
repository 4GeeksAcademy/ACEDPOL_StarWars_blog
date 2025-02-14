import React from "react";

export const Card = ({ data, image }) => {
    // Construye la URL de búsqueda de imágenes de Google
    const googleImageSearchUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(data.name)}`;
    
    return (
        <>
            <div className="col-3 card text-white bg-transparent m-auto border-light" style={{width: "18rem"}}>
                {/* <img src={data.image} className="card-img-top" alt={data.image} /> */}
                <a href={googleImageSearchUrl} target="_blank" rel="noopener noreferrer">
                    <img src={image} className="card-img-top" alt={data.name} />
                </a>
                <div className="card-body text-start">
                    <h5 className="card-title">{data.name}</h5>
                </div>
            </div>
        </>
    )
};
