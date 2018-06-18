import React, { Component } from "react";
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
    let left = undefined;
    let right = undefined;
    if (this.props.children) {
      if (this.props.children.length === 2) {
        for (let i = 0; i < this.props.children.length; i++) {
          if (this.props.children[i].props.className.includes("left")) {
            left = this.props.children[i];
          } else {
            right = this.props.children[i];
          }
        }
      } else {
        if (this.props.children.props.className.includes("left")) {
          left = this.props.children;
        } else {
          right = this.props.children;
        }
      }
    }
    return (
      <header>
        {left}
        <h1 onClick={this.handleClick}>Personal tour</h1>
        {right}
      </header>
    );
  }
}

export default Header;
