import React, { useState, useEffect } from 'react';
import Field from './Field';
import { Link, useHistory } from 'react-router-dom';

const Form = ({ form, setForm, title, onSave, isEdit, isLoading }) => {
  const history = useHistory();
  const [errors, setErrors] = useState({ title: '' });

  const isFormValid = () => {
    if (!form.title) {
      setErrors({
        ...errors,
        title: 'The title is required',
      });
      return false;
    }
    setErrors({ title: '' });
    return true;
  };

  const onSubmit = async event => {
    event.preventDefault();

    if (isLoading) return;

    if (isFormValid()) {
      await onSave(form);
      history.push('/');
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
        <h3 className="title has-text-centered">{title}</h3>
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
              value={form.description || ''}
              onChange={onChange}
              disabled={isLoading}
            />
          </Field>
          {isEdit && (
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
          )}

          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <Link to="/" className="button is-light">
                <span className="icon">
                  <i className="fas fa-times"></i>
                </span>
                <span>Cancel</span>
              </Link>
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

Form.defaultProps = {
  isEdit: false,
};

export default Form;
