import React from 'react';
import { Route, Router, hashHistory } from 'react-router';
import AddDependant from './components/AddDependant';
import AddPrincipal from './components/AddPrincipal';
import FamilyTable from './components/FamilyTable';
import CreateGroup from './containers/createGroup';
import PremiumEstimate from './containers/premiumEstimate';
// import CreateGroupCo  from './components/CreateGroup';

export default (
  <div>
    <Router  history={hashHistory}>
          <Route path="/premium-estimate" component={PremiumEstimate} />
          {/* <Route path="/" component={CreateGroupCo} /> */}
          <Route path="/create-group" component={CreateGroup} />
          <Route path="/addPrincipal" component={AddPrincipal} />
          <Route path="/addDependant" component={AddDependant} />
          <Route path="/" component={FamilyTable} />
    </Router>
  </div>
);
