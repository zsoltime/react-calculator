import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from 'About';
import Calculator from 'Calculator';
import Footer from 'Footer';
import Nav from 'Nav';
import 'styles';

const App = () => (
  <Router basename={'/'}>
    <div className="wrapper">
      <Nav />
      <Route exact path="/" component={Calculator} />
      <Route path="/about" component={About} />
      <Footer />
    </div>
  </Router>
);

export default App;
