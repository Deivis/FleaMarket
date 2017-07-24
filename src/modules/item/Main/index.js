import { connect } from 'react-redux';
import actions from '../actions';
import Main from './Main';

const { addToCart, fetchRequest } = actions;

const mapStateToProps = ({ item, home }) => ({ ...item, items: home.items });

export default connect(mapStateToProps, { addToCart, getItem: fetchRequest })(Main);
