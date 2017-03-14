import React, { PropTypes } from 'react';

const Display = (props) => {
  const { expression, result } = props;
  return (
    <div className="display">
      <div className="expression">
        {expression}
      </div>
      <div className="result">
        {result}
      </div>
    </div>
  );
};

Display.defaultProps = {
  expression: '',
  result: '0',
};

Display.propTypes = {
  expression: PropTypes.string,
  result: PropTypes.string,
};

export default Display;
