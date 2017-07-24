import { handleActions } from 'redux-actions';

import {
  ADD_TO_CART,
  FETCH_REQUEST,
  FETCH_RESPONSE,
  FETCH_ERROR_RESPONSE,
} from './types';

const initialState = {
  item: null,
  isFetching: true,
  cartItems: [],
};

const addToCart = (state, { payload }) => Object.assign({}, state, {
  cartItems: state.cartItems.concat([payload]),
});

const fetchRequest = (state, { payload }) => Object.assign({}, state, {
  isFetching: !!(payload),
});

const fetchErrorResponse = (state, { payload, error }) => Object.assign({}, state, {
  isFetching: false,
  error: payload || error,
});

const fetchResponse = (state, { payload, error }) => Object.assign({}, state, {
  isFetching: false,
  item: payload.data || payload,
  error: error ? payload : null,
});

const handler = {
  [ADD_TO_CART]: addToCart,
  [FETCH_REQUEST]: fetchRequest,
  [FETCH_RESPONSE]: fetchResponse,
  [FETCH_ERROR_RESPONSE]: fetchErrorResponse,
};

export default handleActions(handler, initialState);
