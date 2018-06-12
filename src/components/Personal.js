import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import data from "../data/data";

class Personal extends Component {
  state = {
    selectedOption: true
  };

  handleOptionChange = changeEvent => {
    const targetValue = JSON.parse(changeEvent.target.value);
    this.setState({
      selectedOption: targetValue
    });
    data[2].answer = targetValue;
    console.log(data[2].answer);
  };

  render() {
    return (
      <div className="container">
        <Header name="Step 3" />
        <h2>Personal life of van Gogh</h2>
        <img src={require("../images/ear.jpg")} />
        <section>
          <label
            className={this.state.selectedOption === true ? "active-btn" : ""}
          >
            <input
              name="option-3"
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
              name="option-3"
              type="radio"
              value={false}
              className="section-btn"
              checked={this.state.selectedOption === false}
              onChange={this.handleOptionChange}
            />
            Do not add theme
          </label>
        </section>
        <Link to={`/LastYears`}>
          <button className="btn">Next theme </button>
        </Link>
        <progress value="64" max="100">
          64%
        </progress>
      </div>
    );
  }
}

export default Personal;
