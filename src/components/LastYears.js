import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import data from "../data/data";

class LastYears extends Component {
  state = {
    selectedOption: true
  };

  handleOptionChange = changeEvent => {
    const targetValue = JSON.parse(changeEvent.target.value);
    this.setState({
      selectedOption: targetValue
    });
    data[3].answer = targetValue;
    console.log(data[3].answer);
  };

  render() {
    return (
      <div className="container">
        <Header name="Stap 4" />
        <h2>
          Last years of van Gogh, and artists that get inspiration from van gogh
        </h2>
        <div className="gallery">
          <img src={require("../images/korenveld.jpg")} />
          <img src={require("../images/korenveld-2.jpg")} />
          <img src={require("../images/korenveld-3.jpg")} />
        </div>
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
            Add category
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
            Do not add category
          </label>
        </section>
        <Link to={`/time`}>
          <button className="btn-full">Next step </button>
        </Link>
        <progress value="78" max="100">
          78%
        </progress>
      </div>
    );
  }
}

export default LastYears;
