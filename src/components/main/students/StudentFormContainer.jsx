import React, { Component } from 'react'
import StudentForm from './StudentForm.jsx';

import { graphql } from 'react-apollo';
import { addStudentMutation, dataQuery } from '../../../queries/query.jsx';

class StudentFormContainer extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const studentData = {
      name: form[0].value,
      surname: form[1].value,
      address: form[2].value,
      description: form[3].value
    }
    const { mutate } = this.props;
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

  render() {
    return (
      <div>
        <StudentForm handleSubmit={(e) => this.handleSubmit(e)} />
      </div>
    )
  }
}

export default StudentFormContainer = graphql(addStudentMutation)(StudentFormContainer);
