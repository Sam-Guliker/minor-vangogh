import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="start">
          <h1>Start your personal tour</h1>
          <p>Choose from different themes and compose your tour yourself!</p>
          <Link className="button" to="/add">
            Start
          </Link>
        </main>
      </div>
    );
  }
}

export default Home;
