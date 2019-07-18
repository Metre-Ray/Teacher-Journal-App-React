import React, { Component } from 'react';
import './StatisticsPage.scss';

import BarChart from './BarChart.jsx';
import { calcAverage } from './../../../helpers/calculations.ts';

export default class StatisticsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listName: 'students'
    }
    this.changeListName = this.changeListName.bind(this);
    this.createChartDataForStudent = this.createChartDataForStudent.bind(this);
    this.chartData = [];
  }

  changeListName(name) {
    this.setState({listName: name});
  }

  generateList() {
    const { listName } = this.state;
    const { students, subjects } = this.props;

    if (listName === 'students') {
      return (
        <ol>
          {
            students.map((student, i) =>
              <li tabIndex="0" key={i} onClick={() => this.createChartDataForStudent(student)}>
                {student.name + ' ' + student.lastName}
              </li>
            )
          }
        </ol>
      );
    } else if (listName === 'subjects') {
      return (
        <ol>
          {
            subjects.map((subject, i) =>
              <li tabIndex="0" key={i}>
                {subject.name}
              </li>
            )
          }
        </ol>
      );
    }
  }

  createChartDataForStudent(item)  {
    const marks = item.marks;
    this.chartData = [];
    for (const subject in marks) {
      if (marks.hasOwnProperty(subject)) {
        this.chartData.push({
          name: subject,
          x: Math.round(calcAverage(Object.values(marks[subject])) * 100) / 100
        });
      }
    }
    this.forceUpdate();
  }

  render() {
    const { students, subjects } = this.props;

    return (
      <div className="statistics-page-container">

        <div className="panel-container">
          <div className="panel-container__buttons">
            <button onClick={() => this.changeListName('students')}>
              Students
            </button>
            <button onClick={() => this.changeListName('subjects')}>
              Subjects
            </button>
          </div>
          <div className="panel-container__list">
            { this.generateList() }
          </div>
        </div>

        <div className="statistics-container">
          <div className="statistics-container__data">
            <div>
              <span>Student</span>
            </div>
            <div>
              <span>Average marks</span>
            </div>
            <BarChart data={this.chartData} />
          </div>
        </div>
      </div>
    )
  }
}
