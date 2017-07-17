import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import actions from '../actions';
import List from './List';

const { deleteItem } = actions;

const mapStateToProps = ({ cart }) => ({
  items: cart.items,
  summaryId: cart.id,
});

export default withRouter(connect(mapStateToProps,
  {
    deleteItem,
  })(List));
