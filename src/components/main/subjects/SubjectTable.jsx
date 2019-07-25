import React from 'react';

import './SubjectTable.scss';
import { calcRoundedAverage } from './../../../helpers/calculations.ts';

const SubjectTable = (props) => {
  const { students, dates, subject, handleEdit } = props;

  const generateDateHeaders = () => dates.map((date) =>
    <th className="date" key={date}>
      { date }
      <span className="fas fa-trash-alt"></span>
    </th>
  )

  const generateMarkCells = (student) => dates.map((date) =>
    <td contentEditable key={date} onInput={(event) => handleEdit(subject, student.id, date, event)}>
      {student.marks[subject] ? student.marks[subject][date] : ''}
    </td>
  )

  return (
    <table
      className="table table-striped table-bordered table-hover table-dark subject-table"
      tabIndex="0">
      <caption>Table of student marks</caption>
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Average</th>
          { generateDateHeaders() }
        </tr>
      </thead>
      <tbody>
        {
          students.map((student, i) =>
            <tr key={student.id}>
              <td>{i + 1}</td>
              <td>{student.name}</td>
              <td>{student.lastName}</td>
              <td>{student.marks[subject] && calcRoundedAverage(Object.values(student.marks[subject]))}</td>
              { generateMarkCells(student) }
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default SubjectTable;
