import { createStore, combineReducers, applyMiddleware } from 'redux';
// Enable the Redux Dev Tools
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import postmark from './postmark.js';

let reducers = combineReducers({ postmark });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();
