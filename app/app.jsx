import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Wrapper from 'Wrapper';
import About from 'About';
import Calculator from 'Calculator';
import 'styles';

const App = () => (
  <Router basename={'/'}>
    <Wrapper>
      <Route exact path="/" component={Calculator} />
      <Route path="/about" component={About} />
    </Wrapper>
  </Router>
);

export default App;
