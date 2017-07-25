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
  selectItem: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

const Item = ({ item, selectItem, addToCart }) => (
  <div className="item-list__item">
    <div className="item-list__item-body">
      <div className="item-list__item-image">
        <img
          src={item.thumbnail}
          title={item.name}
          alt=""
        />
      </div>
      <div className="item-list__item-description">
        <h4> { item.name } </h4>
        <span>Price: ${ item.price }</span>
        <span>{ item.category }</span>
        <p> { item.shortDescription } </p>
        <div className="item-list__item-footer">
          <button type="button" className="item-list__info" onClick={() => selectItem()}>
            More info
          </button>
          <button
            type="button"
            onClick={addToCart}
            className="item-list__cart-icon"
          />
        </div>
      </div>
    </div>
  </div>
);

Item.propTypes = propTypes;

export default Item;
