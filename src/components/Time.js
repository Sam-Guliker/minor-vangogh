import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

class Time extends Component {
  render() {
    return (
      <div className="container">
        <Header name="Stap 5" />
        <p>How much time do you have?</p>
        <img src={require("../images/time.svg")} />
        <select>
          <option defaultValue="vijfenveertig" selected>
            00:45 min
          </option>
          <option defaultValue="uur">01:00 Hour</option>
          <option value="meertijd">More then enough!</option>
        </select>

        <svg src="images/kunstenaars.png" />
        <Link to={`/Overview`}>
          <button className="btn">Next step </button>
        </Link>
        <progress />
      </div>
    );
  }
}

export default Time;
