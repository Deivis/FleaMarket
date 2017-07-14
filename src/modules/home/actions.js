import { createAction } from 'redux-actions';

import {
  SELECT_ITEM,
  ADD_TO_CART,
  GET_ITEMS,
  FETCH_REQUEST,
  RECEIVE_ITEMS,
  FETCH_ERROR_RESPONSE,
} from './types';

const actions = {
  selectItem: createAction(SELECT_ITEM),
  addToCart: createAction(ADD_TO_CART),
  getItems: createAction(GET_ITEMS),
  fetchErrorResponse: createAction(FETCH_ERROR_RESPONSE),
  fetchRequest: createAction(FETCH_REQUEST),
  receiveItems: createAction(RECEIVE_ITEMS),
};

export default actions;
