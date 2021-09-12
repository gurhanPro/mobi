import * as types from '../../lib/actionTypes.es6';
import { take, call, put } from 'redux-saga/effects';
import { getToken, getGroupByGroupLink, getGroupMembersbyGroupId, addFamilyToGroup } from '../../lib/requests.es6';
import * as actions from './actions.es6';


export function* getTokenRequestWatcher() {
  while (yield take(types.GET_TOKEN_REQUEST)) {
    try {
      const response = yield call(getToken);
      yield put(actions.getTokenSuccess(response.data));
      localStorage.setItem('auth', JSON.stringify(response.data));
    } catch (e) {
      yield put(
        actions.getTokenFailure(
          'An error occurred, this could be due to invalid data '
        )
      );
    }
  }
}

export function* getGroupByGroupLinkRequestWatcher() {
  while (true) {
    const requestAction = yield take(types.GET_GROUP_BY_GROUP_LINK_REQUEST);
    try {
      const tokenResponse = yield call(getToken);
      yield put(actions.getTokenSuccess(tokenResponse.data));
      yield localStorage.setItem('auth', JSON.stringify(tokenResponse.data));
      const pay = {
        groupLink: requestAction.payload,
        token: tokenResponse.data
      }
      const response = yield call(getGroupByGroupLink, pay);
      yield put(actions.getGroupByGroupLinkSuccess(response.data));
    } catch (e) {
      yield put(
        actions.getGroupByGroupLinkFailure(
         "error"
        )
      );
    }
  }
}

export function* getGroupMembersByGroupIdRequestWatcher() {
  while (true) {
    const requestAction = yield take(types.GET_GROUP_MEMBERS_BY_GROUP_ID_REQUEST);
    try {

      const response = yield call(getGroupMembersbyGroupId, requestAction.payload);
      yield put(actions.getGroupMembersByGroupIdSuccess(response.data));
    } catch (e) {
      yield put(
        actions.getGroupMembersByGroupIdFailure(
          'An error occurred, this could be due to invalid data '
        )
      );
    }
  }
}

export function* addFamilyToGroupRequestWatcher() {
  while (true) {
    const requestAction = yield take(types.ADD_FAMILY_TO_GROUP_REQUEST);
    try {

      const response = yield call(addFamilyToGroup, requestAction.payload);
      yield put(actions.addFamilyToGroupSuccess(response.data));
    } catch (e) {
      yield put(
        actions.addFamilyToGroupFailure(
          'An error occurred, this could be due to invalid data '
        )
      );
    }
  }
}