import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

class Stap5 extends Component {
  render() {
    return (
      <div className="container">
        <Header name="Overzicht" />
        <ul>
          <li>
            <img src={require("../images/paintingpallet.jpeg")} />
            <p>Het begin</p>
            <form>
              <input
                defaultChecked
                type="checkbox"
                name="begin"
                defaultValue="begin"
                id="begin"
              />
            </form>
          </li>
          <li>
            <img src={require("../images/brain.jpg")} />
            <p>Het Brein</p>
            <form>
              <input
                defaultChecked
                type="checkbox"
                name="brein"
                defaultValue="brein"
                id="brein"
              />
            </form>
          </li>
          <li>
            <img src={require("../images/ear.jpg")} />
            <p>Persoonlijk leven</p>
            <form>
              <input
                defaultChecked
                type="checkbox"
                name="oor"
                defaultValue="oor"
                id="oor"
              />
            </form>
          </li>
          <li>
            <img src={require("../images/geinspireerd.png")} />
            <p>Kunstenaars</p>
            <form>
              <input
                defaultChecked
                type="checkbox"
                name="kunstenaars"
                defaultValue="kunstenaars"
                id="kunstenaars"
              />
            </form>
          </li>
          <li>
            <img src={require("../images/time.svg")} />
            <p>Tijd</p>
            <form>
              <input
                defaultChecked
                type="checkbox"
                name="tijd"
                defaultValue="tijd"
                id="tijd"
              />
            </form>
          </li>
        </ul>
        <Link to={`/fin`}>
          <button className="btn-full">Start de tour </button>
        </Link>
      </div>
    );
  }
}

export default Stap5;
