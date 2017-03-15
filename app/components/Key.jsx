import React, { PropTypes } from 'react';

const Key = (props) => {
  const { className, type, value } = props;
  function handleClick(e) {
    props.onClickEvent(e.target.dataset.value);
  }
  const classNames = className ? `keypad__btn ${className}` : 'keypad__btn';
  return (
    <button
      className={classNames}
      data-type={type}
      data-value={value}
      onClick={handleClick}
    >{props.children}</button>
  );
};

Key.defaultProps = {
  className: '',
  type: 'number',
};

Key.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClickEvent: PropTypes.func.isRequired,
};

export default Key;
