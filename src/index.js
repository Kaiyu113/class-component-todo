import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
ReactDOM.render(
  //负责传store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
