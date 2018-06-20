import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Introduction from "./components/Introduction";
import AddThemes from "./components/addThemes";
import Overview from "./components/Overview";

const App = withRouter(({ location }) => (
  <Switch location={location}>
    <Route exact path="/" component={Home} />
    <Route exact path="/introduction" component={Introduction} />
    <Route exact path="/start" component={AddThemes} />
    <Route exact path="/overview" component={Overview} />
  </Switch>
));

export default App;
