import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import {
  Login,
  Welcome,
  Map
} from './containers';
import UploadComponent from "./containers/Upload";
import NavBar from './components/NavBar';
import DownloadComponent from "./containers/Download";

const Routes = () => (
  <HashRouter>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/upload" component={UploadComponent} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/download" component={DownloadComponent} />
        <Route exact path="/" component={Login} />
        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  </HashRouter>
);

export default Routes;
