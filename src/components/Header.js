import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.name}</h1>
      </header>
    );
  }
}

export default Header;
