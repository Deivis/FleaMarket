import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import './ItemList.scss';

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
  items: PropTypes.arrayOf(itemShape),
  addToCart: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  history: PropTypes.shape({}),
};

const defaultProps = {
  items: null,
  history: null,
};

class ItemList extends PureComponent {
  constructor(props) {
    super(props);
    if (props && !props.items) {
      this.props.getItems();
    }
  }

  handleSelect(id) {
    const { history } = this.props;
    history.push(`item/${id}`);
  }

  render() {
    const {
        items,
        addToCart,
        isFetching,
    } = this.props;
    return (
      <ul className="item-list">
        {
          !isFetching && items &&
          items.map(item => (
            <li key={item.id} className="item-list__item-container">
              <Item
                item={item}
                selectItem={() => this.handleSelect(item.id)}
                addToCart={() => addToCart(item)}
              />
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
