import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import TaskCard from './components/TaskCard';
import Add from './pages/Add';
import Edit from './pages/Edit';
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
          <TaskCard />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
