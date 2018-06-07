import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

class LifeStart extends Component {
  state = {
    selectedOption: "Beginning"
  };

  handleOptionChange = changeEvent => {
    console.log(changeEvent.target.value);
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  render() {
    console.log(this.props);

    return (
      <div className="container">
        <Header name="Step 1" />
        <p>Are you interested in van Gogh's starting point in painiting?</p>
        <img src={require("../images/paintingpallet.jpeg")} />
        <section>
          <label
            className={
              this.state.selectedOption === "beginning" ? "active-btn" : ""
            }
          >
            <input
              name="option-1"
              type="radio"
              value="beginning"
              className="section-btn"
              checked={this.state.selectedOption === "beginning"}
              onChange={this.handleOptionChange}
            />
            Add Theme
          </label>
          <label
            className={this.state.selectedOption === "end" ? "active-btn" : ""}
          >
            <input
              name="option-1"
              type="radio"
              value="end"
              className="section-btn"
              checked={this.state.selectedOption === "end"}
              onChange={this.handleOptionChange}
            />
            Do not add theme
          </label>
        </section>
        <Link to={`/Brain`}>
          <button className="btn">Next step </button>
        </Link>
        <progress value="32" max="100">
          32%
        </progress>
      </div>
    );
  }
}

export default LifeStart;
