import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

class Stap5 extends Component {
  render() {
    return (
      <div className="container">
        <Header name="Stap 5" />
        <p>Hoeveel Tijd heeft u?</p>
        <img src={require("../images/time.svg")} />
        <select>
          <option defaultValue="vijfenveertig" selected>
            00:45
          </option>
          <option defaultValue="uur">01:00</option>
          <option value="meertijd">Meer tijd</option>
        </select>

        <svg src="images/kunstenaars.png" />
        <Link to={`/overzicht`}>
          <button className="btn">Volgende </button>
        </Link>
        <progress />
      </div>
    );
  }
}

export default Stap5;
