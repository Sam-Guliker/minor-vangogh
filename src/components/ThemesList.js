import React, { Component } from "react";
import LikeFooter from "./LikeFooter";
import themes from "../data/themes";

class ThemesList extends Component {
  state = {
    themeIndex: 0,
    selected: 0
  };

  handleSelection = selected => {
    themes[this.state.themeIndex].selected = selected;

    let result = 0;
    let min = 0;

    for (let i = 0; themes.length > i; i++) {
      if (themes[i].selected === true) {
        result += 1;
        min += parseInt(themes[i].time, 10);
      }
    }

    let time = this.convertMinsToHrsMins(min);

    this.props.handleSelection(result, time);

    let themeIndex = this.state.themeIndex;

    this.setState({
      selected: result,
      themeIndex: themeIndex + 1
    });
  };

  convertMinsToHrsMins(mins) {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    return `${h}:${m}`;
  }

  render() {
    return (
      <section>
        {this.state.themeIndex < themes.length ? (
          <div>
            <article
              style={{
                backgroundImage: `url(${themes[this.state.themeIndex].src}`
              }}
              className="theme-item"
            >
              <h2>{themes[this.state.themeIndex].name}</h2>
              <span>
                <img src={require("../images/clock.svg")} alt="clock" />
                {themes[this.state.themeIndex].time}
              </span>
              <div className="info">
                <p>{themes[this.state.themeIndex].discription}</p>
              </div>
            </article>
            <LikeFooter handleSelection={this.handleSelection} />
          </div>
        ) : (
          <div />
        )}
      </section>
    );
  }
}

export default ThemesList;
