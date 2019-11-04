import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/tasks/add">
          <Add />
        </Route>
        <Route path="/tasks/edit/:id">
          <Edit />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
