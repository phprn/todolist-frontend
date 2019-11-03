import React from 'react';
import Field from '../components/Field';

const Edit = () => (
  <div className="container">
    <div className="section">
      <h3 className="title has-text-centered">Edit #1</h3>

      <article className="message is-danger">
        <div className="message-header">
          <p>ERROR :-(</p>
        </div>
        <div className="message-body">Internal Server Error</div>
      </article>

      <Field name="title" label="Title *" helpText="This field is required" isDanger>
        <input className="input" placeholder="Enter with the title" />
      </Field>
      <Field name="description" label="Description">
        <textarea className="textarea" placeholder="Enter with the description" />
      </Field>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label for="description" className="label">
            Is completed?
          </label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <label className="radio">
                <input type="radio" name="member" />
                Yes
              </label>
              <label className="radio">
                <input type="radio" name="member" checked />
                No
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

export default Edit;
