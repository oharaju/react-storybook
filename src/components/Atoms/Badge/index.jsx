import React from 'react';
import PropTypes from 'prop-types';
import { BadgeColors } from'./styles.js';

export default function Badge ({state, children}) {
  return(<BadgeColors state={state}>{children}</BadgeColors>)
}

Badge.propTypes = {
  /**
   * Badge name
   */
  children: PropTypes.oneOf(['positive', 'negative', 'neutral', 'warning']).isRequired,
  /**
   * Badge status
   */
  state: PropTypes.oneOf(['positive', 'negative', 'neutral', 'warning']).isRequired,
};