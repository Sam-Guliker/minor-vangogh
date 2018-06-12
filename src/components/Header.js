import React, { Component } from "react";
import { Link } from "react-router-dom";
import themes from "../data/themes";
import { TweenMax, TimelineLite } from "gsap/TweenMax";

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

  listButton = React.createRef();

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
        {this.props.children}
        <h1 onClick={this.handleClick}>Personal tour</h1>
        <div className="header-link right">
          <Link className={"button-small list"} to="/selection">
            Selection
            <span ref={this.listButton}>{this.state.selected}</span>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
