import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { withRouter } from 'react-router-dom';

import actions from '../actions';
import Main from './Main';

const { submit, fetchRequest } = actions;

const selector = formValueSelector('signup');

const mapStateToProps = state => ({
  summaryId: state.cart ? state.cart.id : '',
  typedId: selector(state, 'typeId'),
});

export default withRouter(connect(mapStateToProps,
  {
    onSubmit: submit,
    getSummary: fetchRequest,
  })(Main));
