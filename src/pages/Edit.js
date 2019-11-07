import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Tasks from '../services/Tasks';
import TaskForm from '../components/TaskForm';

const cleanFields = { title: '', description: '', isCompleted: false };

const Edit = () => {
  const { id } = useParams();
  const [isInitialState, setIsInitialState] = useState(true);
  const [form, setForm] = useState(cleanFields);

  useEffect(() => {
    const request = async () => {
      const data = await Tasks.get(id);

      setForm(data);
      setIsInitialState(false);
    };
    request();
  }, []);

  const onSave = async form => {
    await Tasks.edit(id, form);
  };

  return (
    <TaskForm
      title="Edit"
      onSave={onSave}
      form={form}
      setForm={setForm}
      isInitialState={isInitialState}
      isEdit
    />
  );
};

export default Edit;
