import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

import ThemesList from "./ThemesList";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="tours">
          <ul>
            <li>
              <Link className="button" to="/add">
                Personal Tour
              </Link>
              <span />
            </li>
            <li>
              <Link className="button" to="/add">
                Highlight Tour
              </Link>
              <span />
            </li>
            <li>
              <Link className="button" to="/add">
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
