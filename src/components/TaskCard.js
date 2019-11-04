import React from 'react';
import cl from 'classnames';
import { Link } from 'react-router-dom';

const TaskCard = ({ id, title, description, isCompleted, createdAt }) => (
  <div className="card">
    <header className="card-header">
      <div className="card-header-title">
        <span className="tag is-light">#{id}</span>
        {title}
      </div>

      <button type="button" className="button button-status">
        <span className="icon">
          <i className={cl('far', { 'fa-square': !isCompleted, 'fa-check-square': isCompleted })} />
        </span>
      </button>
    </header>
    <div className="card-content">
      <div className="content">
        <p>{description}</p>
        <hr />
        <small>
          <time dateTime="2016-1-1">{createdAt}</time>
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
        <Link to={`/tasks/edit/${id}`} className="button is-primary is-outlined">
          Edit
        </Link>
      </div>
    </footer>
  </div>
);

export default TaskCard;
