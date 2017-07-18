import 'regenerator-runtime/runtime';
import { takeLatest, put } from 'redux-saga/effects';

import actions from './actions';

function* startPayment({ payload }) {
  try {
    console.log(payload);
    throw new Error('Not implemented');
  } catch (error) {
    yield put(actions.fetchErrorResponse(new Error(error.message)));
  }
}

export default function* sagas() {
  yield takeLatest(actions.formSubmint, startPayment);
}
