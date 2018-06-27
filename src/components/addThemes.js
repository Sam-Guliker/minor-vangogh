import React, { Component } from "react";
import Header from "./Header";
import ThemesList from "./ThemesList";
import themes from "../data/themes";
import FooterButton from "./FooterButton";
import { Link } from "react-router-dom";

function handleSelection() {
  let result = 0;

  for (let i = 0; themes.length > i; i++) {
    if (themes[i].selected === true) {
      result += 1;
    }
  }

  return result;
}

class addThemes extends Component {
  state = {
    selected: handleSelection(),
    pop: false,
    time: "00:00"
  };

  handleSelection = (selected, time) => {
    this.setState({
      selected,
      time
    });
  };

  render() {
    return (
      <div>
        <Header selected={this.state.selected} pop={this.state.pop}>
          <Link
            className="back left"
            to={{
              pathname: "/introduction",
              state: { message: "back" }
            }}
          >
            Back
          </Link>
          <Link className="right button-small list" to="/overview">
            Menu
            <span>{this.state.selected}</span>
          </Link>
        </Header>
        <main>
          <ThemesList
            handleSelection={this.handleSelection}
            popButton={this.onClickButton}
            time={this.state.time}
          />
          <div className="loader">
            You've selected all the themes! Review them if you like
          </div>
        </main>
        <FooterButton name="Start tour" link="/map" />
      </div>
    );
  }
}

export default addThemes;
