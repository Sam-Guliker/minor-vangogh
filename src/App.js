import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Introduction from "./components/Introduction";
import AddThemes from "./components/addThemes";
import Selection from "./components/Selection";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/introduction" component={Introduction} />
          <Route exact path="/add" component={AddThemes} />
          <Route exact path="/selection" component={Selection} />
        </div>
      </Router>
    );
  }
}

export default App;
