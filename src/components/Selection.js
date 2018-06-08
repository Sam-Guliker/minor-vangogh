import React, { Component } from "react";
import themes from "../data/themes";
import { Link } from "react-router-dom";
import Header from "./Header";

class Selection extends Component {
  state = {
    selectedThemes: themes.filter(obj => {
      return obj.selected === true;
    })
  };
  totalTime() {
    let time = 0;
    for (let i = 0; i < this.state.selectedThemes.length; i++) {
      time += parseInt(this.state.selectedThemes[i].time);
      console.log(time);
    }
    return time + "m";
  }
  render() {
    return (
      <div>
        <Header>
          <Link className="header-link round-button back" to="/">
            Back
          </Link>
        </Header>
        <main>
          <h1>Total time {this.totalTime()}</h1>
          <ul className="themes-list-selected">
            {this.state.selectedThemes.map((obj, i) => {
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
