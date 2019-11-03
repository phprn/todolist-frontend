import React, { cloneElement } from 'react';
import cl from 'classnames';

const Field = ({ name, label, helpText, isDanger, children }) => (
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label htmlFor={name} className="label">
        {label}
      </label>
    </div>
    <div className="field-body">
      <div className="field">
        <div className="control">
          {cloneElement(children, {
            className: cl(children.props.className, { 'is-danger': isDanger }),
            name,
            id: name,
          })}
        </div>
        {helpText && <p className={cl('help', { 'is-danger': isDanger })}>{helpText}</p>}
      </div>
    </div>
  </div>
);

Field.defaultProps = {
  isDanger: false,
  helpText: '',
};

export default Field;
