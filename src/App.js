import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Home from "./components/Home";
import AddThemes from "./components/addThemes";
import detailTheme from "./components/detailTheme";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={AddThemes} />
          <Route exact path="/details/:name" component={detailTheme} />
        </div>
      </Router>
    );
  }
}

export default App;
