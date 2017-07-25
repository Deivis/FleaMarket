import { connect } from 'react-redux';
import actions from '../actions';
import { addToCart } from '../../cart/actions';
import Main from './Main';

const { fetchRequest } = actions;

const mapStateToProps = ({ item, home }) => ({ ...item, cartItems: home.items });

export default connect(mapStateToProps, { addToCart, getItem: fetchRequest })(Main);
