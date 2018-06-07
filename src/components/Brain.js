import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

class Brain extends Component {
  render() {
    return (
      <div className="container">
        <Header name="Step 2" />
        <p>The brain of van Gogh</p>
        <img src={require("../images/brain.jpg")} />
        <button>Add</button>
        <button>Do not add</button>
        <Link to={`/Personal`}>
          <button>Next theme </button>
        </Link>
        <progress value="64" max="100">
          64%
        </progress>
      </div>
    );
  }
}

export default Brain;
