import React, { Component } from "react";
import { Link } from "react-router-dom";

import Introduction from "./Introduction";
import Navigation from "./Navigation";

class Header extends Component {
  render() {
    const firstUser = this.props.name;
    console.log(this.props.name);
    return (
      <header>
        {firstUser === "Start" ? (
          <Introduction name={this.props.name} />
        ) : (
          <Navigation name={this.props.name} />
        )}
      </header>
    );
  }
}

export default Header;
