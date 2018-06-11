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
    notSelected: checkNotSelected()
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
        <Header selected={this.state.selected} />
        <main>
          <h2>Add items</h2>
          <ThemesList
            list={this.state.notSelected}
            handleSelection={this.handleSelection}
          />
        </main>
      </div>
    );
  }
}

export default addThemes;
