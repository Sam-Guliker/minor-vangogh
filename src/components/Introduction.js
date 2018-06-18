import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="introduction">
          <article>
            <h1>Introduction</h1>
            <p>Select theme’s that you like to make your own tour!</p>
          </article>
        </main>
        <Link className="buttonStart" to="/start">
          create tour
        </Link>
      </div>
    );
  }
}

export default Home;
