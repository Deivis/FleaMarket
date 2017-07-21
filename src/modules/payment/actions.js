import { createAction } from 'redux-actions';

import {
  SUBMIT,
  FETCH_REQUEST,
  FETCH_RESPONSE,
  FETCH_ERROR_RESPONSE,
} from './types';

const actions = {
  submit: createAction(SUBMIT),
  fetchRequest: createAction(FETCH_REQUEST),
  fetchResponse: createAction(FETCH_RESPONSE),
  fetchResponseError: createAction(FETCH_ERROR_RESPONSE),
};

export default actions;
