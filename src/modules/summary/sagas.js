import 'regenerator-runtime/runtime';
import { takeLatest, call, put } from 'redux-saga/effects';
import api from './api';

import actions from './actions';

function* getPaymentSummary({ payload }) {
  try {
    const payment = yield call(api.getPaymentSummary, payload);
    yield put(actions.fetchResponse({ payment }));
  } catch (error) {
    yield put(actions.fetchResponseError(error));
  }
}

export default function* sagas() {
  yield takeLatest(actions.fetchRequest, getPaymentSummary);
}
