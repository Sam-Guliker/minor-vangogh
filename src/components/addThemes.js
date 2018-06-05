import React, { Component } from "react";
import Header from './Header';
import ThemesList from './ThemesList';

class addThemes extends Component {
  render() {
    return (
      <div>
        <Header/>
          <h2>Voeg items toe</h2>
        <ThemesList/>
      </div>
    );
  }
}

export default addThemes;
