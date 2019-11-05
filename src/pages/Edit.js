import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Tasks from '../services/Tasks';
import Field from '../components/Field';

const cleanFields = { title: '', description: '', isCompleted: false };

const Edit = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState(cleanFields);
  const [errors, setErrors] = useState(cleanFields);

  useEffect(() => {
    const request = async () => {
      const data = await Tasks.get(id);

      setForm(data);
    };
    request();
  }, []);

  const onSave = async () => {
    setIsLoading(true);
    await Tasks.edit(id, form);
    setIsLoading(false);
  };
  const isFormValid = () => {
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

    if (isFormValid()) {
      onSave();
    }
  };
  const onChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  };

  return (
    <div className="container">
      <div className="section">
        <h3 className="title has-text-centered">Edit #1</h3>

        <article className="message is-danger">
          <div className="message-header">
            <p>ERROR :-(</p>
          </div>
          <div className="message-body">Internal Server Error</div>
        </article>
        <form onSubmit={onSubmit}>
          <Field name="title" label="Title *" helpText={errors.title} isDanger={!!errors.title}>
            <input
              className="input"
              placeholder="Enter with the title"
              value={form.title}
              onChange={onChange}
              disabled={isLoading}
              autoComplete="false"
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

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label htmlFor="isCompleted" className="label">
                Is completed?
              </label>
            </div>
            <div className="field-body">
              <div className="field is-narrow">
                <div className="control">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="isCompleted"
                      id="isCompleted"
                      checked={form.isCompleted}
                      onChange={onChange}
                      disabled={isLoading}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

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

export default Edit;
