import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  recipients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })).isRequired,
  total: PropTypes.number.isRequired,
};

const List = ({ recipients, total }) => (
  <ul className="summary__recipient-list">
    {
      recipients.map(recipient => (
        <li key={recipient.id} className="summary__recipient">
          <span className="summary__recipient-name">
            {recipient.name}
          </span>
          <span className="summary__recipient-received">
            Recebeu: { ((recipient.percentage * total) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
          </span>
        </li>))
    }
  </ul>
);

List.propTypes = propTypes;

export default List;
