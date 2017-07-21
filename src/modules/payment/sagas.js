import 'regenerator-runtime/runtime';
import { takeLatest, call, put } from 'redux-saga/effects';
import api from './api';

import actions from './actions';

// TODO: continue here, something is wrong
function* getSummary({ payload }) {
  try {
    const summary = yield call(api.getSummary, payload);
    yield put(actions.fetchResponse(summary));
  } catch (error) {
    yield put(actions.fetchResponseError(new Error('Usuário ou senha inválidos')));
  }
}

export default function* sagas() {
  yield takeLatest(actions.fetchRequest, getSummary);
}
