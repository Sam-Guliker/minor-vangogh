import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

class Overview extends Component {
  render() {
    return (
      <div className="container">
        <Header name="Overview" />
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
            <p>The Brain</p>
            <form>
              <input
                defaultChecked
                type="checkbox"
                name="brain"
                defaultValue="brain"
                id="brain"
              />
            </form>
          </li>
          <li>
            <img src={require("../images/ear.jpg")} />
            <p>Personal Life</p>
            <form>
              <input
                defaultChecked
                type="checkbox"
                name="ear"
                defaultValue="ear"
                id="ear"
              />
            </form>
          </li>
          <li>
            <img src={require("../images/geinspireerd.png")} />
            <p>Artists</p>
            <form>
              <input
                defaultChecked
                type="checkbox"
                name="artists"
                defaultValue="artists"
                id="artists"
              />
            </form>
          </li>
          <li>
            <img src={require("../images/time.svg")} />
            <p>Time</p>
            <form>
              <input
                defaultChecked
                type="checkbox"
                name="time"
                defaultValue="time"
                id="timetijd"
              />
            </form>
          </li>
        </ul>
        <Link to={`/finished`}>
          <button className="btn-full">Start the tour </button>
        </Link>
      </div>
    );
  }
}

export default Overview;
