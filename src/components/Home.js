import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header name="Start" />
        <p>
          De aankomende vragen helpen u om een gepersonaliseerde tour te maken.
        </p>
        <img src={require("../images/vangogh.jpg")} />
        <h2>Van Gogh</h2>
        <Link to={`/Stap1`}>
          <button>Start </button>
        </Link>
        <progress />
      </div>
    );
  }
}

export default Home;
