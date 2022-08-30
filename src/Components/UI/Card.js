import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
const Card = (props) => {
  const classes = `card ${props.className}`;
  const { children } = props;
  return <div className={classes}>{children}</div>;
};

Card.prototype = {
  classes: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Card;
