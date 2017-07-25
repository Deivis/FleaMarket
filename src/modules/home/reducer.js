import { handleActions } from 'redux-actions';

import {
  SELECT_ITEM,
  FETCH_REQUEST,
  RECEIVE_ITEMS,
  FETCH_ERROR_RESPONSE,
} from './types';

const initialState = {
  items: null,
  isFetching: {
    items: false,
  },
  filter: null,
};

const onSelect = (state, { payload }) => Object.assign({}, state, {
  selectedItem: payload,
});


const fetchRequest = (state, { payload }) => Object.assign({}, state, {
  isFetching: Object.assign({}, state.isFetching, { [payload]: true }),
});

const fetchErrorResponse = (state, { payload, error }) => Object.assign({}, state, {
  isFetching: Object.assign({}, state.isFetching, { [payload]: false }),
  error,
});

const receiveItems = (state, { payload, error }) => Object.assign({}, state, {
  isFetching: Object.assign({}, state.isFetching, { items: false }),
  items: payload.data || payload,
  error: error ? payload : null,
});

const handler = {
  [SELECT_ITEM]: onSelect,
  [FETCH_REQUEST]: fetchRequest,
  [RECEIVE_ITEMS]: receiveItems,
  [FETCH_ERROR_RESPONSE]: fetchErrorResponse,
};

export default handleActions(handler, initialState);
