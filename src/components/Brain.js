import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import data from "../data/data";

class Brain extends Component {
  state = {
    selectedOption: true
  };

  handleOptionChange = changeEvent => {
    const targetValue = JSON.parse(changeEvent.target.value);
    this.setState({
      selectedOption: targetValue
    });
    data[1].answer = targetValue;
    console.log(data[1].answer);
  };

  render() {
    return (
      <div className="container">
        <Header name="Step 2" />
        <p>The brain of van Gogh</p>
        <img src={require("../images/brain.jpg")} />
        <section>
          <label
            className={this.state.selectedOption === true ? "active-btn" : ""}
          >
            <input
              name="option-2"
              type="radio"
              value={true}
              className="section-btn"
              checked={this.state.selectedOption === true}
              onChange={this.handleOptionChange}
            />
            Add Theme
          </label>
          <label
            className={this.state.selectedOption === false ? "active-btn" : ""}
          >
            <input
              name="option-2"
              type="radio"
              value={false}
              className="section-btn"
              checked={this.state.selectedOption === false}
              onChange={this.handleOptionChange}
            />
            Do not add theme
          </label>
        </section>
        <Link to={`/Personal`}>
          <button className="btn">Next theme </button>
        </Link>
        <progress value="48" max="100">
          48%
        </progress>
      </div>
    );
  }
}

export default Brain;
