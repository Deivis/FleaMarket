import React from 'react';
import PropTypes from 'prop-types';
import './FormNotification.scss';

const FormNotification = ({ message, type }) => (
  <span className={`form-notification form-notification--${type}`}>
    {message}
  </span>
);

FormNotification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FormNotification.defaultProps = {
  type: 'success',
};

export default FormNotification;
