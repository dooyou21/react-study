import React from 'react';

import {createStore} from 'redux';
const reducer = function (state, action) {
  switch (action.type) {
    case "INC":
      return state + action.payload;
    case "DEC":
      return state - action.payload;
    default:
      console.warn('state type not exist');
      return state;
  }
}

const store = createStore(reducer, 0); //createStore(function 상태변경함수(state, action){}, 초기상태)

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "DEC", payload: 1});

function App(props) {
  console.log(props);
  return (
    <h1>hello</h1>
  );
}

export default App;
