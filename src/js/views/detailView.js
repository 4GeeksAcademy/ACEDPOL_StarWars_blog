import React, { useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailView = () => {
    const { store } = useContext(Context);
    const { category, uid } = useParams();
    const location = useLocation();
    const { image } = location.state || {};

    const item = store[category]?.find(item => item.uid === parseInt(uid));

    if (!item) {
        return <div className="text-white">Item not found</div>;
    }

    const excludedKeys = ["created", "edited", "url", "uid"];

    return (
        <div className="container text-white mt-5">
            <h1>{item.name}</h1>
            {image && <img src={image} alt={item.name} className="img-fluid mb-3" style={{width: "150px", height: "150px"}} />}
            <ul className="list-group">
                {Object.entries(item)
                    .filter(([key]) => !excludedKeys.includes(key))
                    .map(([key, value]) => (
                        <li key={key} className="list-group-item bg-transparent text-white">
                            <strong>{key}:</strong> {value}
                        </li>
                    ))}
            </ul>
        </div>
    );
};