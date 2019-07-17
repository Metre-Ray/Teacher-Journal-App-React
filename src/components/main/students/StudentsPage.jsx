import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './StudentsPage.scss';

import RoundButton from '../../shared/RoundButton.jsx';
import StudentTable from './StudentTable.jsx';


export default class StudentsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: props.students,
      subjects: props.subjects
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
