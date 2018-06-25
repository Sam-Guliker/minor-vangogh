import React, { Component } from "react";
import Header from "./Header";
import themes from "../data/themes";
import { Link } from "react-router-dom";

function checkSelected(selected) {
  const checkSelectedArr = themes.filter(obj => {
    return obj.selected === selected;
  });
  return checkSelectedArr;
}

class Map extends Component {
  state = {
    selected: checkSelected(true)
  };

  render() {
    let paintings = this.state.selected.map(obj => {
      return obj.paintings;
    });
    paintings = paintings.reduce(function(a, b) {
      return a.concat(b);
    }, []);

    const floor = paintings.map((obj, i) => {
      return (
        <li
          key={i}
          style={{ backgroundImage: `url(${obj.src}` }}
          className="painting-item"
        >
          <span>{obj.number}</span>
        </li>
      );
    });
    return (
      <div>
        <Header>
          <Link
            className="back left"
            to={{
              pathname: "/start",
              state: { message: "back" }
            }}
          >
            Back
          </Link>
        </Header>
        <main className="map">
          <img className="top" src={require("../images/top.png")} alt="clock" />
        </main>
        <ul className="painting-list">{floor}</ul>
      </div>
    );
  }
}

export default Map;
