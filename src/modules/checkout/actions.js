import { createAction } from 'redux-actions';

import {
  SUBMIT,
} from './types';

const actions = {
  formSubmit: createAction(SUBMIT),
};

export default actions;
