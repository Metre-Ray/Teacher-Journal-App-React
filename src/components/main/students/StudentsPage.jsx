import React, { Component } from 'react';
import StudentTable from './StudentTable.jsx';

import * as data from '../../../assets/data.json';

import {convertStudentDataToObjects, convertSubjectDataToObjects} from '../../../helpers/converters.ts';

import './StudentsPage.scss';

import RoundButton from '../../shared/RoundButton.jsx';
import { Link } from "react-router-dom";


export default class StudentsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: convertStudentDataToObjects(data.students),
      subjects: convertSubjectDataToObjects(data.subjects)
    }
    this.removeStudent = this.removeStudent.bind(this);
  }

  removeStudent(index) {
    let { students } = this.state;
    (students.splice(index, 1));
    this.setState((prevState) => {return {subjects: prevState.subjects, students} });
  }

  render() {
    const students = this.state.students;

    return (
      <div className="students-page">
        <div className="table-container">
          <StudentTable students={students} onRowRemove={this.removeStudent} />
        </div>
        <div className="buttons-container">
          <Link to="/students/form" tabIndex="-1">
            <RoundButton><span>+</span></RoundButton>
          </Link>
        </div>
      </div>
    )
  }
}
