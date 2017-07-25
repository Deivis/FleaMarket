import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Main.scss';

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
  images: PropTypes.arrayOf(PropTypes.string),
});

const propTypes = {
  getItem: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  item: itemShape,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

const defaultProps = {
  item: null,
  history: null,
  match: null,
};

class Main extends PureComponent {

  componentDidMount() {
    const { item, getItem, match } = this.props;
    if (!item || item.id !== match.params.id) {
      getItem(match.params.id);
    }
  }

  handleBack() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { item, isFetching, addToCart } = this.props;
    return (
      <div className="item__container">
        {
          item && !isFetching &&
          <div>
            <div className="item__header">
              <button
                onClick={() => this.handleBack()}
                className="button--default"
              >
                Back to shop
              </button>
              <h2 className="item_title" >{item.name}</h2>
            </div>
            <div className="item__body">
              <img className="item__picture" src={item.images[0]} alt="" />
              <div>
                <span className="item__price">
                  Price: $ {item.price}
                </span>
                <button
                  onClick={() => addToCart(item)}
                  className="button"
                >
                  Add to cart
                </button>
                <div className="item__about-seller">
                  <h4>About seller {item.seller.name}</h4>
                  <p>{item.aboutSeller}</p>
                </div>
              </div>
            </div>
            <div className="item__product-description">
              <h3>Product description</h3>
              <p>{item.description}</p>
            </div>
          </div>
        }
        {
          isFetching &&
          <div className="loading-overlay">
            <span className="loader" />
          </div>
        }
      </div>
    );
  }
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
