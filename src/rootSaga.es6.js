import { getGroupProductsRequestWatcher } from './containers/premiumEstimate/saga.es6';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  console.log('in root saga');
  yield [
    getGroupProductsRequestWatcher()
  ];
}

