import 'regenerator-runtime/runtime';
import { takeLatest, put, call } from 'redux-saga/effects';

import actions from './actions';
import { item } from './api';

function* getItem({ payload }) {
  try {
    const { data } = yield call(item, payload);
    yield put(actions.fetchResponse(data));
  } catch (error) {
    yield put(actions.fetchErrorResponse(new Error(error.message)));
  }
}

export default function* sagas() {
  yield takeLatest(actions.fetchRequest, getItem);
}
