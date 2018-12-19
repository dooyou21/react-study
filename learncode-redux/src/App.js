import React from 'react';
import {createStore} from 'redux';
import reducers from './reducers';
function App(props) {
  return (
    <h1>hello</h1>
  );
}

const store = createStore(reducers);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: "Will"});
store.dispatch({type: "CHANGE_AGE", payload: 26});
store.dispatch({type: "TWEETS", payload: "asdf"});

export default App;
