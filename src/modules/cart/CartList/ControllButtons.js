import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  onFinish: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

const ControllButtons = ({ onBack, onFinish }) => (
  <div className="cart__controll-buttons">
    <button onClick={onBack}> Back to shopping </button>
    <button onClick={onFinish}> Finish shopping </button>
  </div>
);

ControllButtons.propTypes = propTypes;

export default ControllButtons;
