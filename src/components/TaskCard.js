import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const TaskCard = () => (
  <>
    <Nav />
    <div className="container">
      <div className="section">
        <div className="card">
          <header className="card-header">
            <div className="card-header-title">
              <span className="tag is-light">#4</span>
              Some Title
            </div>

            <button type="button" className="button button-status">
              <span className="icon">
                <i className="far fa-square"></i>
              </span>
            </button>
          </header>
          <div className="card-content">
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <hr />
              <small>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </small>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              <button type="button" className="button is-danger is-outlined">
                Delete
              </button>
            </div>
            <div className="card-footer-item">
              <Link to="/tasks/edit/1" className="button is-primary is-outlined">
                Edit
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </>
);

export default TaskCard;
