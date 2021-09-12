import * as types from '../../lib/actionTypes.es6';

export function getTokenRequest() {
  return {
    type: types.GET_TOKEN_REQUEST,
  };
}

export function getTokenSuccess(token) {
  return {
    type: types.GET_TOKEN_SUCCESS,
    payload: token
  };
}

export function getTokenFailure(error) {
  return {
    type: types.GET_TOKEN_FAILURE,
    payload: error,

  };
}

export function getGroupByGroupLinkRequest(groupLink) {
  return {
    type: types.GET_GROUP_BY_GROUP_LINK_REQUEST,
    payload: groupLink,
  };
}

export function getGroupByGroupLinkSuccess(group) {
  return {
    type: types.GET_GROUP_BY_GROUP_LINK_SUCCESS,
    payload: group,
  };
}

export function getGroupByGroupLinkFailure(error) {
  return {
    type: types.GET_GROUP_BY_GROUP_LINK_FAILURE,
    payload: error,
  };
}

export function getGroupMembersByGroupIdRequest(groupId) {
  return {
    type: types.GET_GROUP_MEMBERS_BY_GROUP_ID_REQUEST,
    payload: groupId,
  };
}

export function getGroupMembersByGroupIdSuccess(members) {
  return {
    type: types.GET_GROUP_MEMBERS_BY_GROUP_ID_SUCCESS,
    payload: members,
  };
}

export function getGroupMembersByGroupIdFailure(error) {
  return {
    type: types.GET_GROUP_MEMBERS_BY_GROUP_ID_FAILURE,
    payload: error,
  };
}


export function addFamilyToGroupRequest(family) {
  return {
    type: types.ADD_FAMILY_TO_GROUP_REQUEST,
    payload: family,
  };
}

export function addFamilyToGroupSuccess(family) {
  return {
    type: types.ADD_FAMILY_TO_GROUP_SUCCESS,
    payload: family,
  };
}

export function addFamilyToGroupFailure(error) {
  return {
    type: types.ADD_FAMILY_TO_GROUP_FAILURE,
    payload: error,
  };
}


export function saveMemberRequest(member) {
  return {
    type: types.SAVE_MEMBER_REQUEST,
    payload: member,
  };
}


export function resetSavedFamily() {
  return {
    type: types.RESET_SAVED_FAMILY,
  };
}
