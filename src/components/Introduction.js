import React, { Component } from "react";
import Header from "./Header";
import FooterButton from "./FooterButton";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Header>
          <Link
            className="back left"
            to={{
              pathname: "/",
              state: { message: "back" }
            }}
          >
            Back
          </Link>
        </Header>
        <main className="introduction">
          <article className="intro-text">
            <h1>Introduction</h1>
            <p>
              With the personal tour you can create your own tour by choosing
              themes that you find interesting
            </p>
          </article>
        </main>
        <FooterButton name="create tour" link="/start" />
      </div>
    );
  }
}

export default Home;
