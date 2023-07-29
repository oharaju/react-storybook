import React from 'react';
import PropTypes from 'prop-types';
import { InputForm } from './styles';

export default function Input ({type, placeholder, id, disabled}) {
  return(<InputForm type={type} placeholder={placeholder} id={id} disabled={disabled} />)
}

Input.propTypes = {
  /**
   * Nome dentro do input
   */
  placeholder: PropTypes.string.isRequired,
  /**
   * Tipo do input
   */
  type: PropTypes.oneOf(['text', 'number']).isRequired,
  /**
   * Identificador único
   */
  id: PropTypes.string,
  /**
   * Identificador
   */
  disabled: PropTypes.bool
}

Input.defaultProps = {
  disabled: false
}