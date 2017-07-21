import 'regenerator-runtime/runtime';
import { takeLatest, put, call } from 'redux-saga/effects';

import actions from './actions';
import { items } from './api';

function* getItems({ payload }) {
  try {
    yield put(actions.fetchRequest('items'));
    const { data } = yield call(items, payload);
    yield put(actions.receiveItems(data));
  } catch (error) {
    yield put(actions.fetchErrorResponse(new Error(error.message)));
  }
}

export default function* sagas() {
  yield takeLatest(actions.getItems, getItems);
}
