import { createAction } from 'redux-actions';

import {
  FETCH_REQUEST,
  FETCH_RESPONSE,
  FETCH_ERROR_RESPONSE,
} from './types';

const actions = {
  fetchRequest: createAction(FETCH_REQUEST),
  fetchResponse: createAction(FETCH_RESPONSE),
  fetchResponseError: createAction(FETCH_ERROR_RESPONSE),
};

export default actions;
