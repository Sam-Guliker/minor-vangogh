import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
