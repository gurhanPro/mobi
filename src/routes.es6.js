import React from 'react';
import { Route, Router, hashHistory } from 'react-router';
import CreateGroup from './containers/createGroup';
import PremiumEstimate from './containers/premiumEstimate';

export default (
  <div>
    <Router  history={hashHistory}>
          <Route path="/premium-estimate" component={PremiumEstimate} />
          <Route path="/" component={CreateGroup} />
    </Router>
  </div>
);
