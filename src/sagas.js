import 'regenerator-runtime/runtime';
import { fork, all } from 'redux-saga/effects';

import { sagas as homeSagas } from './modules/home';

export function* rootSaga() {
  yield all([
    fork(homeSagas),
  ]);
}
