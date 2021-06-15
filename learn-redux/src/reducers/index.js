import counterReducer from './counter'
import loggedReducer from './IsLogged'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    // counterReducer -> ES6 (counterReducer: counterReducer)
    counter: counterReducer,
    isLogged: loggedReducer,
})

export default allReducers