import { createStore, combineReducers } from 'redux';
// Enable the Redux Dev Tools
import { composeWithDevTools } from 'redux-devtools-extension';

import postmark from './postmark.js';

let reducers = combineReducers({ postmark });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();
