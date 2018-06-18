import React, { Component } from "react";
import { Link } from "react-router-dom";

class FooterButton extends Component {
  render() {
    return (
      <Link className={"action-button"} to={this.props.link}>
        {this.props.name}
        {this.props.children}
      </Link>
    );
  }
}

export default FooterButton;
