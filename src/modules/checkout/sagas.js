import 'regenerator-runtime/runtime';
import { takeLatest, call } from 'redux-saga/effects';
import api from '../../../mock/apiMock';
import Storage from '../../utils/storage';

import actions from './actions';

function* startPayment({ payload }) {
  try {
    const { push, data, summaryId } = payload;
    const checkout = yield call(api.saveIdentification, data, summaryId);
    const st = new Storage('checkout');
    st.save(checkout);
    push('/');
  } catch (error) {
    console.log(error);
    // TODO: create an action for this error
    // yield put(actions.fetchErrorResponse(new Error(error.message)));
  }
}

export default function* sagas() {
  yield takeLatest(actions.formSubmit, startPayment);
}
