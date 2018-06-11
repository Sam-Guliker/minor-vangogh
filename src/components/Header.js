import React, { Component } from "react";
import { Link } from "react-router-dom";
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

class Header extends Component {
  state = {
    selected: handleSelection()
  };

  static getDerivedStateFromProps(props, state) {
    if (props.selected === state.selected) {
      return null;
    } else if (props.selected === undefined) {
      return {
        selected: handleSelection()
      };
    } else {
      return {
        selected: props.selected
      };
    }
  }

  render() {
    return (
      <header>
        {this.props.children}
        <h1>Personal tour</h1>
        <Link className="header-link right round-button list" to="/selection">
          Selection
          <span>{this.state.selected}</span>
        </Link>
      </header>
    );
  }
}

export default Header;
