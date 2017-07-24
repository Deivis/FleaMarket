import { createAction } from 'redux-actions';

import {
  ADD_TO_CART,
  FETCH_REQUEST,
  FETCH_RESPONSE,
  FETCH_ERROR_RESPONSE,
} from './types';

const actions = {
  addToCart: createAction(ADD_TO_CART),
  fetchErrorResponse: createAction(FETCH_ERROR_RESPONSE),
  fetchRequest: createAction(FETCH_REQUEST),
  fetchResponse: createAction(FETCH_RESPONSE),
};

export default actions;
