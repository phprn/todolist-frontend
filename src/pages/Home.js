import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import TaskList from '../components/TaskList';
import TaskAPI from '../services/Tasks';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
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
        setIsDeleting(true);
        await TaskAPI.destroy(id);
        setTasks(tasks.filter(item => item.id !== id));
        setIsDeleting(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onToggleComplete = (id, isCompleted) => async () => {
    try {
      setIsEditing(true);
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
      setIsEditing(false);
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
            isEditing={isEditing}
            isDeleting={isDeleting}
            onToggleComplete={onToggleComplete}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
