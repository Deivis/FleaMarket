import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import actions from '../actions';
import Main from './Main';

const { formSubmit } = actions;

const mapStateToProps = ({ cart }) => ({
  summaryId: cart.id,
});

export default withRouter(connect(mapStateToProps,
  {
    formSubmit,
  })(Main));
