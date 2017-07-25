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
};

const Item = ({ item, deleteItem }) => (
  <div className="cart-list__item">
    <div>
      <div className="cart-list__sumary">
        <div className="cart-list__image">
          <img
            src={item.thumbnail}
            title={item.name}
            alt=""
          />
        </div>
        <div className="cart-list__body">
          <div className="cart-list__header">
            <h4>{ item.name }</h4>
            <button
              type="button"
              onClick={deleteItem}
              className="cart-list__delete-button"
            />
          </div>
          <div className="cart-list__info">
            <span>Preço: ${ item.price }</span>
            <span>Total: ${ (item.quantity || 1) * item.price }</span>
          </div>
          <div className="cart-list__description">
            <h5>Descrição do produto:</h5>
            <p> { item.shortDescription } </p>
            <h5> Vendedor:</h5>
            <p> { item.seller.name } </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);


Item.propTypes = propTypes;

export default Item;
