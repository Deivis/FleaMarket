import 'regenerator-runtime/runtime';
import { takeLatest, call } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { saveIdentification } from './api';

import actions from './actions';

function* startPayment({ payload }) {
  try {
    const { data, summaryId, push } = payload;
    yield call(saveIdentification, data, summaryId);
    push(`/checkout/${summaryId}/payment`);
  } catch (error) {
    throw new SubmissionError({
      payload,
      _error: error,
    });
  }
}

export default function* sagas() {
  yield takeLatest(actions.formSubmit, startPayment);
}
