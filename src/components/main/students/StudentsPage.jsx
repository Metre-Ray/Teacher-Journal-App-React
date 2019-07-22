import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './StudentsPage.scss';

import RoundButton from '../../shared/RoundButton.jsx';
import StudentTable from './StudentTable.jsx';


const StudentsPage = (props) => {

  const [state, setState] = useState({
    students: props.students,
    subjects: props.subjects
  });

  const removeStudent = (index) => {
    const newStudents = [...state.students];
    (newStudents.splice(index, 1));
    setState((prevState) => { return {
        subjects: prevState.subjects,
        students: newStudents
      }
    });
  }

    const students = state.students;
    return (
      <div className="students-page-container">
        <div className="table-container">
          <StudentTable students={students} onRowRemove={removeStudent} />
        </div>
        <div className="buttons-container">
          <Link to="/students/form" tabIndex="-1">
            <RoundButton><span>+</span></RoundButton>
          </Link>
        </div>
      </div>
    )
}

export default StudentsPage;
