import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

import reducers from './reducers';
function App(props) {
  return (
    <h1>hello</h1>
  );
}
/*
const middle = (store) => (next) => (action) => {
  // next(action);
}
*/
const middleware = applyMiddleware(thunk, logger);

const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: "Will"});
store.dispatch({type: "CHANGE_AGE", payload: 26});
store.dispatch({type: "TWEETS", payload: "asdf"});
// store.dispatch({type: "ERROR", payload: "asdf"}); Actions must be plain
// objects. Use custom middleware for async actions.
store.dispatch((dispatch) => {
  dispatch({type: "FETCH_USERS_START"});
  axios
    .get("http://rest.learncode.academy/api/wstern/users")
    .then((response) => {
      dispatch({type: "RECEIVE_USERS", payload: response.data});
    })
    .catch((err) => {
      dispatch({type: "FETCH_USERS_ERROR", payload: err});
    });
  //do something async
});

export default App;
