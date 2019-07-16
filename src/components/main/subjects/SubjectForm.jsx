import React, { Component } from 'react';
import Form from '../../shared/Form.jsx';

import './SubjectForm.scss';

export default class SubjectForm extends Component {
  render() {
    return (
      <div className="subject-form-container">
        <Form
          buttonName="Add"
          labels={[
            {
              type: 'input',
              name: 'Name',
              placeholder: 'Physics',
              required: true
            },
            {
              type: 'input',
              name: 'Teacher',
              placeholder: 'Ivan Mask',
              required: true
            },
            {
              type: 'input',
              name: 'Room',
              placeholder: '666b',
              required: false
            },
            {
              type: 'textarea',
              name: 'Description',
              placeholder: 'Best subject ever',
              required: false
            }
          ]} />
      </div>
    )
  }
}
