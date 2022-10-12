import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loginReducer } from './reducers/loginReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  user: loginReducer,
});

let initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
