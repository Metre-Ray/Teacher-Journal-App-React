import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './Form.scss';

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.maxInputLength = 100;
    this.refsArray = [];
    this.generateErrorMessage = this.generateErrorMessage.bind(this);
    this.showErrorMessage = this.showErrorMessage.bind(this);
  }

  componentDidMount() {
    this.refsArray.forEach((ref) => {
      this.putInputErrorsInState(ref);
    });
  }

  putInputErrorsInState(input) {                    // ! input mast have id
    const validityState = input.validity;
    const inputErrors = this.getErrors(validityState);
    this.setState((prevState) => {
      return {...prevState, [input.id]: inputErrors};
    })
  }

  generateErrorMessage(error) {
    const defaultErrorList = {
      valueMissing	: () 	=> 'This field is required',
      tooLong	: () 	=>
        `Maximum ${this.maxInputLength} characters are allowed.`,
      tooShort	: () 	=>
        `Minimum ${'x'} characters are required`,
      patternMismatch	  : () 	=> 'Invalid format: only letters, space, - and \` are allowed. The first character must be a letter',
      default   : () => 'Invalid field',
      valid     : () => ''
    };
    return defaultErrorList[error] ? defaultErrorList[error]() : defaultErrorList['default']();
  }

  getErrors(validityState) {
    const errors = [];
    for (const error in validityState) {
      if (validityState[error]) {
        errors.push(error);
      }
    };
    return errors.length === 0 ? null : errors;
  }

  handleChange(event) {
    this.putInputErrorsInState(event.target);
  }

  showErrorMessage(name) {
    const errors = this.state[name];
    if (!errors) return;
    return (
      errors.map((error) =>
        <small className="control-error" key={error}>{ this.generateErrorMessage(error) }</small>
      )
    );
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
            name={label.name}
            placeholder={label.placeholder}
            required={label.required}
            pattern={label.required ? '^[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я \'-]*$' : '.*'}
            maxLength={this.maxInputLength}
            type="text"
            className="form-control bg-dark"
            autoComplete="off"
            onInput={(event) => this.handleChange(event)}
            ref={(ref) => this.refsArray.push(ref)} />
          { this.showErrorMessage(label.name) }
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
            name={label.name}
            placeholder={label.placeholder}
            required={label.required}
            cols="30"
            rows="10"
            className="form-control bg-dark"
            onInput={(event) => this.handleChange(event)}>
          </textarea>
          { this.showErrorMessage(label.name) }
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
    const { labels, buttonName, handleSubmit } = this.props;

    return (
      <form
        action=""
        onSubmit={handleSubmit}
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
