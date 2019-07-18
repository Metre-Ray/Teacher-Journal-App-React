import React, { Component } from 'react';

import './SubjectTable.scss';
import { calcAverage } from './../../../helpers/calculations.ts';

export default class SubjectTable extends Component {
  render() {
    const { students, dates, subject } = this.props;

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
            {
              dates.map((date) =>
              <th className="date" key={date}>
                { date }
                <span className="fas fa-trash-alt"></span>
              </th>
              )
            }
          </tr>
        </thead>
        <tbody>
          {
            students.map((student, i) =>
              <tr key={student.id}>
                <td>{i + 1}</td>
                <td>{student.name}</td>
                <td>{student.lastName}</td>
                <td></td>
                {
                  dates.map((date) =>
                    <td contentEditable key={date}>
                      {student.marks[subject] ? student.marks[subject][date] : ''}
                    </td>
                  )
                }
              </tr>
            )
          }
        </tbody>
      </table>
    )
  }
}
