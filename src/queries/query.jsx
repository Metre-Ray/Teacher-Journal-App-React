import gql from "graphql-tag";

export const addStudentMutation = gql`
  mutation addStudent($name: String!, $surname: String!, $address: String, $description: String) {
    addStudent(name: $name, surname: $surname, address: $address,  description: $description) {
      Name
      LastName
      Address
      Description
      Id
    }
  }
`;

export const dataQuery = gql`
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
