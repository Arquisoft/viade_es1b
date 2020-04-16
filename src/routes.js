import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import { LoggedIn, LoggedOut } from "@solid/react";

import {
  Login,
  Welcome,
  Map,
  CreateRoute,
  PageNotFound,
  Friends
} from './containers';
import NavBar from './components/NavBar';

const Routes = () => (
  <HashRouter>
    <div>
      <LoggedIn>
        <NavBar />
        <Switch>
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/map" component={Map} />
          {/* <Route exact path="/upload" component={Upload} /> */}
          <Route exact path="/login" component={Welcome} />
          <Route exact path="/createRoute" component={CreateRoute} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/friends" component={Friends} />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/*" component={PageNotFound} />
          <Redirect to="/"></Redirect>
        </Switch>
      </LoggedIn>
      <LoggedOut>
        <Route exact path="/*" component={Login} />
        {/* <Redirect to="/login"></Redirect> */}
      </LoggedOut>
    </div>
  </HashRouter>
);

export default Routes;
