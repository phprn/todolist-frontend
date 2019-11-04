import React from 'react';
import TaskCard from './TaskCard';
import NoData from './NoData';

const Tasks = ({ tasks }) => {
  if (!tasks.length) {
    return <NoData />;
  }

  return tasks.map(task => <TaskCard key={task.id} {...task} />);
};

export default Tasks;
