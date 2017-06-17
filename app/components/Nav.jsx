import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav role="navigation" className="navigation">
    <ul className="menu">
      <li className="menu__item">
        <NavLink
          exact
          to="/"
          className="menu__link"
          activeClassName="menu__link--active"
        >Calculator</NavLink>
      </li>
      <li className="menu__item">
        <NavLink
          exact
          to="/about"
          className="menu__link"
          activeClassName="menu__link--active"
        >About</NavLink>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="http://zsolti.co">More apps</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
