import React, { Component } from "react";
import Header from "./Header";
import themes from "../data/themes";
import { Link } from "react-router-dom";
import FloorNavigation from "./FloorNavigation";

function checkSelected(selected) {
  const checkSelectedArr = themes.filter(obj => {
    return obj.selected === selected;
  });
  return checkSelectedArr;
}

class Map extends Component {
  state = {
    selected: checkSelected(true),
    radio: "floor-0"
  };

  checkSelectedFloor = radio => {
    this.setState({ radio });
  };

  render() {
    let paintings = this.state.selected.map(obj => {
      return obj.paintings;
    });

    paintings = paintings.reduce(function(a, b) {
      return a.concat(b);
    }, []);

    let floor;

    if (this.state.radio === "floor-0") {
      floor = paintings.filter(obj => {
        return obj.floor === 0;
      });
    } else if (this.state.radio === "floor-1") {
      floor = paintings.filter(obj => {
        return obj.floor === 1;
      });
    } else if (this.state.radio === "floor-2") {
      floor = paintings.filter(obj => {
        return obj.floor === 2;
      });
    } else {
      floor = paintings.filter(obj => {
        return obj.floor === 3;
      });
    }

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
          <FloorNavigation radio={this.checkSelectedFloor} />
        </main>
        <ul className="painting-list">
          {floor.map(obj => {
            return (
              <li
                key={obj.number}
                style={{ backgroundImage: `url(${obj.src}` }}
                className="painting-item"
              >
                <span>{obj.number}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Map;
