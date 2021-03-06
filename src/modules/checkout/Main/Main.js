import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Input from '../../../components/FormInput';
import FormNotification from '../../../components/FormNotification';
import validate from './validate';
import normalizePhone from '../../../utils/normalize/phone';
import normalizePersonID from '../../../utils/normalize/personID';
import normalizeDate from '../../../utils/normalize/date';
import normalizeZipCode from '../../../utils/normalize/zipcode';

import './Main.scss';
import '../../../styles/form.scss';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  error: PropTypes.string,
  summaryId: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {
  error: null,
  history: null,
};

const maskZipCode = '00000-000';
const maskID = '000.000.000-00';
const maskDate = 'dd/mm/aaaa';

class IdentificationFrom extends PureComponent {
  render() {
    const { handleSubmit, submitting, pristine, error, onSubmit, summaryId, history } = this.props;
    return (
      <div className="checkout centrilized-content">
        <div className="checkout__proccess">
          Identificação
        </div>
        <form
          onSubmit={handleSubmit(data => onSubmit({ data, summaryId, push: history.push }))}
          className="checkout__form"
        >
          <label htmlFor="name" className="form__label">Nome</label>
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
          <label htmlFor="phone" className="form__label">Telefone</label>
          <Field
            id="phone"
            name="phone"
            type="text"
            inputClass="form__input"
            normalize={normalizePhone}
            component={Input}
            placeholder="(00) 0000-00000"
          />
          <label htmlFor="personID" className="form__label">CPF</label>
          <Field
            id="personID"
            name="personID"
            type="text"
            inputClass="form__input"
            normalize={normalizePersonID}
            component={Input}
            placeholder={maskID}
          />
          <label htmlFor="birthday" className="form__label">Data de nascimento</label>
          <Field
            id="birthday"
            name="birthday"
            type="text"
            inputClass="form__input"
            normalize={normalizeDate}
            component={Input}
            placeholder={maskDate}
          />
          <div className="checkout__address">
            <label htmlFor="address" className="form__label">Endereço</label>
            <Field
              type="text"
              id="address"
              name="address"
              inputClass="form__input"
              component={Input}
            />
            <label htmlFor="complement" className="form__label">Complemento</label>
            <Field
              type="text"
              id="complement"
              name="Complement"
              inputClass="form__input"
              component={Input}
            />
            <label htmlFor="zipcode" className="form__label">CEP</label>
            <Field
              type="text"
              id="zipcode"
              name="zipcode"
              inputClass="form__input"
              normalize={normalizeZipCode}
              component={Input}
              placeholder={maskZipCode}
            />
          </div>
          <div className="form__buttons">
            <button className="button" disabled={pristine || submitting} type="submit" >
              Continuar
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

export default reduxForm({
  form: 'identification',
  validate,
})(IdentificationFrom);
