import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1>TODO</h1>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/tasks/add" className="button is-primary">
              <span className="icon">
                <i className="fas fa-plus" />
              </span>
              <span>Add Task</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
