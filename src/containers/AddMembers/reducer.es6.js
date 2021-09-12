import * as types from '../../lib/actionTypes.es6';

export const initialState = {
  token: null,
  tokenError: null,

  group: null,
  groupError: null,

  groupMembers: null,
  groupMembersError: null,

  family: null,
  familyError: null,

  addedFamily: [],
  loader: false,

};

export default function addMembersReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_TOKEN_REQUEST:
      return { ...state, loader: true };
    case types.GET_TOKEN_SUCCESS:
      return {
        ...state,
        loader: false,
        token: action.payload,
      };

    case types.GET_TOKEN_FAILURE:
      return {
        ...state,
        loader: false,
        tokenError: action.payload,
      };

    case types.GET_GROUP_BY_GROUP_LINK_REQUEST:
      return { ...state, loader: true };
    case types.GET_GROUP_BY_GROUP_LINK_SUCCESS:
      return {
        ...state,
        loader: false,
        group: action.payload,
      };

    case types.GET_GROUP_BY_GROUP_LINK_FAILURE:
      return {
        ...state,
        loader: false,
        groupError: action.payload,
      };

    case types.GET_GROUP_MEMBERS_BY_GROUP_ID_REQUEST:
      return { ...state, loader: true };
    case types.GET_GROUP_MEMBERS_BY_GROUP_ID_SUCCESS:
      return {
        ...state,
        loader: false,
        groupMembers: action.payload,
      };

    case types.GET_GROUP_MEMBERS_BY_GROUP_ID_FAILURE:
      return {
        ...state,
        loader: false,
        groupMembersError: action.payload,
      };

    case types.ADD_FAMILY_TO_GROUP_REQUEST:
      return { ...state, loader: true };
    case types.ADD_FAMILY_TO_GROUP_SUCCESS:
      return {
        ...state,
        loader: false,
        family: action.payload,
      };

    case types.ADD_FAMILY_TO_GROUP_FAILURE:
      return {
        ...state,
        loader: false,
        familyError: action.payload,
      };


    case types.SAVE_MEMBER_REQUEST:
      return {
        ...state,
        ...addMember(state, action.payload)
      };

    case types.RESET_SAVED_FAMILY:
      console.log('in reducer reset family');
      return {
        ...state,
        ...resetAddedFamily()
      };
    default:
      return state;
  }
}

function resetAddedFamily() {
  let addedFamily = []
  return { addedFamily }
}

function addMember(state, member) {
  let addedFamily = state.addedFamily
  addedFamily.push(member);
  return { addedFamily }
}


