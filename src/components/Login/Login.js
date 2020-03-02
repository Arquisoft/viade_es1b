import React from "react";
import {AuthButton, LoggedIn} from '@solid/react'
import { logIn } from "./Authentication";

function Login(props) {
  //console.log(props);
  return (
    <div id="container">
      <h1 data-testid="login-header">Login</h1>
      <AuthButton popup="https://solid.github.io/solid-auth-client/dist/popup.html" />
      <LoggedIn>
          <p>Buena!</p>
          
      </LoggedIn>
      
    </div>
  );
}

export default Login