import React from 'react';
import PropTypes from 'prop-types';

import './Cards.css';

const Card = ({ title, description }) => (
  <div className="card">
    <span>{title}</span> {description}
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Card;
