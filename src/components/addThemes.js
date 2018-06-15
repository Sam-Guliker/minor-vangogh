import React, { Component } from "react";
import Header from "./Header";
import ThemesList from "./ThemesList";
import themes from "../data/themes";
import { Link } from "react-router-dom";

function handleSelection() {
  let result = 0;

  for (let i = 0; themes.length > i; i++) {
    if (themes[i].selected === true) {
      result += 1;
    }
  }

  return result;
}

function checkNotSelected() {
  const newThemes = themes.filter((obj, i) => {
    return obj.selected === false;
  });

  return newThemes;
}

class addThemes extends Component {
  state = {
    selected: handleSelection(),
    notSelected: checkNotSelected(),
    pop: false
  };

  header = React.createRef();

  onClickButton = () => {
    this.header.current.handleClick();
  };

  handleSelection = name => {
    for (let i = 0; themes.length > i; i++) {
      if (themes[i].name === name) {
        themes[i].selected = true;
      }
    }

    let result = 0;

    for (let i = 0; themes.length > i; i++) {
      if (themes[i].selected === true) {
        result += 1;
      }
    }

    const newThemes = themes.filter((obj, i) => {
      return obj.selected === false;
    });

    this.setState({
      selected: result,
      notSelected: newThemes
    });
  };

  render() {
    return (
      <div>
        <Header
          ref={this.header}
          selected={this.state.selected}
          pop={this.state.pop}
        />
        <main>
          <ThemesList
            list={this.state.notSelected}
            handleSelection={this.handleSelection}
            popButton={this.onClickButton}
          />
        </main>
        <Link className={"action-button"} to="/selection">
          Preview tour
          <span>{this.state.selected}</span>
        </Link>
      </div>
    );
  }
}

export default addThemes;
