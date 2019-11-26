import React from 'react';
import TaskCard from './TaskCard';
import NoData from './NoData';

const TaskList = ({ tasks, onDelete, onToggleComplete, isLoading, isEditing, isDeleting }) => {
  if (isLoading) {
    return (
      <div className="content">
        <div className="fa-2x notification">
          <i className="fas fa-circle-notch fa-spin" /> Loading Data
        </div>
      </div>
    );
  }
  if (!tasks.length) {
    return <NoData />;
  }

  return tasks.map(task => (
    <TaskCard
      key={task.id}
      {...task}
      onDelete={onDelete}
      onToggleComplete={onToggleComplete}
      isEditing={isEditing}
      isDeleting={isDeleting}
    />
  ));
};

export default TaskList;
