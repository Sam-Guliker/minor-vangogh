import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

class Personal extends Component {
  render() {
    return (
      <div className="container">
        <Header name="Step 3" />
        <p>Personal life of van Gogh</p>
        <img src={require("../images/ear.jpg")} />
        <button>Add</button>
        <button>Do not add</button>
        <Link to={`/LastYears`}>
          <button>Next theme </button>
        </Link>
        <progress value="80" max="100">
          80%
        </progress>
      </div>
    );
  }
}

export default Personal;
