import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import FooterButton from "./FooterButton";

class Overview extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="overview">
          <h1>Theme's</h1>
          <nav>
            <form>
              <input name="selected" type="radio" id="selected" />
              <label htmlFor="selected"> selected</label>
              <input name="notSelected" type="radio" id="notSelected" />
              <label htmlFor="notSelected"> not selected</label>
            </form>
          </nav>
          <ul>
            <li>
              <div>
                <h2 className="item-title">title name</h2>
                <p>
                  <img src={require("../images/clock.svg")} /> 0:15
                </p>
              </div>
              <button />
            </li>
          </ul>
          <h3>Total time: 45:00</h3>
        </main>
        <FooterButton name="start tour" link="/start" />
      </div>
    );
  }
}

export default Overview;
