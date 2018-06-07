import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

import LifeStart from "./components/LifeStart";
import Brain from "./components/Brain";
import Personal from "./components/Personal";
import LastYears from "./components/LastYears";
import Time from "./components/Time";
import Overview from "./components/Overview";
import Finished from "./components/Finished";

const App = props => (
  <div className="app">
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/lifestart" component={LifeStart} />
          <Route path="/brain" component={Brain} />
          <Route path="/personal" component={Personal} />
          <Route path="/lastYears" component={LastYears} />
          <Route path="/time" component={Time} />
          <Route path="/overview" component={Overview} />
          <Route path="/finished" component={Finished} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </main>
  </div>
);

export default App;
