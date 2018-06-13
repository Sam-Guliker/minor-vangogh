import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import data from "../data/data";

class Overview extends Component {
  beginning = React.createRef();
  brain = React.createRef();
  personal = React.createRef();
  artists = React.createRef();
  time = React.createRef();

  clickTest = () => {
    console.log(this.brain);
  };

  render() {
    return (
      <div className="container">
        <Header name="Overview" />
        <ul class="overview-list">
          <li>
            <h2>Het begin</h2>
            <form>
              <input
                ref={this.beginning}
                type="checkbox"
                name="beginning"
                defaultValue={true}
                id="beginning"
              />
            </form>
          </li>
          <li>
            <h2>The Brain</h2>
            <form>
              <input
                ref={this.brain}
                type="checkbox"
                name="brain"
                defaultValue={true}
                id="brain"
              />
            </form>
          </li>
          <li>
            <h2>Personal Life</h2>
            <form>
              <input
                ref={this.personal}
                defaultChecked
                type="checkbox"
                name="ear"
                defaultValue={true}
                id="ear"
              />
            </form>
          </li>
          <li>
            <h2>Artists</h2>
            <form>
              <input
                ref={this.artists}
                defaultChecked
                type="checkbox"
                name="artists"
                defaultValue={true}
                id="artists"
              />
            </form>
          </li>
          <li>
            <h2>Time</h2>
            <form>
              <input
                ref={this.time}
                defaultChecked
                type="checkbox"
                name="time"
                defaultValue={true}
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
