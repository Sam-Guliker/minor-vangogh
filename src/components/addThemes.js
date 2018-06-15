import React, { Component } from "react";
import Header from "./Header";
import ThemesList from "./ThemesList";
import themes from "../data/themes";
import FooterButton from "./FooterButton";

function handleSelection() {
  let result = 0;

  for (let i = 0; themes.length > i; i++) {
    if (themes[i].selected === true) {
      result += 1;
    }
  }

  return result;
}

function handleTime() {
  let min = 0;

  for (let i = 0; themes.length > i; i++) {
    if (themes[i].selected === true) {
      min += parseInt(themes[i].time);
    }
  }

  let h = Math.floor(min / 60);
  let m = min % 60;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  return `${h}:${m}`;
}

class addThemes extends Component {
  state = {
    selected: handleSelection(),
    pop: false
  };

  handleSelection = (selected, time) => {
    this.setState({
      selected,
      time
    });
  };

  render() {
    return (
      <div>
        <Header selected={this.state.selected} pop={this.state.pop}>
          <div className="left" />
          <span className="right">{this.state.time}</span>
        </Header>
        <main>
          <ThemesList
            handleSelection={this.handleSelection}
            popButton={this.onClickButton}
          />
        </main>
        <FooterButton name="Preview tour" link="/selection">
          <span>{this.state.selected}</span>
        </FooterButton>
      </div>
    );
  }
}

export default addThemes;
