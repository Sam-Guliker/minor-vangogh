import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AddItem from "./components/AddItem";
import Example from "./components/Example";
import IndexItem from "./components/IndexItem";
import EditItem from "./components/EditItem";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={IndexItem} />
          <Route path="/example" component={Example} />
          <Route path="/add-item" component={AddItem} />
          <Route path="/index" component={IndexItem} />
          <Route path="/edit/:id" component={EditItem} />
        </div>
      </Router>
    );
  }
}

export default App;
