import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
function App(props) {
  return (
    <h1>hello</h1>
  );
}

const logger = (store) => (next) => (action) => {
  console.log('action fired', action);
  next(action);
}

const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.error("AHHHHH!!!", e);
  }
}

const middleware = applyMiddleware(logger, error);

const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: "Will"});
store.dispatch({type: "CHANGE_AGE", payload: 26});
store.dispatch({type: "TWEETS", payload: "asdf"});
store.dispatch({type: "ERROR", payload: "asdf"});

export default App;
