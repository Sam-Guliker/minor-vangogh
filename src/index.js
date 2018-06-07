import React from "react";
import ReactDOM from "react-dom";
import "./css/style.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";

ReactDOM.render(
  <Router basename="/">
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
