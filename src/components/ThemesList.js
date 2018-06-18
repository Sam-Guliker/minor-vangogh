import React, { Component } from "react";
import LikeFooter from "./LikeFooter";
import themes from "../data/themes";
import ThemeItem from "./ThemeItem";

const themesReversed = themes.reverse();

class ThemesList extends Component {
  state = {
    themeIndex: 0,
    selected: 0,
    mouseDown: false,
    startPosition: 0
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

    if (position) {
      const difFromStart = position - this.state.startPosition;

      console.log(difFromStart);

      let transformTotal =
        parseInt(this.state.startTransform, 10) + difFromStart;
      if (transformTotal < 0) {
        transformTotal = 0;
      }

      this.setState({
        transform: transformTotal
      });
    }
  };

  handleDragEnd = () => {
    this.setState({
      mouseDown: false
    });
  };

  onRedo = () => {
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
          {themesReversed.map((obj, i) => {
            const reversedIndex = themes.length - i;
            return (
              <li
                key={i}
                className={
                  reversedIndex <= this.state.themeIndex ? "hidden" : undefined
                }
                onMouseDown={this.handleDragStart}
                onTouchStart={this.handleTouchStart}
                onMouseMove={e =>
                  this.state.mouseDown && this.handleDragMove(e)
                }
                onTouchMove={e =>
                  this.state.mouseDown && this.handleDragMove(e)
                }
                onMouseLeave={this.handleDragEnd}
              >
                <ThemeItem theme={obj} />
              </li>
            );
          })}
        </ul>
        <LikeFooter
          handleSelection={this.handleSelection}
          themesLength={themes.length}
          onRedo={this.onRedo}
          themeIndex={this.state.themeIndex}
        />
      </section>
    );
  }
}

export default ThemesList;
