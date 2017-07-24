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
  history: PropTypes.shape({}),
  match: PropTypes.shape({}),
};

const defaultProps = {
  item: null,
  history: null,
  match: null,
};

class Main extends PureComponent {

  componentDidMount() {
    const { item, getItem, match } = this.props;
    if (!item) {
      getItem(match.params.id);
    }
  }

  handleBack() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { item, isFetching } = this.props;
    return (
      <div className="item__container">
        {
          item &&
          <div>
            <div className="item__header">
              <button onClick={() => this.handleBack()} className="item__button-back" />
              <h2 className="item_title" >{item.name}</h2>
            </div>
            <div className="item__body">
              <image className="item__picture" />
              <div>
                <span className="item__price">
                  Price: $ {item.price}
                </span>
                <button
                  onClick={() => 'wololo'}
                  className="item__button-add"
                >
                  Add to cart
                </button>
                <div className="item__about-seller">
                  <h5>About seller {item.seller.name}</h5>
                  <p>{item.aboutSeller}</p>
                </div>
              </div>
            </div>
            <div className="item__product-description">
              <h5>Product description</h5>
              <p>{item.description}</p>
            </div>
          </div>
        }
        {
          isFetching &&
          <div className="item__loading">
            <span className="item__loading-icon" />
          </div>
        }
      </div>
    );
  }
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
