import React from 'react';
import PropTypes from 'prop-types';
import { BadgeColors } from'./styles.js';

export default function Badge ({state, children}) {
  return(<BadgeColors state={state}>{children}</BadgeColors>)
}

Badge.propTypes = {
  children: PropTypes.string.isRequired,
  state: PropTypes.string,
};

Badge.defaultProps = {
  disabled: false
};
