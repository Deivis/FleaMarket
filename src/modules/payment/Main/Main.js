import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss';

import FormNotification from '../../../components/FormNotification';
import validate from './validate';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  summary: PropTypes.shape({}),
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
      submitting,
      handleSubmit,
      error,
      type,
      card,
    } = this.props;
    const isCard = type === 'card';

    // TODO: CONTINUE HERE !!! FINISH THIS FORM

    return (
      <div className="payment centrilized-content">
        {
          summary &&
          <div>
            <div />
            <form
              onSubmit={handleSubmit(data => onSubmit({ data, summary }))}
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
                    />
                    <Field
                      name="cardCvc"
                      type="text"
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
                    callback={this.handleCallback}
                  />
                </div>
              }
              <div className="form__buttons">
                <button className="btn" disabled={pristine || submitting} type="submit" >
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
