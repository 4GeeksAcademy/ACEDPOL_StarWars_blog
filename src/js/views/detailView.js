import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailView = () => {
    const { store } = useContext(Context);
    const { category, uid } = useParams();

    const item = store[category]?.find(item => item.uid === parseInt(uid));

    if (!item) {
        return <div className="text-white">Item not found</div>;
    }

    const excludedKeys = ["created", "edited", "url", "uid"];

    return (
        <div className="container text-white mt-5">
            <h1>{item.name}</h1>
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