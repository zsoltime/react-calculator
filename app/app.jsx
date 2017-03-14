import React from 'react';
import { render } from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import Wrapper from 'Wrapper';
import About from 'About';
import Calculator from 'Calculator';

require('applicationStyles');

render(
  <Router history={browserHistory}>
    <Route path="/" component={Wrapper}>
      <Route path="about" component={About} />
      <IndexRoute component={Calculator} />
    </Route>
  </Router>,
  document.getElementById('app'),
);
