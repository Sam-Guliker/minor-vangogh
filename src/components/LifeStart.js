import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import data from "../data/data.js";
import Modal from "./Modal";

class LifeStart extends Component {
  state = {
    selectedOption: true,
    activeModal: false
  };

  handleOptionChange = changeEvent => {
    const targetValue = JSON.parse(changeEvent.target.value);
    this.setState({
      selectedOption: targetValue
    });
    data[0].answer = targetValue;
    console.log(data[0].answer);
  };

  modal = () => {
    this.setState({
      activeModal: true
    });
  };

  render() {
    return (
      <div>
        <Modal
          name="icon"
          onClosedModal={this.modal}
          active={this.state.activeModal}
        />
        <div className="container">
          <Header name="Step 1" />
          <h2>
            The ground floor. This is where van Gogh started with making his own
            identity.
          </h2>
          <div className="gallery">
            <img src={require("../images/zelfportrait-1.jpg")} />
            <img src={require("../images/portrait-2.jpg")} />
            <img src={require("../images/zelfportrait-3.jpg")} />
          </div>
          <section>
            <label className={this.state.selectedOption ? "active-btn" : ""}>
              <input
                name="option-1"
                type="radio"
                value={true}
                className="section-btn"
                checked={this.state.selectedOption === true}
                onChange={this.handleOptionChange}
              />
              Add category
            </label>
            <label
              className={
                this.state.selectedOption === false ? "active-btn" : ""
              }
            >
              <input
                name="option-1"
                type="radio"
                value={false}
                className="section-btn"
                checked={this.state.selectedOption === false}
                onChange={this.handleOptionChange}
              />
              Do not add category
            </label>
          </section>
          <Link to={`/Brain`}>
            <button className="btn-full">Next step </button>
          </Link>
          <progress value="32" max="100">
            32%
          </progress>
        </div>
      </div>
    );
  }
}

export default LifeStart;
