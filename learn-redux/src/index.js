import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducer from './reducers'; // no need index cuz webpack automatically looks for index

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// 1. store
// 2. action -> 명세, 파라미터 넘겨줌
// 3. reducer -> state를 리턴함 & 작업도 함
// 4. dispatch -> action을 실행


/*import {createStore} from 'redux';

// STORE ( holds all the GLOBALIZED data/states for my app )


// ACTION INCREMENT -> desc what you want to do. modifies store stuff
const increment = () => {
  // action
  return {
    type: 'INCREMENT' // of the action ( type === name)
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT' // of the action ( type === name)
  }
}

// REDUCER -> desc how your action transforms an state to another
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state+1;
    case 'DECREMENT':
      return state-1;
  }
}

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

// DISPATCH -> actually executes the action
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())

*/ // TOO MUCH WORK!!



ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
