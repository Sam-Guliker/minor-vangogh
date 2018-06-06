import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

class Stap1 extends Component {
  render() {
    return (
      <div className="container">
        <Header name="Stap 1" />
        <p>Bent u benieuwd in het begin van het leven van Gogh.</p>
        <img src={require("../images/paintingpallet.jpg")} />
        <button>Toevoegen</button>
        <button>Niet toevoegen</button>
        <Link to={`/Stap2`}>
          <button>Volgende stap </button>
        </Link>
        <progress />
      </div>
    );
  }
}

export default Stap1;
