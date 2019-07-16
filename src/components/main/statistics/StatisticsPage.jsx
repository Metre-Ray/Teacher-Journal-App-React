import React, { Component } from 'react';

import './StatisticsPage.scss';

export default class StatisticsPage extends Component {
  render() {
    // const { students, subjects } = this.props;
    const students = [];
    const subjects = [];

    return (
      <div class="statistics-page-container">

        <div class="panel-container">
          <div class="panel-container__buttons">
            <button>
              Students
            </button>
            <button>
              Subjects
            </button>
          </div>
          <div class="panel-container__list">
            <ol>
              {
                students.map((student) => {
                  <li tabindex="0">
                    {student.name + ' ' + student.lastName}
                  </li>
                })
              }
            </ol>
            <ol>
              {
                subjects.map((subject) => {
                  <li tabindex="0">
                    {subject.name}
                  </li>
                })
              }
            </ol>
          </div>
        </div>

        <div class="statistics-container">
          <div class="statistics-container__data">
            <div>
              <span>Student</span>
            </div>
            <div>
              <span>Average marks</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
