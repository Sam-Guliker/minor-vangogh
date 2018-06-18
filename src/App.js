import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Introduction from "./components/Introduction";
import AddThemes from "./components/addThemes";
import Overview from "./components/Overview";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/introduction" component={Introduction} />
          <Route exact path="/start" component={AddThemes} />
          <Route exact path="/overview" component={Overview} />
        </div>
      </Router>
    );
  }
}

export default App;
