import { handleActions } from 'redux-actions';
import v4 from 'node-uuid';
import Storage from '../../utils/storage';

import {
  ADD,
  DELETE,
} from './types';

const storage = new Storage('cart');

const initialState = {
  items: storage.load(),
};

const addItem = (items = [], item = {}) => {
  let newItems;
  if (items && !items.some(i => i.id === item.id)) {
    newItems = items.concat([item]);
  } else {
    newItems = items;
  }
  return newItems;
};

const updateCart = (items) => {
  const cart = {
    id: v4(),
    items,
  };
  storage.save(cart);
  return cart;
};

const add = (state, { payload }) =>
  Object.assign({}, state, updateCart(addItem(state.items, payload)));

const deleteItem = (state, { payload }) =>
  Object.assign({}, state, updateCart(state.items.filter(item => !item.id === payload)));

const handler = {
  [ADD]: add,
  [DELETE]: deleteItem,
};

export default handleActions(handler, initialState);
