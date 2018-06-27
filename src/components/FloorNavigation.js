import React, { Component } from "react";

class FloorNavigation extends Component {
  state = {
    radio: "floor-1"
  };
  setInput = e => {
    this.setState({ radio: e.target.value });
    this.props.radio(e.target.value);
  };
  render() {
    return (
      <nav>
        <form>
          <input
            name="select"
            type="radio"
            id="one"
            checked={this.state.radio === "floor-0"}
            value="floor-0"
            onChange={this.setInput}
          />
          <label
            className={this.state.radio === "floor-0" ? "selected" : undefined}
            htmlFor="one"
          >
            0
          </label>
          <input
            name="select"
            type="radio"
            id="two"
            checked={this.state.radio === "floor-1"}
            value="floor-1"
            onChange={this.setInput}
          />
          <label
            className={this.state.radio === "floor-1" ? "selected" : undefined}
            htmlFor="two"
          >
            1
          </label>
          <input
            name="select"
            type="radio"
            id="three"
            checked={this.state.radio === "floor-2"}
            value="floor-2"
            onChange={this.setInput}
          />
          <label
            className={this.state.radio === "floor-2" ? "selected" : undefined}
            htmlFor="three"
          >
            2
          </label>
          <input
            name="select"
            type="radio"
            id="four"
            value="floor-3"
            checked={this.state.radio === "floor-3"}
            onChange={this.setInput}
          />
          <label
            className={this.state.radio === "floor-3" ? "selected" : undefined}
            htmlFor="four"
          >
            3
          </label>
        </form>
      </nav>
    );
  }
}

export default FloorNavigation;
