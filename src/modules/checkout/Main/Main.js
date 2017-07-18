import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Input from '../../../components/FormInput';
import FormNotification from '../../../components/FormNotification';
import validate from './validate';
import normalizePhone from '../../../utils/normalizePhone';
import normalizeCPF from '../../../utils/normalizeCPF';

const propTypes = {
  formSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

const defaultProps = {
  error: null,
};

const maskCPF = '000.000.000-00';

class Main extends PureComponent {
  handleSubmit() {
    console.log(this.props.formSubmit);
  }
  render() {
    const { formSubmit, submitting, error } = this.props;
    return (
      <div className="checkout">
        <div className="checkout__proccess">
          Identification
        </div>
        <form onSubmit={formSubmit} className="checkout__form">
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
          <div className="form__buttons">
            <button className="btn" disabled={submitting} type="submit" >
              Criar conta
            </button>
          </div>
          {error && <FormNotification message={error} type="error" />}
        </form>
      </div>
    );
  }
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default reduxForm({ form: 'identification', validate })(Main);
