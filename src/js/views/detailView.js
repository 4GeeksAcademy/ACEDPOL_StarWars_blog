import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detailView.css"; // Asegúrate de importar el archivo CSS

export const DetailView = () => {
    const { store } = useContext(Context);
    const { category, uid } = useParams();
    const [showArrows, setShowArrows] = useState(false);
    const [animateArrows, setAnimateArrows] = useState(true);

    const item = store[category]?.find(item => item.uid === parseInt(uid));

    useEffect(() => {
        const handleScroll = () => {
            const container = document.querySelector('.detail-container');
            if (container && container.scrollHeight > container.clientHeight) {
                setShowArrows(true);
                const scrollMargin = container.scrollHeight * 0.02; // 2% del scrollHeight
                if (container.scrollTop + container.clientHeight >= container.scrollHeight - scrollMargin) {
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
        const container = document.querySelector('.detail-container');
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }
        return () => {
            window.removeEventListener('resize', handleScroll);
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    if (!item) {
        return <div className="text-white">Item not found</div>;
    }

    const excludedKeys = ["name", "image", "created", "edited", "url", "uid"];

    const properties = Object.entries(item).filter(([key]) => !excludedKeys.includes(key));

    const groupedProperties = [];
    for (let i = 0; i < properties.length; i += 4) {
        groupedProperties.push(properties.slice(i, i + 4));
    }

    const getHomeworldName = (url) => {
        const index = url.split('/').pop();
        const planet = store.planets.find(planet => planet.uid === parseInt(index));
        return planet ? planet.name : url;
    };

    const getPilotName = (url) => {
        const index = url.split('/').pop();
        const pilot = store.people.find(person => person.uid === parseInt(index));
        return pilot ? pilot.name : url;
    };

    const renderPropertyValue = (key, value) => {
        if (key === "homeworld" && category === "people") {
            return getHomeworldName(value);
        } else if (key === "pilots" && category === "vehicles") {
            if (Array.isArray(value) && value.length > 0) {
                return value.map((url, index) => <div key={index}>{getPilotName(url)}</div>);
            } else {
                return null;
            }
        } else if (Array.isArray(value) && value.length > 0) {
            return value.map((val, index) => <div key={index}>{val}</div>);
        } else if (typeof value === 'string' && value.trim() !== "") {
            return value.split(',').map((val, index) => <div key={index}>{val.trim()}</div>);
        } else {
            return null;
        }
    };

    return (
        <div className="container text-white mt-5 detail-container">
            <div className="d-flex flex-column align-items-center">
                {item.image && <img src={item.image} alt={item.name} className="img-fluid mb-3 detail-image" />}
                <h1>{item.name}</h1>
            </div>
            {groupedProperties.map((group, groupIndex) => (
                <div key={groupIndex} className="row no-gutters justify-content-center">
                    {group.map(([key, value], index) => {
                        const renderedValue = renderPropertyValue(key, value);
                        const nextRenderedValue = index < group.length - 1 ? renderPropertyValue(group[index + 1][0], group[index + 1][1]) : null;
                        return renderedValue ? (
                            <div key={key} className={`col-12 col-md-auto mb-2 ${nextRenderedValue ? 'border-right' : ''}`}>
                                <div className="list-group-item bg-transparent text-white">
                                    <div className="property-key">{key}</div>
                                    <div className="property-value">
                                        {renderedValue}
                                    </div>
                                </div>
                            </div>
                        ) : null;
                    })}
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