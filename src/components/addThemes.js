import React, { Component } from "react";
import Header from "./Header";
import ThemesList from "./ThemesList";
import themes from "../data/themes";

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

  onClickButton = name => {
    this.setState({
      pop: true
    });
    setTimeout(() => {
      this.setState({
        pop: false
      });
    }, 300);
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
        <Header selected={this.state.selected} pop={this.state.pop} />
        <main>
          <p className="intro-text">
            Add all the themes you like and view them in your list
          </p>
          <ThemesList
            list={this.state.notSelected}
            handleSelection={this.handleSelection}
            popButton={this.onClickButton}
          />
        </main>
      </div>
    );
  }
}

export default addThemes;
