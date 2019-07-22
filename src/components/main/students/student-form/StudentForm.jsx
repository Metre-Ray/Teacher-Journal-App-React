import React from 'react';
import Form from '../../../shared/Form.jsx';

import './StudentForm.scss';

const StudentForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div className="student-form-container">
      <Form
        handleSubmit={handleSubmit}
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

export default StudentForm;
