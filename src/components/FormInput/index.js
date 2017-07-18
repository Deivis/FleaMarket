import React from 'react';
import PropTypes from 'prop-types';

import './FormInput.scss';
import FieldNotification from '../FieldNotification/';

const Input = ({
  input,
  type,
  inputClass,
  id,
  placeholder,
  meta: { touched, error, warning },
}) => (
  <div className="from-input__field">
    <input {...input} className={inputClass} type={type} id={id} placeholder={placeholder} />
    {touched &&
      ((error && <FieldNotification type="error" message={error} />) ||
        (warning && <FieldNotification type="warning" message={warning} />))}
  </div>
);

Input.defaultProps = {
  placeholder: null,
};

Input.propTypes = {
  input: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({}).isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Input;
