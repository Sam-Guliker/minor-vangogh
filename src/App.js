import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/Home";
import Overzicht from "./components/Overzicht";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

import Stap1 from "./components/Stap1";
import Stap2 from "./components/Stap2";
import Stap3 from "./components/Stap3";
import Stap4 from "./components/Stap4";
import Stap5 from "./components/Stap5";
import Fin from "./components/Fin";

const App = () => (
  <div className="app">
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Stap1" component={Stap1} />
          <Route path="/Stap2" component={Stap2} />
          <Route path="/Stap3" component={Stap3} />
          <Route path="/Stap4" component={Stap4} />
          <Route path="/Stap5" component={Stap5} />
          <Route path="/overzicht" component={Overzicht} />
          <Route path="/fin" component={Fin} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </main>
  </div>
);

export default App;
