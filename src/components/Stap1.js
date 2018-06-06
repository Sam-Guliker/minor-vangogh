import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

class Stap1 extends Component {
  state = {
    selectedOption: "begin_van"
  };

  handleOptionChange = changeEvent => {
    console.log(changeEvent.target.value);
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <Header name="Stap 1" />
        <p>Bent u benieuwd in het begin van het leven van Gogh.</p>
        <img src={require("../images/paintingpallet.jpeg")} />
        <section>
          <label
            className={
              this.state.selectedOption === "begin_van" ? "active-btn" : ""
            }
          >
            <input
              name="optie-1"
              type="radio"
              value="begin_van"
              className="section-btn"
              checked={this.state.selectedOption === "begin_van"}
              onChange={this.handleOptionChange}
            />
            Toevoegen
          </label>
          <label
            className={
              this.state.selectedOption === "eind_van" ? "active-btn" : ""
            }
          >
            <input
              name="optie-1"
              type="radio"
              value="eind_van"
              className="section-btn"
              checked={this.state.selectedOption === "eind_van"}
              onChange={this.handleOptionChange}
            />
            Niet toevoegen
          </label>
        </section>
        <Link to={`/Stap2`}>
          <button className="btn">Volgende stap </button>
        </Link>
        <progress value="32" max="100">
          32%
        </progress>
      </div>
    );
  }
}

export default Stap1;
