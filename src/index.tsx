import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from "react-redux";
import { AppStore } from "./core/redux/reduxStore";

ReactDOM.render(
  <Provider store={AppStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
