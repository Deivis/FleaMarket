import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.price,
    })).isRequired,
};

const List = ({ items }) => (
  <ul className="payment__item-list">
    {
      items.map(item => (
        <li key={item.id} className="payment__item">
          <span className="payment__item-name">
            {item.name}
          </span>
          <span className="payment__item-description">
            Preço: <span>R${ item.price * item.quantity }</span>
          </span>
        </li>))
    }
    {
      <li key="paymentTotal" className="payment__item-total">
        Total: R${items.reduce((prev, next) => prev + (next.price * next.quantity), 0)}
      </li>
    }
  </ul>
);

List.propTypes = propTypes;

export default List;
