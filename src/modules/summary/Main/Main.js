import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import List from './RecipientsList';

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
      <div>
        { payment &&
          <div>
            <h4> Payment number { payment.id } </h4>
            { items && recipients &&
              <div>
                <h5> Total payed R${ total } </h5>
                <h5> Payables </h5>
                <List
                  recipients={recipients}
                  total={total}
                />
              </div>
            }
          </div>
        }
        <button onClick={() => history.replace('/')}> Return to shop </button>
      </div>
    );
  }
}

Summary.propTypes = propTypes;
Summary.defaultProps = defaultProps;

export default Summary;
