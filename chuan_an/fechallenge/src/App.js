import "./App.css";
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";

import Details from "./Details";
import Form from "./Form";

function App() {
  let routes;

  routes = (
    <Switch>
      <Route path="/" exact>
        <Form />
      </Route>
      <Route path="/details" exact>
        <Details />
      </Route>
    </Switch>
  );

  return (
    <div className="App">
      <Router>
        <main>{routes}</main>
      </Router>
    </div>
  );
}

export default App;
