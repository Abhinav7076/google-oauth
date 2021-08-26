import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Succes from './Succes';
import Login from './Login';
const App = () => {






  return (

    <Router>

      <Switch>
        <Route exact path="/">
          <Login />
        </Route>


        <Route path='/success'>
          <Succes />
        </Route>

      </Switch>

    </Router>

  )

}

export default App