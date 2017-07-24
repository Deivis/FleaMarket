import { handleActions } from 'redux-actions';

import {
  FETCH_REQUEST,
  FETCH_RESPONSE,
  FETCH_ERROR_RESPONSE,
} from './types';

const initialState = {
  payment: null,
  isFetching: true,
};

const fetchRequest = state => Object.assign({}, state, {
  isFetching: true,
});

const fetchErrorResponse = (state, { payload, error }) => Object.assign({}, state, {
  isFetching: false,
  error: payload || error,
});

const fetchResponse = (state, { payload, error }) => Object.assign({}, state, {
  isFetching: false,
  payment: payload.payment || state.payment,
  error: error ? payload : null,
});

const handler = {
  [FETCH_REQUEST]: fetchRequest,
  [FETCH_RESPONSE]: fetchResponse,
  [FETCH_ERROR_RESPONSE]: fetchErrorResponse,
};

export default handleActions(handler, initialState);
