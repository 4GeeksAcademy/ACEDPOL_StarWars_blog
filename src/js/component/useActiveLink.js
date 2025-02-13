import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const UseActiveLink = (initialPath) => {
    const [activeLink, setActiveLink] = useState(initialPath);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLinkClick = (path, state) => {
        setActiveLink(path);
        navigate(path, { state });
    };

    return { handleLinkClick, location };
};
