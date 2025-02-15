import React, { useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detailView.css"; // Asegúrate de importar el archivo CSS

export const DetailView = () => {
    const { store } = useContext(Context);
    const { category, uid } = useParams();
    const location = useLocation();
    const { image } = location.state || {};

    const item = store[category]?.find(item => item.uid === parseInt(uid));

    if (!item) {
        return <div className="text-white">Item not found</div>;
    }

    const excludedKeys = ["name", "created", "edited", "url", "uid", "pilots", "films"];

    const properties = Object.entries(item).filter(([key]) => !excludedKeys.includes(key));

    const groupedProperties = [];
    for (let i = 0; i < properties.length; i += 4) {
        groupedProperties.push(properties.slice(i, i + 4));
    }

    return (
        <div className="container text-white mt-5 detail-container">
            <div className="d-flex flex-column align-items-center">
                {image && <img src={image} alt={item.name} className="img-fluid mb-3 detail-image" />}
                <h1>{item.name}</h1>
            </div>
            {groupedProperties.map((group, groupIndex) => (
                <div key={groupIndex} className="row no-gutters justify-content-center">
                    {group.map(([key, value], index) => (
                        <div key={key} className={`col-12 col-md-auto mb-2 }`}>
                            <div className="list-group-item bg-transparent text-white">
                                <div className="property-key">{key}</div>
                                <div className="property-value">
                                    {value.split(',').map((val, index) => (
                                        <div key={index}>{val.trim()}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};