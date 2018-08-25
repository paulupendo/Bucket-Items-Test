import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = ({ title }) => <div className="header">{title}</div>;

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
