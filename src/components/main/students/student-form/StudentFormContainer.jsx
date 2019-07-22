import React from 'react'
import StudentForm from './StudentForm.jsx';

import { graphql } from 'react-apollo';
import { addStudentMutation, dataQuery } from '../../../../queries/query.jsx';

let StudentFormContainer = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const studentData = {
      name: form[0].value,
      surname: form[1].value,
      address: form[2].value,
      description: form[3].value
    }
    const { mutate } = props;
    mutate({
      variables: studentData,
      refetchQueries: [ { query: dataQuery }]
    })
    .then (res => {
      form[0].value = '';
      form[1].value = '';
      form[2].value = '';
      form[3].value = '';
    });
  }

  return (
    <StudentForm handleSubmit={handleSubmit} />
  )
}

export default StudentFormContainer = graphql(addStudentMutation)(StudentFormContainer);
