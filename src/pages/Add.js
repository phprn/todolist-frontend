import React, { useState } from 'react';
import Tasks from '../services/Tasks';
import TaskForm from '../components/TaskForm';

const cleanFields = { title: '', description: '', isCompleted: false };

const Add = () => {
  const [form, setForm] = useState(cleanFields);
  const [isLoading, setIsLoading] = useState(false);

  const onSave = async () => {
    setIsLoading(true);
    await Tasks.create(form);
    setIsLoading(false);
  };

  return (
    <TaskForm title="Add" onSave={onSave} form={form} setForm={setForm} isLoading={isLoading} />
  );
};
export default Add;
