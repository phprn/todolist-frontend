import React, { useState, useEffect } from 'react';
import camelcaseKeys from 'camelcase-keys';
import axios from 'axios';
import Nav from '../components/Nav';
import TaskCard from '../components/TaskCard';

const Home = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const request = async () => {
      const { data } = await axios.get('http://localhost:3000/api/v1/tasks');
      setTasks(camelcaseKeys(data.data));
    }
    request()
  }, []);


  return (
    <>
      <Nav />
      <div className="container">
        {tasks.map(task => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>
    </>
  );
};

export default Home;
