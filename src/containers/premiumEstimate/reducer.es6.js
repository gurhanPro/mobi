import * as types from '../../lib/actionTypes.es6';

export const initialState = {
  groupProducts: null,
  quote: null,
  errors: null,
  loader: false,
};

export default function britamQuoteReducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_QUOTE_IN_STATE_REQUEST':
      return { ...state, quote: action.payload };

    case types.GET_GROUP_PRODUCTS_REQUEST:
      return { ...state, loading: true, errors: null, groupProducts: null };

    case types.GET_GROUP_PRODUCTS_SUCCESS:
      return { ...state, loading: true, groupProducts: action.payload };

    case types.GET_GROUP_PRODUCTS_FAILURE:
      return { ...state, loading: true, errors: action.payload };

    default:
      return state;
  }
}
