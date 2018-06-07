import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

class Finished extends Component {
  render() {
    return (
      <div className="container">
        <Header name="Finshed" />
        <h2>You've completed the task, thank you for your time</h2>
      </div>
    );
  }
}

export default Finished;
