import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  summary: PropTypes.shape({}),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  getSummary: PropTypes.func.isRequired,
};

const defaultProps = {
  summary: null,
};

class Payment extends PureComponent {

  componentDidMount() {
    const { summary, match, getSummary, onSubmit } = this.props;
    if (!summary) {
      getSummary(match.params.id, onSubmit);
    }
  }

  render() {
    return (
      <h1>
        Not implemented
      </h1>
    );
  }
}

Payment.propTypes = propTypes;
Payment.defaultProps = defaultProps;

export default Payment;
