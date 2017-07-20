import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import ControllButtons from './ControllButtons';
import './CartList.scss';

const itemShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  quantity: PropTypes.number,
  available: PropTypes.number,
  seller: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  thumbnail: PropTypes.string,
});

const propTypes = {
  summaryId: PropTypes.string,
  items: PropTypes.arrayOf(itemShape),
  history: PropTypes.shape({}),
  deleteItem: PropTypes.func.isRequired,
};

const defaultProps = {
  items: null,
  summaryId: null,
  history: null,
};

class CartList extends PureComponent {

  handleDelete(id) {
    const { deleteItem } = this.props;
    deleteItem(id);
  }

  hadleBack() {
    const { history } = this.props;
    history.push('/');
  }

  finishSopping() {
    const { history, summaryId } = this.props;
    history.push(`/checkout/${summaryId}`);
  }

  render() {
    const {
        items,
        summaryId,
    } = this.props;
    return (
      <div className="cart">
        <ControllButtons
          onFinish={() => this.finishSopping()}
          onBack={() => this.hadleBack()}
          finishDisabled={!items || !summaryId}
        />
        {
          items &&
          <ul className="cart-list">
            {
              items.map(item => (
                <li key={item.id} className="cart-list__item-container">
                  <Item
                    item={item}
                    changeQuantity={() => this.handleChange(item)}
                    deleteItem={() => this.handleDelete(item.id)}
                  />
                </li>
              ))
            }
          </ul>
        }
        {
          (!items || !items.length) &&
          <div className="cart__empty" >
            <span className="cart__empty-message">
              No items found
            </span>
          </div>
        }
        <ControllButtons
          onFinish={() => this.finishSopping()}
          onBack={() => this.hadleBack()}
          finishDisabled={!items || !summaryId}
        />
      </div>
    );
  }
}

CartList.propTypes = propTypes;
CartList.defaultProps = defaultProps;

export default CartList;
