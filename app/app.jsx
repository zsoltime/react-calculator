import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Wrapper from 'Wrapper';
import About from 'About';
import Calculator from 'Calculator';
import 'styles';

render(
  <Router basename={'/'}>
    <Wrapper>
      <Route exact path="/" component={Calculator} />
      <Route path="/about" component={About} />
    </Wrapper>
  </Router>,
  document.getElementById('app')
);
