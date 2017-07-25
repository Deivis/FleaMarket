import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

const propTypes = {
  history: PropTypes.shape({}).isRequired,
  itemsInCart: PropTypes.number.isRequired,
};

class Header extends PureComponent {

  handleClick(path) {
    const { history } = this.props;
    if (!path) {
      history.replace('/');
    }
    history.push(path);
  }

  render() {
    const { itemsInCart } = this.props;
    return (
      <header className="header">
        <button className="header__title" onClick={() => this.handleClick()} >Flea market</button>
        <div className="header__cart">
          <button onClick={() => this.handleClick('/cart')} className="header__cart-button" />
          <span className="header__counter"> { itemsInCart } </span>
        </div>
      </header>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
