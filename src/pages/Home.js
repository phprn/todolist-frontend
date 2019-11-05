import React, { useState, useEffect } from 'react';
import Tasks from '../services/Tasks';
import Nav from '../components/Nav';
import TaskList from '../components/TaskList';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const request = async () => {
      setTasks(await Tasks.list());
    };
    request();
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <TaskList tasks={tasks} />
      </div>
    </>
  );
};

export default Home;
