import React, { Component } from "react";
import LikeFooter from "./LikeFooter";
import themes from "../data/themes";
import ThemeItem from "./ThemeItem";

let timeOut;

class ThemesList extends Component {
  state = {
    themeIndex: 0,
    selected: 0,
    mouseDown: false,
    startPosition: 0,
    rotate: 0,
    transform: 0
  };

  swipeCard = React.createRef();

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
    themeIndex += 1;

    this.setState({
      selected: result,
      themeIndex
    });
  };

  convertMinsToHrsMins(mins) {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    return `${h}:${m}`;
  }

  handleDragStart = e => {
    this.setState({
      mouseDown: true,
      startPosition: e.pageX,
      device: "laptop"
    });
  };

  handleTouchStart = e => {
    this.setState({
      mouseDown: true,
      startPosition: typeof e === "object" ? e.touches[0].pageX : undefined,
      device: "mobile"
    });
  };

  handleDragMove = e => {
    let position;
    if (this.state.device === "mobile") {
      if (typeof e === "object") {
        if (e.touches) {
          position = e.touches[0].pageX;
        }
      } else {
        position = undefined;
      }
    } else {
      position = e.pageX;
    }

    // deg = pullDeltaX / 10;
    // $card.css("transform", "translateX("+ pullDeltaX +"px) rotate("+ deg +"deg)");

    if (position) {
      const difFromStart = position - this.state.startPosition;

      let deg = difFromStart / 10;

      this.setState({
        transform: difFromStart,
        rotate: deg
      });
    }
  };

  handleDragEnd = () => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      let rotate = 0;
      let transform = 0;

      if (this.state.transform < 0) {
        if (this.state.transform < -70) {
          rotate = -20;
          transform = -200;
          this.handleSelection(false);
        }
      } else {
        if (this.state.transform > 70) {
          rotate = 20;
          transform = 200;
          this.handleSelection(true);
        }
      }

      this.setState({
        mouseDown: false,
        snap: false,
        rotate,
        transform
      });
    }, 50);
  };

  onUndo = () => {
    let themeIndex = this.state.themeIndex - 1;
    themes[themeIndex].selected = false;

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

    this.setState({
      selected: result,
      themeIndex
    });
  };

  render() {
    return (
      <section>
        <ul className="theme-list">
          {this.state.themeIndex < themes.length - 1 ? (
            <li>
              <ThemeItem theme={themes[this.state.themeIndex + 1]} />
            </li>
          ) : (
            undefined
          )}
          {this.state.themeIndex < themes.length ? (
            <li
              ref={this.swipeCard}
              style={{
                transform: `rotate(${this.state.rotate}deg) translateX(${
                  this.state.transform
                }px)`
              }}
              className={this.mouseDown ? undefined : "reject"}
              onMouseDown={this.handleDragStart}
              onTouchStart={this.handleTouchStart}
              onMouseMove={e => this.state.mouseDown && this.handleDragMove(e)}
              onTouchMove={e => this.state.mouseDown && this.handleDragMove(e)}
              onMouseLeave={this.handleDragEnd}
              onTouchEnd={this.handleDragEnd}
              onMouseUp={this.handleDragEnd}
            >
              <ThemeItem theme={themes[this.state.themeIndex]} />
            </li>
          ) : (
            undefined
          )}
        </ul>
        <LikeFooter
          handleSelection={this.handleSelection}
          themesLength={themes.length}
          onUndo={this.onUndo}
          themeIndex={this.state.themeIndex}
        />
      </section>
    );
  }
}

export default ThemesList;
