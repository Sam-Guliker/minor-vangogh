import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddButton from "./AddButton";

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
                  <h2>{obj.name}</h2>
                  <span>
                    <img src={require("../images/clock.svg")} alt="clock" />
                    {obj.time}
                  </span>
                </div>
                <div>
                  <AddButton
                    handleSelection={this.props.handleSelection}
                    name={obj.name}
                    popButton={this.props.popButton}
                  >
                    Add
                  </AddButton>
                  <Link
                    className="button-small info"
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
