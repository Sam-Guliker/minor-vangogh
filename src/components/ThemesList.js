import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddButton from "./AddButton";

class ThemesList extends Component {
  state = {
    themeIndex: 0
  };

  render() {
    return (
      <section>
        <article
          style={{
            backgroundImage: `url(${this.props.list[this.state.themeIndex].src}`
          }}
          className="theme-item"
        >
          <h2>{this.props.list[this.state.themeIndex].name}</h2>
          <span>
            <img src={require("../images/clock.svg")} alt="clock" />
            {this.props.list[this.state.themeIndex].time}
          </span>
          <div className="info">
            <p>{this.props.list[this.state.themeIndex].discription}</p>
          </div>
        </article>
      </section>
    );
  }
}

export default ThemesList;
