import React from 'react';
import Field from '../components/Field';

const Add = () => (
  <div className="container">
    <div className="section">
      <h3 className="title has-text-centered">Add Task</h3>
      <Field name="title" label="Title *" helpText="This field is required" isDanger>
        <input className="input" placeholder="Enter with the title" />
      </Field>
      <Field name="description" label="Description">
        <textarea className="textarea" placeholder="Enter with the description" />
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
          <button className="button is-success">
            <span className="icon">
              <i className="fas fa-save"></i>
            </span>
            <span>Save</span>
          </button>
        </p>
      </div>
    </div>
  </div>
);

export default Add;
