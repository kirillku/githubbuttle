import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
