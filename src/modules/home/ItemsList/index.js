import { connect } from 'react-redux';
import actions from '../actions';

import ItemList from './ItemList';

const { selectItem, addToCart, getItems } = actions;

const mapStateToProps = ({ home }) => ({
  items: home.items,
  isFetching: home.isFetching && home.isFetching.items,
});

export default connect(mapStateToProps, { selectItem, addToCart, getItems })(ItemList);
