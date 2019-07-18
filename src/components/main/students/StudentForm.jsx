import React, { Component } from 'react';
import Form from '../../shared/Form.jsx';

import './StudentForm.scss';

export default class StudentForm extends Component {

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="student-form-container">
        <Form
          handleSubmit={(e) => handleSubmit(e)}
          buttonName="Add"
          labels={[
            {
              type: 'input',
              name: 'Name',
              placeholder: 'Jack',
              required: true
            },
            {
              type: 'input',
              name: 'Surname',
              placeholder: 'Black',
              required: true
            },
            {
              type: 'input',
              name: 'Address',
              placeholder: 'Zhukova, 29',
              required: false
            },
            {
              type: 'textarea',
              name: 'Description',
              placeholder: 'Juicy details',
              required: false
            }
          ]} />
      </div>
    )
  }
}
