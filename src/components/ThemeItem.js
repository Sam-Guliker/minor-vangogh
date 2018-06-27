import React, { Component } from "react";

class ThemeItem extends Component {
  state = {
    collapsed: false
  };
  toggleInfo = () => {
    let collapsed;
    if (this.state.collapsed) {
      collapsed = false;
    } else {
      collapsed = true;
    }
    this.setState({
      collapsed
    });
  };
  render() {
    return (
      <article
        style={{
          backgroundImage: `url(${this.props.theme.src}`,
          opacity: this.props.opacity
        }}
        className={"theme-item"}
      >
        <h2>{this.props.theme.name}</h2>
        <span>
          <img src={require("../images/clock.svg")} alt="clock" />
          {this.props.theme.time}
        </span>
        {this.props.load ? (
          undefined
        ) : (
          <div
            onClick={this.toggleInfo}
            className={this.state.collapsed ? "info collapsed" : "info"}
          >
            <p>{this.props.theme.discription}</p>
          </div>
        )}
      </article>
    );
  }
}

export default ThemeItem;
