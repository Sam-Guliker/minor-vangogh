import React from "react";
import themes from "../data/themes";
import { Link } from "react-router-dom";

const ThemesList = () => {
  return (
    <ul className="themes-list">
      {themes.map((obj, i) => {
        return (
          <li
            key={i}
            style={{ backgroundImage: `url(${obj.src}` }}
            className="theme-item"
          >
            <div className="details">
              <div>
                <h3>{obj.name}</h3>
                <span>0:30</span>
              </div>
              <div>
                <button className="round-button">Add</button>
                <Link className="round-button" to={`/details${obj.link}`}>
                  Info
                </Link>
              </div>
            </div>
          </li>
        );
      })}
      <div className="filling" />
    </ul>
  );
};

export default ThemesList;
