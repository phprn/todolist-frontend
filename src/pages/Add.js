import React, { useState } from 'react';
import Tasks from '../services/Tasks';
import Field from '../components/Field';

const cleanFields = { title: '', description: '' };

const Add = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState(cleanFields);
  const [errors, setErrors] = useState(cleanFields);

  const onAdd = async () => {
    setIsLoading(true);
    await Tasks.create(form);
    setIsLoading(false);
  };

  const validate = () => {
    if (!form.title) {
      setErrors({
        ...errors,
        title: 'The title is required',
      });
      return false;
    }
    setErrors(cleanFields);
    return true;
  };

  const onSubmit = event => {
    event.preventDefault();

    if (isLoading) return;

    if (validate()) {
      onAdd();
    }
  };
  const onChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="section">
        <h3 className="title has-text-centered">Add Task</h3>
        <form onSubmit={onSubmit}>
          <Field name="title" label="Title *" helpText={errors.title} isDanger={!!errors.title}>
            <input
              className="input"
              placeholder="Enter with the title"
              value={form.title}
              onChange={onChange}
              disabled={isLoading}
            />
          </Field>
          <Field name="description" label="Description">
            <textarea
              className="textarea"
              placeholder="Enter with the description"
              value={form.description}
              onChange={onChange}
              disabled={isLoading}
            />
          </Field>

          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <button className="button is-light">
                <span className="icon">
                  <i className="fas fa-times"></i>
                </span>
                <span>Cancel</span>
              </button>
            </p>
            <p className="control">
              <button type="submit" className="button is-success" disabled={isLoading}>
                <span className="icon">
                  <i className="fas fa-save"></i>
                </span>
                <span>Save</span>
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Add;
