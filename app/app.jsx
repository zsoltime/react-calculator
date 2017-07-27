import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from 'About';
import Calculator from 'Calculator';
import Nav from 'Nav';
import 'styles';

const App = () => (
  <Router basename={'/'}>
    <div className="wrapper">
      <Nav />
      <Route exact path="/" component={Calculator} />
      <Route path="/about" component={About} />
      <footer>
        <p className="copyright">Made by <a href="https://zsolti.co">Zsolt Meszaros</a> as part of the <a href="https://www.freecodecamp.com/zsoltime">freeCodeCamp curriculum</a></p>
      </footer>
    </div>
  </Router>
);

export default App;
