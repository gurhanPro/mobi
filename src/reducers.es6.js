/*
 * Combine all reducers in this file and export the combined reducers.
 */
import * as redux from 'redux';
import addMembersReducer from './containers/AddMembers/reducer.es6.js';
import britamQuoteReducer from './containers/premiumEstimate/reducer.es6.js'



// Return a function to create the main reducer
export default function createReducer() {
  // connecting the explorer page state/store to its corresponding reducer
  return redux.combineReducers({
    britamQuote: britamQuoteReducer,
    addMembers: addMembersReducer,
  });
}
