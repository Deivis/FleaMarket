import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { withRouter } from 'react-router-dom';

import onlyNumbers from '../../../utils/onlyNumbers';
import actions from '../actions';
import Main from './Main';

const { submit, fetchRequest } = actions;

const selector = formValueSelector('payment');

const mapStateToProps = ({ payment, ...state }) => ({
  ...payment,
  type: selector(state, 'type') || 'card',
  card: {
    cvc: selector(state, 'cardCvc') || 0,
    expiry: onlyNumbers(selector(state, 'cardExpire') || 9999),
    name: selector(state, 'cardName') || '',
    number: onlyNumbers(selector(state, 'cardNumber') || ''),
  },
});

export default withRouter(connect(mapStateToProps,
  {
    onSubmit: submit,
    getSummary: fetchRequest,
  })(Main));
