import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  onFinish: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  finishDisabled: PropTypes.bool.isRequired,
};

const ControllButtons = ({ onBack, onFinish, finishDisabled }) => (
  <div className="cart__controll-buttons">
    <button
      onClick={onBack}
      className="button--default"
    >
      Back to shopping
    </button>
    <button
      onClick={onFinish}
      disabled={finishDisabled}
      className="button"
    >
      Finish shopping
    </button>
  </div>
);

ControllButtons.propTypes = propTypes;

export default ControllButtons;