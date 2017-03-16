import React, { PropTypes } from 'react';
import Nav from 'Nav';

const Wrapper = props => (
  <div>
    <Nav />
    {props.children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
