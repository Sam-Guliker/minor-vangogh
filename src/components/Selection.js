import React, { Component } from "react";
import themes from "../data/themes";
import { Link } from "react-router-dom";
import Header from "./Header";

class Selection extends Component {
  render() {
    return (
      <div>
        <Header>
          <Link className="header-link round-button back" to="/">
            Back
          </Link>
        </Header>
        <main>
          <ul className="themes-list-selected">
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
                      <button className="round-button minus">Remove</button>
                      <Link
                        to={`/details${obj.link}`}
                        className="round-button info"
                      >
                        Info
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
            <div className="filling" />
          </ul>
        </main>
      </div>
    );
  }
}

export default Selection;
