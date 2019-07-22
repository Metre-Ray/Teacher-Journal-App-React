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

export const addSubjectMutation = gql`
  mutation addSubject($name: String!, $teacher: String!, $room: String, $description: String) {
    addSubject(name: $name, teacher: $teacher, room: $room,  description: $description) {
      Name
      Teacher
      Room
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
