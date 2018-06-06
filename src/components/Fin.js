import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

class Fin extends Component {
  render() {
    return (
      <div className="container">
        <Header name="Fin" />
        <h2>De test is afgelopen, bedankt voor uw tijd!</h2>
      </div>
    );
  }
}

export default Fin;
