/*
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers.es6';
import rootSaga from './rootSaga.es6';

// we use redux-sagas to work with asynchronous actions
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export function to configure our redux store with middleware
export default function configureStore() {
  // router-redux middleware
  const routerReduxMiddleware = routerMiddleware(hashHistory);

  const store = createStore(
    createReducer(),
    composeEnhancers(
      applyMiddleware(routerReduxMiddleware),
      applyMiddleware(sagaMiddleware)
    )
  );

  // start running all sagas composed in the rootSaga
  sagaMiddleware.run(rootSaga);
console.log('store', store);
  return store;
}

export const store = configureStore();
