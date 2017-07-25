import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './Header';

const mapStateToProps = ({ cart }) => ({
  itemsInCart: cart.items ? cart.items.length : 0,
});

export default withRouter(connect(mapStateToProps, {})(Header));
