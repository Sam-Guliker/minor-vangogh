import React, { Component } from "react";
import Header from "./Header";
import FooterButton from "./FooterButton";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Header>
          <Link className="back left" to="/">
            Back
          </Link>
        </Header>
        <main className="introduction">
          <article>
            <h1>Introduction</h1>
            <p>Select theme’s that you like to make your own tour!</p>
          </article>
        </main>
        <FooterButton name="create tour" link="/start" />
      </div>
    );
  }
}

export default Home;
