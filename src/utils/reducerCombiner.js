import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { reducer as home } from '../modules/home';

const rootReducer = combineReducers({
  routing: routerReducer,
  home,
});

export default rootReducer;
