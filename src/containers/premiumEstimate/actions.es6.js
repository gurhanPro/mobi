import * as types from '../../lib/actionTypes.es6';


export function saveQuoteInStateRequest(quote) {
  return {
    type: 'SAVE_QUOTE_IN_STATE_REQUEST',
    payload: quote,
  };
}


export function getGroupProductsRequest() {
  return {
    type: types.GET_GROUP_PRODUCTS_REQUEST,
  };
}

export function getGroupProductsSuccess(response) {
  return {
    type: types.GET_GROUP_PRODUCTS_SUCCESS,
    payload: response,
  };
}

export function getGroupProductsFailed(error) {
  return {
    type: types.GET_GROUP_PRODUCTS_FAILURE,
    payload: error,
  };
}


export function createGroupClaimCallBackRequest(msisdn) {
  return {
    type: types.CREATE_GROUP_CLAIM_CALLBACK_REQUEST,
    payload: msisdn
  };
}

export function createGroupClaimCallBackSuccess(response) {
  return {
    type: types.CREATE_GROUP_CLAIM_CALLBACK_SUCCESS,
    payload: response,
  };
}

export function createGroupClaimCallBackFailed(error) {
  return {
    type: types.CREATE_GROUP_CLAIM_CALLBACK_FAILURE,
    payload: error,
  };
}

export function resetCreateGroupClaimCallBack() {
  return {
    type: types.RESET_CREATE_GROUP_CLAIM_CALLBACK,
  };
}
