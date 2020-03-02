import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./components/Login/Login";

const App = (props) => {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React. Developed using Docker.
        </a>

       

      </header>
    </div>
  );*/

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" render={props => <Login {...props}/>}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default (App);
