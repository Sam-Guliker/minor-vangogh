import React from "react";
import themes from "../data/themes";

const ThemesList = () => {
    return (
        <ul className="themes-list">
            {themes.map((obj, i) => {
                return (
                    <li key={i} style={{backgroundImage: `url(${obj.src}`}} className="theme-item">
                        <h3>{obj.name}</h3>
                    </li>
                )
            })
            }
        </ul>
    )
};

export default ThemesList;