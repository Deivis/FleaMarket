import 'regenerator-runtime/runtime';
import { fork, all } from 'redux-saga/effects';

import { sagas as homeSagas } from './modules/home';
import { sagas as itemSagas } from './modules/item';
import { sagas as checkoutSagas } from './modules/checkout';
import { sagas as paymentSagas } from './modules/payment';

export function* rootSaga() {
  yield all([
    fork(homeSagas),
    fork(itemSagas),
    fork(checkoutSagas),
    fork(paymentSagas),
  ]);
}
