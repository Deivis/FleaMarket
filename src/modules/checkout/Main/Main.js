import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Input from '../../../components/FormInput';
import FormNotification from '../../../components/FormNotification';
import validate from './validate';
import normalizePhone from '../../../utils/normalize/phone';
import normalizeCPF from '../../../utils/normalize/cpf';
import normalizeDate from '../../../utils/normalize/date';

import './Main.scss';
import '../../../styles/form.scss';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  error: PropTypes.string,
  history: PropTypes.shape({}),
  summaryId: PropTypes.string.isRequired,
};

const defaultProps = {
  error: null,
  history: null,
};

const maskCPF = '000.000.000-00';
const maskDate = 'dd/mm/aaaa';

class IdentificationFrom extends PureComponent {
  render() {
    const { handleSubmit, submitting, pristine, error, onSubmit, history, summaryId } = this.props;
    return (
      <div className="checkout">
        <div className="checkout__proccess">
          Identification
        </div>
        <form
          onSubmit={handleSubmit(data => onSubmit({ data, push: history.push, summaryId }))}
          className="checkout__form"
        >
          <label htmlFor="name" className="form__label">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            inputClass="form__input"
            component={Input}
          />
          <label htmlFor="email" className="form__label">E-mail</label>
          <Field
            type="text"
            id="email"
            inputClass="form__input"
            name="email"
            component={Input}
          />
          <label htmlFor="phone" className="form__label">Phone</label>
          <Field
            id="phone"
            name="phone"
            type="text"
            inputClass="form__input"
            normalize={normalizePhone}
            component={Input}
            placeholder="(00) 0000-00000"
          />
          <label htmlFor="code" className="form__label">CPF</label>
          <Field
            id="code"
            name="code"
            type="text"
            inputClass="form__input"
            normalize={normalizeCPF}
            component={Input}
            placeholder={maskCPF}
          />
          <label htmlFor="birthday" className="form__label">Birthday</label>
          <Field
            id="birthday"
            name="birthday"
            type="text"
            inputClass="form__input"
            normalize={normalizeDate}
            component={Input}
            placeholder={maskDate}
          />
          <div className="form__buttons">
            <button className="btn" disabled={pristine || submitting} type="submit" >
              Continue
            </button>
          </div>
          {error && <FormNotification message={error} type="error" />}
        </form>
      </div>
    );
  }
}

IdentificationFrom.propTypes = propTypes;
IdentificationFrom.defaultProps = defaultProps;

export default reduxForm({ form: 'identification', validate })(IdentificationFrom);
