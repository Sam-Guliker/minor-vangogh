import React, { Component } from "react";
import Header from "./Header";
import FooterButton from "./FooterButton";
import { Link } from "react-router-dom";
import OverviewListItem from "./OverviewListItem";
import themes from "../data/themes";

function checkSelected(selected) {
  const checkSelectedObj = themes.filter(obj => {
    return obj.selected === selected;
  });
  return checkSelectedObj;
}

function showTime() {
  let min = 0;

  for (let i = 0; themes.length > i; i++) {
    if (themes[i].selected === true) {
      min += parseInt(themes[i].time, 10);
    }
  }

  let time = convertMinsToHrsMins(min);

  return time;
}

function convertMinsToHrsMins(mins) {
  let h = Math.floor(mins / 60);
  let m = mins % 60;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  return `${h}:${m}`;
}

class Overview extends Component {
  state = {
    selected: checkSelected(true),
    notSelected: checkSelected(false),
    radio: "radio-1",
    time: showTime()
  };

  UNSAFE_componentWillMount() {
    document.querySelector("body").classList.add("scroll");
  }

  componentWillUnmount() {
    document.querySelector("body").classList.remove("scroll");
  }

  onClickButton = (selected, name) => {
    for (let i = 0; themes.length > i; i++) {
      if (themes[i].name === name) {
        themes[i].selected = selected;
      }
    }

    this.setState({
      selected: checkSelected(true),
      notSelected: checkSelected(false),
      time: showTime()
    });
  };

  render() {
    return (
      <div>
        <Header>
          <Link
            className="back left"
            to={{
              pathname: "/start",
              state: { message: "back" }
            }}
          >
            Back
          </Link>
        </Header>
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
                not selected
              </label>
            </form>
          </nav>
          <ul>
            {this.state.radio === "radio-1"
              ? this.state.selected.map((obj, i) => {
                  return (
                    <OverviewListItem
                      key={i}
                      obj={obj}
                      onClickButton={this.onClickButton}
                      selected={false}
                      type={"no-img"}
                    />
                  );
                })
              : this.state.notSelected.map((obj, i) => {
                  return (
                    <OverviewListItem
                      onClickButton={this.onClickButton}
                      key={i}
                      obj={obj}
                      selected={true}
                      type={"yes-img"}
                    />
                  );
                })}
          </ul>
          <h3>Total time: {this.state.time}</h3>
        </main>
        <FooterButton name="start tour" link="/start" />
      </div>
    );
  }
}

export default Overview;
