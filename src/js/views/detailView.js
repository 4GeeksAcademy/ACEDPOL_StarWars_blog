import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detailView.css"; // Asegúrate de importar el archivo CSS

export const DetailView = () => {
    const { store } = useContext(Context);
    const { category, uid } = useParams();
    const location = useLocation();
    const { image } = location.state || {};
    const [showArrows, setShowArrows] = useState(false);
    const [animateArrows, setAnimateArrows] = useState(true);

    const item = store[category]?.find(item => item.uid === parseInt(uid));

    useEffect(() => {
        const handleScroll = () => {
            const container = document.querySelector('.detail-container');
            if (container.scrollHeight > container.clientHeight) {
                setShowArrows(true);
                if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
                    setAnimateArrows(false);
                } else {
                    setAnimateArrows(true);
                }
            } else {
                setShowArrows(false);
            }
        };

        handleScroll();
        window.addEventListener('resize', handleScroll);
        document.querySelector('.detail-container').addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleScroll);
            document.querySelector('.detail-container').removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                        <div key={key} className={`col-12 col-md-auto mb-2 ${index % 4 !== 3 ? 'border-right' : ''}`}>
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
            {showArrows && (
                <>
                    <div className={`scroll-arrow left-arrow ${animateArrows ? 'bounce' : ''} ${!animateArrows ? 'hidden' : ''}`}></div>
                    <div className={`scroll-arrow right-arrow ${animateArrows ? 'bounce' : ''} ${!animateArrows ? 'hidden' : ''}`}></div>
                </>
            )}
        </div>
    );
};