import React from "react";

export const Card = () => {
    return (
        <>
            <div className="card rounded-2 shadow">
                <div className="card-header border-0 bg-white rounded-2 rounded-bottom">
                    <img className="img-fluid rounded mx-auto d-block" src={imageUrl ? imageUrl : "../zepdalogo.png"} alt={'logo: ' + imageUrl ? imageUrl : "../zepdalogo.png"} style={{ height: '10vh' }} />
                </div>
                <div className="card-body bg-light pt-0 rounded-2 rounded-top rounded-top-0">
                    <div className="d-flex justify-content-between">
                        <div className="my-auto">
                            <h5 className="card-title fw-bold m-0 pt-2 text-start">{company.nombre}</h5>
                            <p className="card-text text-success fw-bold text-start">{company.direccion}</p>
                            <p className=" fw-bold text-start">{company.pais}</p>
                        </div>

                        {store.token && (
                            <div className="fs-1 rounded-pill icon-hover clickable" onClick={() => handleAddFavorite(company, company.id)}>
                                <i className={isFavorite ? "fa-solid fa-heart text-success" : "fa-regular fa-heart"} />
                            </div>
                        )}


                    </div>


                    <button className="btn btn-success rounded-pill float-start" onClick={navigateToInfoEmpresa}>info</button>
                </div>
            </div>
        </>
    )
};
