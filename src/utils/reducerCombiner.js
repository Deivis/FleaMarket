import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { reducer as home } from '../modules/home';
import { reducer as item } from '../modules/item';
import { reducer as cart } from '../modules/cart';

const rootReducer = combineReducers({
  routing: routerReducer,
  home,
  item,
  cart,
});

export default rootReducer;
