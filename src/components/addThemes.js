import React, { Component } from "react";
import Header from "./Header";
import ThemesList from "./ThemesList";

class addThemes extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <h2>Voeg items toe</h2>
          <ThemesList />
        </main>
      </div>
    );
  }
}

export default addThemes;
