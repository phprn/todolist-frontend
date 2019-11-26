import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Tasks from '../services/Tasks';
import TaskForm from '../components/TaskForm';

const cleanFields = { title: '', description: '', isCompleted: false };

const Edit = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [form, setForm] = useState(cleanFields);

  useEffect(() => {
    const request = async () => {
      const data = await Tasks.get(id);

      setForm(data);
      setIsLoading(false);
    };
    request();
  }, []);

  const onSave = async form => {
    setIsLoading(true);
    await Tasks.edit(id, form);
    setIsLoading(false);
  };

  return (
    <TaskForm
      title="Edit"
      onSave={onSave}
      form={form}
      setForm={setForm}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      isEdit
    />
  );
};

export default Edit;
