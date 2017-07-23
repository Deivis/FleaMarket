import 'regenerator-runtime/runtime';
import { takeLatest, call, put } from 'redux-saga/effects';
import api from './api';

import actions from './actions';

function* getSummary({ payload }) {
  try {
    const summary = yield call(api.getSummary, payload);
    yield put(actions.fetchResponse({ summary }));
  } catch (error) {
    yield put(actions.fetchResponseError(error));
  }
}

function* submit({ payload }) {
  try {
    const payment = yield call(api.createPayment, payload);
    debugger;
    yield put(actions.fetchResponse({ payment }));
  } catch (error) {
    debugger;
    yield put(actions.fetchResponseError(error));
  }
}

export default function* sagas() {
  yield takeLatest(actions.fetchRequest, getSummary);
  yield takeLatest(actions.submit, submit);
}
