import { take, call, put } from 'redux-saga/effects';
import * as types from '../../lib/actionTypes.es6';
import {
    getGroupProducts,
} from '../../lib/requests.es6';
import * as actions from './actions.es6';


export function* getGroupProductsRequestWatcher() {
  while (yield take(types.GET_GROUP_PRODUCTS_REQUEST)) {
    try {
      const response = yield call(getGroupProducts);
      yield put(actions.getGroupProductsSuccess(response.data));
    } catch (e) {
      yield put(
        actions.getGroupProductsFailed(
          'An error occurred, this could be due to invalid data '
        )
      );
    }
  }
}
