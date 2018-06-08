import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import data from "../data/data.js";

class LifeStart extends Component {
  state = {
    selectedOption: true
  };

  handleOptionChange = changeEvent => {
    const targetValue = JSON.parse(changeEvent.target.value);
    this.setState({
      selectedOption: targetValue
    });
    data[0].answer = targetValue;
    console.log(data[0].answer);
  };

  render() {
    return (
      <div className="container">
        <Header name="Step 1" />
        <p>Are you interested in van Gogh's starting career in painiting?</p>
        <img src={require("../images/paintingpallet.jpeg")} />
        <section>
          <label
            className={this.state.selectedOption === true ? "active-btn" : ""}
          >
            <input
              name="option-1"
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
              name="option-1"
              type="radio"
              value={false}
              className="section-btn"
              checked={this.state.selectedOption === false}
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
