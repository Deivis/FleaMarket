import { handleActions } from 'redux-actions';

import {
  SUBMIT,
  CARD_VALIDATE,
  FETCH_REQUEST,
  FETCH_RESPONSE,
  FETCH_ERROR_RESPONSE,
} from './types';

const initialState = {
  isSubmitting: false,
  summary: null,
  isFetching: true,
  type: 'card',
};

const submit = state => Object.assign({}, state, {
  isSubmitting: true,
});

const validate = state => Object.assign({}, state, {
  validCard: true,
});

const fetchRequest = state => Object.assign({}, state, {
  isFetching: true,
});

const fetchErrorResponse = (state, { payload, error }) => Object.assign({}, state, {
  isFetching: false,
  error: payload || error,
});

const fetchResponse = (state, { payload, error }) => Object.assign({}, state, {
  isFetching: false,
  summary: payload.summary || state.summary,
  error: error ? payload : null,
});

const handler = {
  [SUBMIT]: submit,
  [CARD_VALIDATE]: validate,
  [FETCH_REQUEST]: fetchRequest,
  [FETCH_RESPONSE]: fetchResponse,
  [FETCH_ERROR_RESPONSE]: fetchErrorResponse,
};

export default handleActions(handler, initialState);
