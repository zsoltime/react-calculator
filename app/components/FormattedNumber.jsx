import React from 'react';
import PropTypes from 'prop-types';

// TODO: check if toLocaleString() is supported by browser
// damn you IE

const FormattedNumber = (props) => {
  const { number, locales } = props;
  const settings = {
    maximumFractionDigits: 10,
  };

  if (typeof number !== 'number') {
    // maybe try to parse it?
    throw new TypeError('The FormattedNumber component only accepts numbers');
  }
  return (
    <span>{number.toLocaleString(locales, settings)}</span>
  );
};

FormattedNumber.defaultProps = {
  locales: false,
};

FormattedNumber.propTypes = {
  number: PropTypes.number.isRequired,
  locales: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.array,
  ]),
};

export default FormattedNumber;
