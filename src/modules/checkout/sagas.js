import 'regenerator-runtime/runtime';
import { takeLatest, call } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import api from '../../../mock/apiMock';

import actions from './actions';

function* startPayment({ payload }) {
  try {
    const { data, summaryId } = payload;
    yield call(api.saveIdentification, data, summaryId);
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
