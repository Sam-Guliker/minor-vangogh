import React, { Component } from "react";
import LikeFooter from "./LikeFooter";
import themes from "../data/themes";
import ThemeItem from "./ThemeItem";

class ThemesList extends Component {
  state = {
    themeIndex: 0,
    nextThemeIndex: 1,
    selected: 0,
    mouseDown: false,
    startPosition: 0,
    pullDeltaX: 0,
    rotate: 0,
    transform: 0,
    transition: false,
    opacity: 1
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
    themeIndex += 1;

    setTimeout(() => {
      this.after();
    }, 300);

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
    if (e.target.className === "theme-item") {
      this.setState({
        mouseDown: true,
        startPosition: e.pageX,
        device: "laptop",
        transition: false
      });
    }
  };

  handleTouchStart = e => {
    if (e.target.className === "theme-item") {
      this.setState({
        mouseDown: true,
        startPosition: typeof e === "object" ? e.touches[0].pageX : undefined,
        device: "mobile",
        transition: false
      });
    }
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

    let difFromStart;
    if (position) {
      difFromStart = position - this.state.startPosition;
    } else {
      difFromStart = 0;
    }

    let deg = difFromStart / 20;
    let reducedSwipe = difFromStart / 5;

    let opacity = 1 - Math.abs(difFromStart / 50);

    this.setState({
      transform: reducedSwipe,
      pullDeltaX: difFromStart,
      rotate: deg,
      opacity
    });
  };

  handleDragEnd = () => {
    if (this.state.pullDeltaX) {
      let rotate = 0;
      let transform = 0;
      let opacity = 1;

      if (this.state.transform < 0) {
        if (this.state.transform < -70) {
          rotate = -20;
          transform = -200;
          opacity = 0;
          this.handleSelection(false);
        }
      } else {
        if (this.state.transform > 70) {
          rotate = 20;
          transform = 200;
          opacity = 0;
          this.handleSelection(true);
        }
      }

      this.setState({
        mouseDown: false,
        transition: true,
        snap: false,
        rotate,
        opacity,
        transform
      });
    }
  };

  after() {
    let newNextIndex = this.state.nextThemeIndex + 1;
    this.setState({
      opacity: 1,
      rotate: 0,
      transform: 0,
      transition: false,
      nextThemeIndex: newNextIndex
    });
  }

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
      themeIndex,
      nextThemeIndex: themeIndex + 1
    });
  };

  render() {
    let direction;
    if (this.state.transform > 0) {
      direction = "right";
    } else if (this.state.transform < 0) {
      direction = "left";
    } else {
      direction = "";
    }
    return (
      <section>
        <ul className="theme-list">
          {this.state.themeIndex < themes.length - 1 ? (
            <li>
              <ThemeItem theme={themes[this.state.nextThemeIndex]} />
            </li>
          ) : (
            undefined
          )}
          {this.state.themeIndex < themes.length ? (
            <li
              style={{
                transform: `rotate(${this.state.rotate}deg) translateX(${
                  this.state.transform
                }px)`
              }}
              className={
                this.state.transition ? "reject " + direction : direction
              }
              onMouseDown={this.handleDragStart}
              onTouchStart={this.handleTouchStart}
              onMouseMove={e => this.state.mouseDown && this.handleDragMove(e)}
              onTouchMove={e => this.state.mouseDown && this.handleDragMove(e)}
              onMouseLeave={this.handleDragEnd}
              onTouchEnd={this.handleDragEnd}
              onMouseUp={this.handleDragEnd}
            >
              <ThemeItem
                opacity={this.state.opacity}
                theme={themes[this.state.themeIndex]}
              />
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
