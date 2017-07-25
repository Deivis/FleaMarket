import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import actions from '../actions';
import Main from './Main';

const { fetchRequest } = actions;
const mapStateToProps = (state, { location }) => {
  if (location.state && location.state.summary) {
    return Object.assign({},
      state.summary,
      location.state.summary);
  }

  return state.summary;
};

export default connect(mapStateToProps,
  {
    getPaymentSummary: fetchRequest,
  })(withRouter(Main));
