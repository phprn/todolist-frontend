import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons';

const TaskCard = ({
  id,
  title,
  description,
  isCompleted,
  createdAt,
  onDelete,
  onToggleComplete,
  isEditing,
  isDeleting,
}) => (
  <div className="card">
    <header className="card-header">
      <div className="card-header-title">
        <span className="tag is-light">#{id}</span>
        {title}
      </div>

      <button
        type="button"
        className="button button-status"
        disabled={isEditing}
        onClick={onToggleComplete(id, isCompleted)}
      >
        <span className="icon">
          <FontAwesomeIcon
            icon={isEditing ? 'spinner' : isCompleted ? faCheckSquare : faSquare}
            spin={isEditing}
          />
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
        <button
          type="button"
          className="button is-danger is-outlined"
          disabled={isDeleting}
          onClick={onDelete({ id, title })}
        >
          {isDeleting ? (
            <>
              <span className="icon">
                <FontAwesomeIcon icon="spinner" spin />
              </span>
              <span>Deleting</span>
            </>
          ) : (
            'Delete'
          )}
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
