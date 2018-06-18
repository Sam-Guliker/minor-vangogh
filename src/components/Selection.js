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
      time += parseInt(this.state.selectedThemes[i].time, 10);
    }
    return time + "m";
  }

  handleSelection = name => {
    for (let i = 0; themes.length > i; i++) {
      if (themes[i].name === name) {
        themes[i].selected = false;
      }
    }

    const newThemes = themes.filter((obj, i) => {
      return obj.selected === true;
    });

    this.setState({
      selectedThemes: newThemes
    });
  };

  render() {
    return (
      <div>
        <Header>
          <Link className="header-link button-small back" to="/add">
            Back
          </Link>
        </Header>
        <main>
          <p className="intro-text">
            These are the selected themes for your personal tour. Try not to
            make the tour longer than 45 minutes for the best experience
          </p>
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
                      <button
                        onClick={() => this.handleSelection(obj.name)}
                        className="button-small minus"
                      >
                        Remove
                      </button>
                      <Link
                        to={`/details${obj.link}`}
                        className="button-small info"
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
          <Link className="button" to="/start">
            Start tour
          </Link>
        </main>
      </div>
    );
  }
}

export default Selection;
