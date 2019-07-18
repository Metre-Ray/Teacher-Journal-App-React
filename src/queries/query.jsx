const addStudentMutation = gql`
  mutation addStudent($name: String!, $surname: String!, $address: String, $description: String) {
    addStudent(name: $name, surname: $surname) {
      Name
      LastName
      Id
    }
  }
`;

const dataQuery = gql`
  query dataQuery {
    students {
      Id
      Name
      LastName
      Address
      Description
      Marks
    }
    subjects {
      Id
      Name
      Teacher
      Room
      Description
      Dates
    }
  }
`;
