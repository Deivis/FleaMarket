import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { withRouter } from 'react-router-dom';

import actions from '../actions';
import Main from './Main';

const { submit, fetchRequest } = actions;

const selector = formValueSelector('signup');

const mapStateToProps = ({ payment, ...state }) => ({
  ...payment,
  type: selector(state, 'type') || 'card',
  card: {
    cvc: selector(state, 'cardCVC') || 0,
    expiry: selector(state, 'cardExpire') || 9999,
    name: selector(state, 'cardName') || '',
    number: selector(state, 'cardNumber') || '',
  },
});

export default withRouter(connect(mapStateToProps,
  {
    onSubmit: submit,
    getSummary: fetchRequest,
  })(Main));
