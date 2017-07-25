import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import List from './RecipientsList';
import './Main.scss';

const propTypes = {
  // TODO: review this shape
  payment: PropTypes.shape({}),
  getPaymentSummary: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {
  payment: null,
};

class Summary extends PureComponent {

  componentDidMount() {
    const { payment, getPaymentSummary, match } = this.props;
    if (!payment) {
      getPaymentSummary(match.params.id);
    }
  }

  render() {
    const { payment, history } = this.props;
    const { items, recipients } = payment.metadata;
    const total = items && items.reduce((prev, next) => prev + (next.price * next.quantity), 0);
    return (
      <div className="summary">
        { payment &&
          <div>
            <h3 className="summary__title"> Payment number { payment.id } </h3>
            { items && recipients &&
              <div className="summary__content">
                <h4> Total payed R${ total } </h4>
                <h3> Payables </h3>
                <List
                  recipients={recipients}
                  total={total}
                />
              </div>
            }
          </div>
        }
        <button
          className="button"
          onClick={() => history.replace('/')}
        >
          Return to shop
        </button>
      </div>
    );
  }
}

Summary.propTypes = propTypes;
Summary.defaultProps = defaultProps;

export default Summary;
