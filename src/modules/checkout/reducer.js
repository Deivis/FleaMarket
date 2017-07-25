import { handleActions } from 'redux-actions';

import {
  SUBMIT,
} from './types';

const initialState = {
  submitting: false,
};

const formSubmit = state => Object.assign({}, state, {
  submitting: true,
});

const handler = {
  [SUBMIT]: formSubmit,
};

export default handleActions(handler, initialState);
