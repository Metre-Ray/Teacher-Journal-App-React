import React from 'react'
import SubjectForm from './SubjectForm.jsx';

import { graphql } from 'react-apollo';
import { addSubjectMutation, dataQuery } from '../../../../queries/query.jsx';

let SubjectFormContainer = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const subjectData = {
      name: form[0].value,
      teacher: form[1].value,
      room: form[2].value,
      description: form[3].value
    }
    const { mutate } = props;
    mutate({
      variables: subjectData,
      refetchQueries: [ { query: dataQuery } ]
    })
    .then ( _ => {
      form[0].value = '';
      form[1].value = '';
      form[2].value = '';
      form[3].value = '';
    });
  }

  return (
    <SubjectForm handleSubmit={handleSubmit} />
  )
}

export default SubjectFormContainer = graphql(addSubjectMutation)(SubjectFormContainer);
