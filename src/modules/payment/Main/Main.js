import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss';

import FormNotification from '../../../components/FormNotification';
import validate from './validate';
import normalizeCreditCard from '../../../utils/normalize/creditCard';
import normalizeCardExpiration from '../../../utils/normalize/cardExpiration';
import List from './ItemList';
import './Main.scss';

const itemShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  quantity: PropTypes.number,
  available: PropTypes.number,
  seller: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  description: PropTypes.string,
  image: PropTypes.string,
  thumbnail: PropTypes.string,
});

const summaryShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(itemShape),
  total: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string,
  complement: PropTypes.string,
  zipcode: PropTypes.string,
});

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  summary: summaryShape,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  card: PropTypes.shape({
    cvc: PropTypes.number,
    expiry: PropTypes.number,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  getSummary: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {
  summary: null,
  error: '',
  card: null,
};

class Payment extends PureComponent {

  componentDidMount() {
    const { summary, match, getSummary } = this.props;
    if (!summary) {
      getSummary(match.params.id);
    }
  }

  render() {
    const {
      summary,
      onSubmit,
      isFetching,
      pristine,
      isSubmitting,
      handleSubmit,
      error,
      type,
      card,
      history,
    } = this.props;
    const isCard = type === 'card';
    const focused = card.cvc ? 'cvc' : '';
    return (
      <div className="payment centrilized-content">
        { isSubmitting && <div className="payment__orvelay"> Saving payment </div> }
        {
          summary &&
          <div>
            <div className="payment__summary centrilized-content">
              <h4> Summary </h4>
              <span>Customer {summary.name} </span>
              <span>
                Address: {summary.address}
                {summary.complement && `, ${summary.complement}`}
              </span>
              <span>Zip code {summary.zipcode} </span>
              {
                summary.items && summary.items instanceof Array &&
                <List items={summary.items} total={summary.total} />
              }
            </div>
            <form
              onSubmit={handleSubmit(data => onSubmit({ data, summary, replace: history.replace }))}
              className="checkout__form"
            >
              {
                isCard &&
                <div className="payment__card">
                  <div className="payment_card-info">
                    <Field
                      name="cardNumber"
                      type="text"
                      component="input"
                      label="Credit card"
                      placeholder="Card number"
                      normalize={normalizeCreditCard}
                    />
                    <Field
                      name="cardName"
                      type="text"
                      component="input"
                      label="Name"
                      placeholder="Name in the card"
                    />
                    <Field
                      name="cardExpire"
                      type="text"
                      component="input"
                      label="Valid thru"
                      placeholder="99/99"
                      normalize={normalizeCardExpiration}
                    />
                    <Field
                      name="cardCvc"
                      type="tel"
                      maxLength={3}
                      component="input"
                      label="Card verification code"
                      placeholder="CVC"
                    />
                  </div>
                  <Cards
                    number={card.number}
                    name={card.name}
                    expiry={card.expiry}
                    cvc={card.cvc}
                    focused={focused}
                  />
                </div>
              }
              <div className="form__buttons">
                <button className="btn" disabled={pristine || isSubmitting} type="submit" >
                  Continue
                </button>
              </div>
              {error && <FormNotification message={error} type="error" />}
            </form>
          </div>
        }
        {
          isFetching && <span>Loading</span>
        }
      </div>
    );
  }
}

Payment.propTypes = propTypes;
Payment.defaultProps = defaultProps;

export default reduxForm({
  form: 'payment',
  validate,
})(Payment);
