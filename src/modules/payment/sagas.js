import 'regenerator-runtime/runtime';
import { takeLatest, call, put } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import api from './api';

import actions from './actions';

// TODO: continue here, something is wrong
function* getSummary({ payload }) {
  try {
    const summary = yield call(api.getSummary, payload);
    yield put(actions.fetchResponse(summary));
  } catch (error) {
    throw new SubmissionError({
      payload,
      _error: error,
    });
  }
}

export default function* sagas() {
  yield takeLatest(actions.fetchRequest, getSummary);
}
