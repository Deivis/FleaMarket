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
  summaryId: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(itemShape),
  isFetching: PropTypes.bool.isRequired,
  history: PropTypes.shape({}),
  deleteItem: PropTypes.func.isRequired,
};

const defaultProps = {
  items: null,
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
    history.push(`/payment/${summaryId}`);
  }

  render() {
    const {
        items,
        isFetching,
    } = this.props;
    return (
      <div>
        <ControllButtons
          onFinish={() => this.finishSopping()}
          onBack={() => this.hadleBack()}
        />
        {
          !isFetching && items &&
          <ul className="item-list">
            {
              items.map(item => (
                <li key={item.id} className="item-list__item-container">
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
          isFetching && <div className="cart__loading" ><span className="loading" /> </div>
        }
        <ControllButtons
          onFinish={() => this.finishSopping()}
          onBack={() => this.hadleBack()}
        />
      </div>
    );
  }
}

CartList.propTypes = propTypes;
CartList.defaultProps = defaultProps;

export default CartList;
