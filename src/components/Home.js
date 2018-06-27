import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="tours">
          <article className="intro-text">
            <h1>Welcome to the multimedia tour of the Van Gogh Museum</h1>
          </article>
          <ul>
            <li>
              <Link className="button" to="/introduction">
                Personal Tour
              </Link>
              <span />
            </li>
            <li>
              <Link className="button" to="#">
                Highlight Tour
              </Link>
              <span />
            </li>
            <li>
              <Link className="button" to="#">
                Free Tour
              </Link>
              <span />
            </li>
          </ul>
        </main>
      </div>
    );
  }
}

export default Home;
