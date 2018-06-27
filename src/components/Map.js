import React, { Component } from "react";
import Header from "./Header";
import themes from "../data/themes";
import { Link } from "react-router-dom";
import FloorNavigation from "./FloorNavigation";
let timeOut;

function checkSelected(selected) {
  const checkSelectedArr = themes.filter(obj => {
    return obj.selected === selected;
  });
  return checkSelectedArr;
}

class Map extends Component {
  state = {
    selected: checkSelected(true),
    radio: "floor-1",
    paintingIndex: 0,
    pixelsPerProject: 60,
    scrolling: false,
    startPosition: 0,
    startIndex: 0,
    startTransform: 0
  };

  UNSAFE_componentWillMount() {
    document.addEventListener("wheel", this.findScrollDirectionBrowsers);
  }

  componentWillUnmount() {
    document.removeEventListener("wheel", this.findScrollDirectionBrowsers);
    if (timeOut) {
      clearTimeout(timeOut);
    }
  }

  checkSelectedFloor = radio => {
    this.setState({
      paintingIndex: 0,
      transform: 0,
      radio
    });
  };

  setFloor() {
    let floor;

    let paintings = this.state.selected.map(obj => {
      return obj.paintings;
    });

    paintings = paintings.reduce(function(a, b) {
      return a.concat(b);
    }, []);

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

    return floor;
  }

  findScrollDirectionBrowsers = e => {
    e.preventDefault();
    if (!this.state.scrolling) {
      let delta;
      let newIndex;
      let floor = this.setFloor();

      if (e.wheelDelta) {
        delta = e.wheelDelta;
      } else {
        delta = -1 * e.deltaY;
      }
      if (delta < 0) {
        newIndex =
          this.state.paintingIndex < floor.length - 1
            ? this.state.paintingIndex + 1
            : floor.length - 1;
      } else if (delta > 0) {
        newIndex =
          this.state.paintingIndex > 0 ? this.state.paintingIndex - 1 : 0;
      }

      this.setState({
        scrolling: true,
        paintingIndex: newIndex,
        transform: this.state.pixelsPerProject * newIndex
      });

      timeOut = setTimeout(() => {
        this.setState({
          scrolling: false
        });
      }, 1200);
    }
  };

  handleTouchStart = e => {
    const startIndex = this.state.paintingIndex;
    const startTransform = this.state.transform;
    this.setState({
      mouseDown: true,
      startPosition: typeof e === "object" ? e.touches[0].pageX : undefined,
      startIndex,
      startTransform
    });
  };

  handleSwipeMove = e => {
    e.preventDefault();
    if (e.touches) {
      if (!this.state.scrolling) {
        let startPosition = this.state.startPosition;
        let newIndex;
        let floor = this.setFloor();

        if (startPosition > e.touches[0].pageX) {
          newIndex =
            this.state.paintingIndex < floor.length - 1
              ? this.state.paintingIndex + 1
              : floor.length - 1;
        } else if (startPosition < e.touches[0].pageX) {
          newIndex =
            this.state.paintingIndex > 0 ? this.state.paintingIndex - 1 : 0;
        } else {
          newIndex = this.state.paintingIndex;
        }
        this.setState({
          scrolling: true,
          paintingIndex: newIndex,
          transform: this.state.pixelsPerProject * newIndex
        });

        timeOut = setTimeout(() => {
          this.setState({
            scrolling: false
          });
        }, 1000);
      }
    }
  };

  render() {
    let floor = this.setFloor();
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
          <h1>Floors:</h1>
          <FloorNavigation radio={this.checkSelectedFloor} />
          <div>
            {this.state.radio === "floor-1"
              ? floor.map((obj, i) => {
                  return (
                    <span
                      key={obj.number}
                      className={this.state.paintingIndex === i ? "active" : ""}
                      style={{ left: obj.left, top: obj.top }}
                    >
                      {obj.number}
                    </span>
                  );
                })
              : undefined}
            <img src={require("../images/map.svg")} alt="map" />
          </div>
        </main>
        <div
          onTouchMove={e => this.state.mouseDown && this.handleSwipeMove(e)}
          className="list-container"
        >
          <ul
            style={{
              marginLeft: `calc(-${this.state.transform}vw - ${1.4 *
                this.state.paintingIndex}rem)`
            }}
            className="painting-list"
            onTouchStart={this.handleTouchStart}
          >
            {floor.map(obj => {
              return (
                <li
                  key={obj.number}
                  style={{ backgroundImage: `url(${obj.src}` }}
                  className="painting-item"
                >
                  <h2>{obj.title}</h2>
                  <span>{obj.number}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Map;
