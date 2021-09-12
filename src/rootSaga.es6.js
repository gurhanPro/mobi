import { getTokenRequestWatcher, getGroupByGroupLinkRequestWatcher, getGroupMembersByGroupIdRequestWatcher, addFamilyToGroupRequestWatcher } from './containers/AddMembers/saga.es6';
import { getGroupProductsRequestWatcher,  } from './containers/premiumEstimate/saga.es6';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    getGroupProductsRequestWatcher(),
    getGroupByGroupLinkRequestWatcher(),
    getGroupMembersByGroupIdRequestWatcher(),
    getTokenRequestWatcher(),
    addFamilyToGroupRequestWatcher(),
  ];
}

