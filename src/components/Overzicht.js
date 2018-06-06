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
            Het Begin
            <form>
              <input
                defaultChecked
                type="checkbox"
                name="begin"
                value="begin"
                id="begin"
              />
            </form>
          </li>
          <li>
            Het Brein{" "}
            <form>
              <input
                defaultChecked
                type="checkbox"
                name="begin"
                value="begin"
                id="begin"
              />
            </form>
          </li>
          <li>
            Persoonlijk leven{" "}
            <form>
              <input
                defaultChecked
                type="checkbox"
                name="begin"
                value="begin"
                id="begin"
              />
            </form>
          </li>
          <li>
            Kunstenaars{" "}
            <form>
              <input
                defaultChecked
                type="checkbox"
                name="begin"
                value="begin"
                id="begin"
              />
            </form>
          </li>
          <li>
            Tijd{" "}
            <form>
              <input
                defaultChecked
                type="checkbox"
                name="begin"
                value="begin"
                id="begin"
              />
            </form>
          </li>
        </ul>
        <Link to={`/fin`}>
          <button>Start de tour </button>
        </Link>
      </div>
    );
  }
}

export default Stap5;
