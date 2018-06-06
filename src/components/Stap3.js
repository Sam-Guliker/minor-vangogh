import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

class Stap3 extends Component {
  render() {
    return (
      <div className="container">
        <Header name="Stap 3" />
        <p>Het persoonlijk leven van, van Gogh</p>
        <img src={require("../images/ear.jpg")} />
        <button>Toevoegen</button>
        <button>Niet toeveogen</button>
        <Link to={`/Stap4`}>
          <button>Volgende </button>
        </Link>
        <progress value="80" max="100">
          80%
        </progress>
      </div>
    );
  }
}

export default Stap3;
