import React from 'react';
import { Route, Router, hashHistory } from 'react-router';
import AddMembers from './containers/AddMembers';

export default (
  <div>
    <Router  history={hashHistory}>
          <Route path="group-link/:groupLink" component={AddMembers} />
    </Router>
  </div>
)
