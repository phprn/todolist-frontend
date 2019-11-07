import React, { useState } from 'react';
import Tasks from '../services/Tasks';
import TaskForm from '../components/TaskForm';

const cleanFields = { title: '', description: '' };

const Add = () => {
  const [form, setForm] = useState(cleanFields);

  const onSave = async () => {
    await Tasks.create(form);
  };

  return <TaskForm title="Edit" onSave={onSave} form={form} setForm={setForm} />;
};
export default Add;
