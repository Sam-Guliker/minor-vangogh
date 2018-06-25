import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Introduction from "./components/Introduction";
import AddThemes from "./components/addThemes";
import Overview from "./components/Overview";
import Map from "./components/Map";

import { TransitionGroup, CSSTransition } from "react-transition-group";

const childFactoryCreator = classNames => child =>
  React.cloneElement(child, {
    classNames
  });

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup
            component={null}
            childFactory={childFactoryCreator(
              location.state ? "page-back" : "page"
            )}
          >
            <CSSTransition
              key={location.key}
              classNames={location.state ? "page-back" : "page"}
              timeout={500}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/introduction" component={Introduction} />
                <Route exact path="/start" component={AddThemes} />
                <Route exact path="/overview" component={Overview} />
                <Route exact path="/Map" component={Map} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default withRouter(App);
