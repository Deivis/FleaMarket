import { connect } from 'react-redux';
import actions from '../actions';
import Main from './Main';

const { addToCart, fetchRequest } = actions;

const mapStateToProps = ({ item }) => ({ ...item });

export default connect(mapStateToProps, { addToCart, getItem: fetchRequest })(Main);
