import React from 'react';
import PropTypes from 'prop-types';

import Nav from 'Nav';

const Wrapper = props => (
  <div className="wrapper">
    <Nav />
    {props.children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
