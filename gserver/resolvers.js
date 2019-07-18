const fs = require('fs');
const path = require('path');
const genId = require('./../src/helpers/generateId.ts');
const { GraphQLJSON } = require('graphql-type-json');

const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'assets/data.json')));
const students = data.students;
const subjects = data.subjects;

const myResolvers = {
  JSON: GraphQLJSON,

  Query: {
    students: () => {
      return students;
    },
    subjects: () => {
      return subjects;
    }
  },

  Mutation: {
    addStudent: (root, args) => {
      const newStudent = {
        Id: genId(),
        Name: args.name,
        LastName: args.surname,
        Address: args.address || '',
        Description: args.Description || '',
        Marks: {}
      }
      students.push(newStudent);
      fs.writeFile(
        path.resolve(__dirname, 'assets/data1.json'),
        JSON.stringify({ students, subjects}),
        (err) => { console.log('Error during writing file! ', err); }
      );
      return newStudent;
    }
  }
}

module.exports = { myResolvers };
