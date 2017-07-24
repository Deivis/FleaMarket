import React from 'react';
import PropTypes from 'prop-types';

const itemShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  quantity: PropTypes.number,
  seller: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  description: PropTypes.string,
  image: PropTypes.string,
  thumbnail: PropTypes.string,
});

const propTypes = {
  item: itemShape.isRequired,
  deleteItem: PropTypes.func.isRequired,
  changeQuantity: PropTypes.func.isRequired,
};

const Item = ({ item, deleteItem, changeQuantity }) => (
  <div className="cart-list__item">
    <div className="cart-list__body">
      <div className="cart-list__delete">
        <button
          type="button"
          onClick={deleteItem}
          className="cart-list__delete-button"
        />
      </div>
      <div className="cart-list__sumary">
        <div className="cart-list__image">
          <img
            src={item.thumbnail}
            title={item.name}
            alt=""
          />
        </div>
        <span>{ item.name }</span>
        <span>Quantity:
          <input
            type="number"
            max={item.available}
            value={item.quantity}
            onChange={evt => changeQuantity(evt.target.value)}
          />
        </span>
        <span>Price: ${ item.price }</span>
        <span>Total: ${ (item.quantity || 1) * item.price }</span>
      </div>
      <div className="cart-list__description">
        <p> { item.shortDescription } </p>
        <p> { item.seller.name } </p>
      </div>
    </div>
  </div>
);


Item.propTypes = propTypes;

export default Item;
