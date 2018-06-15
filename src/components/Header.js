import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TweenMax, TimelineLite } from "gsap/TweenMax";

class Header extends Component {
  listButton = React.createRef();

  handleClick = () => {
    const tl = new TimelineLite();
    tl.to(this.listButton.current, 0.2, { scaleX: 1.5, scaleY: 1.5 }).to(
      this.listButton.current,
      0.2,
      {
        scaleX: 1,
        scaleY: 1
      }
    );
  };

  render() {
    return (
      <header>
        {this.props.children[0]}
        <h1 onClick={this.handleClick}>Personal tour</h1>
        {this.props.children[1]}
      </header>
    );
  }
}

export default Header;
