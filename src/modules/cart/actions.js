import { createAction } from 'redux-actions';

import {
  ADD,
  DELETE,
} from './types';

export const addToCart = createAction(ADD);

const actions = {
  addToCart,
  deleteItem: createAction(DELETE),
};

export default actions;
