import React, { Component } from 'react';

import './StatisticsPage.scss';

export default class StatisticsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listName: 'students'
    }
    this.changeListName = this.changeListName.bind(this);
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
              <li tabIndex="0" key={i}>
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

  render() {
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
          </div>
        </div>
      </div>
    )
  }
}
