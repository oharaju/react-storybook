import React from 'react';
import PropTypes from 'prop-types';
import { BadgeColors } from'./styles.js';

export default function Badge ({state, children}) {
  return(<BadgeColors state={state}>{children}</BadgeColors>)
}

Badge.propTypes = {
  /**
   * Nome dentro do badge
   */
  children: PropTypes.string.isRequired,
  /**
   * Estado do badge
   */
  state: PropTypes.string.isRequired,
};