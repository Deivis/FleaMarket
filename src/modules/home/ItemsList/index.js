import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import actions from '../actions';
import { addToCart } from '../../cart/actions';
import ItemList from './ItemList';

const { selectItem, getItems } = actions;

const mapStateToProps = ({ home }) => ({
  items: home.items,
  isFetching: home.isFetching && home.isFetching.items,
});

export default withRouter(connect(mapStateToProps,
  {
    selectItem,
    addToCart,
    getItems,
  })(ItemList));
