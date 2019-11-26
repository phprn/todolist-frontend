import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import TaskList from '../components/TaskList';
import TaskAPI from '../services/Tasks';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const request = async () => {
      setTasks(await TaskAPI.list());
      setIsLoading(false);
    };
    request();
  }, []);

  const onDelete = ({ id, title }) => async () => {
    if (window.confirm(`Do you really want to delete the ${id}# ${title}`)) {
      try {
        await TaskAPI.destroy(id);
        setTasks(tasks.filter(item => item.id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onToggleComplete = (id, isCompleted) => async () => {
    console.log({ isCompleted });
    try {
      await TaskAPI.edit(id, { isCompleted: !isCompleted });
      setTasks(
        tasks.map(item =>
          item.id === id
            ? {
                ...item,
                isCompleted: !isCompleted,
              }
            : item,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Nav />
      <div className="section">
        <div className="container">
          <TaskList
            tasks={tasks}
            onDelete={onDelete}
            isLoading={isLoading}
            onToggleComplete={onToggleComplete}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
