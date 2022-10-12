import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loginReducer } from './reducers/loginReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  user: loginReducer,
});

let initialState = {};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
