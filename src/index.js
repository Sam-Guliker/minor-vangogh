import React from "react";
import ReactDOM from "react-dom";
import "./css/style.min.css";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <Router basename="van-gogh">
    <App />
  </Router>,
  document.getElementById("root")
);
