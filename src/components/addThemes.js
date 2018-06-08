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

class addThemes extends Component {
  state = {
    selected: handleSelection()
  };
  handleSelection = index => {
    if (themes[index].selected) {
      themes[index].selected = false;
    } else {
      themes[index].selected = true;
    }

    let result = 0;

    for (let i = 0; themes.length > i; i++) {
      if (themes[i].selected === true) {
        result += 1;
      }
    }
    this.setState({
      selected: result
    });
  };
  render() {
    return (
      <div>
        <Header selected={this.state.selected} />
        <main>
          <h2>Voeg items toe</h2>
          <ThemesList handleSelection={this.handleSelection} />
        </main>
      </div>
    );
  }
}

export default addThemes;
