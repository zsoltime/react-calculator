import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => (
  <nav role="navigation">
    <ul className="menu">
      <li className="menu__item">
        <IndexLink
          to="/"
          className="menu__link"
          activeClassName="menu__link--active"
        >Home</IndexLink>
      </li>
      <li className="menu__item">
        <Link
          to="/about"
          className="menu__link"
          activeClassName="menu__link--active"
        >About</Link>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="http://zsolti.co">More apps</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
