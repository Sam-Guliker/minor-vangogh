import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

class Stap4 extends Component {
  render() {
    return (
      <div className="container">
        <Header name="Stap 4" />
        <p>Laatste jaren en kunstenaars die geinspireerd zijn door van gogh</p>
        <img src={require("../images/geinspireerd.png")} />
        <button>Toevoegen</button>
        <button>Niet toeveogen</button>
        <Link to={`/Stap5`}>
          <button>Volgende </button>
        </Link>
        <progress value="100" max="100">
          100%
        </progress>
      </div>
    );
  }
}

export default Stap4;
