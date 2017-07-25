import React from 'react';
import PropTypes from 'prop-types';
import './FieldNotification.scss';

const FieldNotification = ({ message, type }) => (
  <span className={`field-notification field-notification--${type} field-notification--field`}>
    {message}
  </span>
);

FieldNotification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FieldNotification.defaultProps = {
  type: 'success',
};

export default FieldNotification;
