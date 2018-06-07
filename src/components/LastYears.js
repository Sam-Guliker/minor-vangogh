import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

class LastYears extends Component {
  render() {
    return (
      <div className="container">
        <Header name="Stap 4" />
        <p>
          Last years of van Gogh, and artists that get inspirtion from van gogh
        </p>
        <img src={require("../images/geinspireerd.png")} />
        <button>Toevoegen</button>
        <button>Niet toeveogen</button>
        <Link to={`/Overview`}>
          <button>Next step </button>
        </Link>
        <progress value="100" max="100">
          100%
        </progress>
      </div>
    );
  }
}

export default LastYears;
