import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './Form.scss';

export default class Form extends Component {

  onSubmit(event) {
    event.preventDefault();
  }

  generateInputField(label) {
    if (label.type === 'input') {
      return (
      <React.Fragment>
        <label htmlFor={label.name} className="col-form-label">
          {label.name}
        </label>
        <input
          id={label.name}
          placeholder={label.placeholder}
          required={label.required}
          type="text"
          className="form-control bg-dark"
          autoComplete="off" />
      </React.Fragment>
      );
    } else if (label.type === 'textarea') {
      return (
        <React.Fragment>
          <label htmlFor={label.name} className="col-form-label">
            {label.name}
          </label>
          <textarea
            id={label.name}
            placeholder={label.placeholder}
            required={label.required}
            cols="30"
            rows="10"
            className="form-control bg-dark" >
          </textarea>
        </React.Fragment>
      )
    }
    return '';
  }

  generateFields(labels) {
    return labels.map((label) =>
      <div className="form-group" key={label.name}>
        { this.generateInputField(label) }
      </div>
    )
  }

  render() {
    const { labels, buttonName } = this.props;

    return (
      <form
        action=""
        onSubmit={(event) => this.onSubmit(event)}
        className="my-form">

        { this.generateFields(labels) }

        <div className="form-group btn-container">
          <button type="submit" className="btn btn-primary">
            {buttonName}
          </button>
        </div>

      </form>
    )
  }
}

Form.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool
  })),
  buttonName: PropTypes.string
};
