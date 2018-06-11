import React, { Component } from "react";
import { Link } from "react-router-dom";

class ThemesList extends Component {
  render() {
    return (
      <ul className="themes-list">
        {this.props.list.map((obj, i) => {
          return (
            <li
              key={i}
              style={{ backgroundImage: `url(${obj.src}` }}
              className="theme-item"
            >
              <div className="details">
                <div>
                  <h3>{obj.name}</h3>
                  <span>
                    <img src={require("../images/clock.svg")} alt="clock" />
                    {obj.time}
                  </span>
                </div>
                <div>
                  <button
                    onClick={() => this.props.handleSelection(obj.name)}
                    className="round-button plus"
                  >
                    Add
                  </button>
                  <Link
                    className="round-button info"
                    to={`/details${obj.link}`}
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
    );
  }
}

export default ThemesList;
