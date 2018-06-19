import React, { Component } from "react";
import Header from "./Header";
import FooterButton from "./FooterButton";

import themes from "../data/themes";

function checkSelected(selected) {
  const checkSelectedObj = themes.filter(obj => {
    return obj.selected === selected;
  });
  console.log(checkSelectedObj);
  return checkSelectedObj;
}

class Overview extends Component {
  state = {
    selected: checkSelected(true),
    notSelected: checkSelected(false),
    radio: "radio-1"
  };

  render() {
    console.log(this.state.selected);
    return (
      <div>
        <Header />
        <main className="overview">
          <h1>Theme's</h1>
          <nav>
            <form>
              <input
                name="select"
                type="radio"
                id="selected"
                checked={this.state.radio === "radio-1"}
                value="radio-1"
                onChange={e => this.setState({ radio: e.target.value })}
              />
              <label
                className={
                  this.state.radio === "radio-1" ? "selected" : undefined
                }
                htmlFor="selected"
              >
                {" "}
                selected
              </label>
              <input
                name="select"
                type="radio"
                id="notSelected"
                value="radio-2"
                checked={this.state.radio === "radio-2"}
                onChange={e => this.setState({ radio: e.target.value })}
              />
              <label
                className={
                  this.state.radio === "radio-2" ? "selected" : undefined
                }
                htmlFor="notSelected"
              >
                {" "}
                not selected
              </label>
            </form>
          </nav>
          <ul>
            {this.state.radio === "radio-1"
              ? this.state.selected.map((obj, i) => {
                  return (
                    <li
                      style={{
                        backgroundImage: `url(${obj.src}`
                      }}
                      key={i}
                    >
                      {obj.name}
                      <div>
                        <h2 className="item-title">{obj.name}</h2>
                        <p>
                          <img src={require("../images/clock.svg")} /> 0:15
                        </p>
                      </div>
                      <button />
                    </li>
                  );
                })
              : this.state.notSelected.map((obj, i) => {
                  return (
                    <li
                      style={{
                        backgroundImage: `url(${obj.src}`,
                        backgroundPosition: "center center"
                      }}
                      key={i}
                    >
                      <div>
                        <h2 className="item-title">{obj.name}</h2>
                        <p>
                          <img src={require("../images/clock.svg")} /> 0:15
                        </p>
                      </div>
                      <button />
                    </li>
                  );
                })}
          </ul>
          <h3>Total time: 45:00</h3>
        </main>
        <FooterButton name="start tour" link="/start" />
      </div>
    );
  }
}

export default Overview;
