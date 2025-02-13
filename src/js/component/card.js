import React from "react";

export const Card = (data) => {
    return (
        <>
            <div className="card text-white bg-transparent mx-auto border-light" style={{width: "18rem"}}>
                <img src={data.image} className="card-img-top" alt={data.image} />
                <div className="card-body text-start">
                    <h5 className="card-title">{data.name}</h5>
                </div>
            </div>
        </>
    )
};
