import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header name="Start" />
        <p>The next questions will help you personalize your tour.</p>
        <p>Every question is connected to a thema in the museum.</p>
        <img src={require("../images/vangogh.jpg")} />
        <h2>Van Gogh</h2>
        <Link to={`/lifestart`}>
          <button className="btn-full">Start </button>
        </Link>
        <progress value="16.66" max="100">
          16%
        </progress>
      </div>
    );
  }
}

export default Home;
