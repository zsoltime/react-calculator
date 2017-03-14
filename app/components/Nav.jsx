import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => (
  <div>
    <IndexLink to="/">Home</IndexLink>
    <Link to="/about">About</Link>
  </div>
);

export default Nav;
