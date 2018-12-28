import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers"

import './main.css';
import App from "./components/App.js";

const middleware = applyMiddleware(logger);
const store = createStore(rootReducer, middleware);

ReactDom.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById("root"));