import { createAction } from 'redux-actions';

import {
  ADD,
} from './types';

export const addToCart = createAction(ADD);

const actions = {
  addToCart,
};

export default actions;
