import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import axios from 'axios';

import reducers from './reducers';
function App(props) {
  return (
    <h1>hello</h1>
  );
}

const middleware = applyMiddleware(promise(), thunk, logger); // logger()로 파라미터를 넘기는걸로 동영상에는 나오는데, 그렇게하면 에러난다.. 왜?

const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState());
});
// objects. Use custom middleware for async actions.
store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://rest.learncode.academy/api/wstern/users")
});

export default App;
