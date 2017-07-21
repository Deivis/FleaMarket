import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as home } from './home';
import { reducer as item } from './item';
import { reducer as cart } from './cart';
import { reducer as checkout } from './checkout';
import { reducer as payment } from './payment';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  home,
  item,
  cart,
  checkout,
  payment,
});

export default rootReducer;
