import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import data from "../data/data";

class Time extends Component {
  state = {
    selectedOption: "00:45"
  };

  handleOptionChange = changeEvent => {
    const targetValue = changeEvent.target.value;
    this.setState({
      selectedOption: targetValue
    });
    data[4].time = targetValue;
    console.log(data[4].time);
  };
  render() {
    return (
      <div className="container">
        <Header name="Stap 5" />
        <h2>How much time do you have?</h2>
        <select onChange={this.handleOptionChange}>
          <option defaultValue="fourtyfive">00:45 min</option>
          <option value="hour">01:00 Hour</option>
          <option value="more-time">More than enough!</option>
        </select>
        <Link to={`/Overview`}>
          <button className="btn-full">Next step </button>
        </Link>
        <progress value="100" max="100">
          100%
        </progress>
      </div>
    );
  }
}

export default Time;
