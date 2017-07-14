import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const itemShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  quantity: PropTypes.number,
  seller: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  thumbnail: PropTypes.string,
});

const propTypes = {
  items: PropTypes.arrayOf(itemShape),
  selectItem: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const defaultProps = {
  items: null,
};

class ItemList extends PureComponent {
  constructor(props) {
    super(props);
    if (props && !props.items) {
      this.props.getItems();
    }
  }

  render() {
    const { items, selectItem, addToCart, isFetching } = this.props;
    return (
      <ul className="main__item-list">
        {
          !isFetching && items &&
          items.map(item => (
            <li>
              <button onClick={() => selectItem(item.id)}>View item</button>
              {item.name}
              <button onClick={() => addToCart(item.id)}>Add to cart</button>
            </li>
          ))
        }
      </ul>
    );
  }
}

ItemList.propTypes = propTypes;
ItemList.defaultProps = defaultProps;

export default ItemList;
