import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

class Stap2 extends Component {
  render() {
    return (
      <div className="container">
        <Header name="Stap 2" />
        <p>Het Brein van, van Gogh</p>
        <img src={require("../images/brain.jpg")} />
        <button>Toevoegen</button>
        <button>Niet toeveogen</button>
        <Link to={`/Stap3`}>
          <button>Volgende </button>
        </Link>
        <progress />
      </div>
    );
  }
}

export default Stap2;
