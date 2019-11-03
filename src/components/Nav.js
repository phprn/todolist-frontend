import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="header-section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <Link to="/tasks/add" className="button">
            <span className="icon">
              <i className="fas fa-plus" />
            </span>
            <span>Add Task</span>
          </Link>
        </div>
        <div className="column">
          <div className="field">
            <p className="control has-icons-right">
              <input className="input" type="text" placeholder="Find a task" />
              <span className="icon is-right">
                <i className="fas fa-search" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Nav;
