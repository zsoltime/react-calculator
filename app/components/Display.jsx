import React, { PropTypes } from 'react';

import FormattedNumber from 'FormattedNumber';

const Display = (props) => {
  const { expression, result } = props;
  return (
    <div className="display">
      <div className="display__expression">
        <span>{expression}</span>
      </div>
      <div className="display__result">
        <FormattedNumber number={result} />
      </div>
    </div>
  );
};

Display.propTypes = {
  expression: PropTypes.string.isRequired,
  result: PropTypes.number.isRequired,
};

export default Display;
