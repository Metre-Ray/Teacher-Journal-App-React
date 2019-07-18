import React, { Component } from 'react';
import SubjectTable from './SubjectTable.jsx';

import './SubjectMarksPage.scss';

export default class SubjectMarksPage extends Component {

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { students, match: { params: { subject } }, subjects } = this.props;
    if (!subject) return;

    let dates = [];
    subjects.forEach((subj) => {
      if (subj.name === subject) {
        dates = subj.dates;
      }
    });

    return (
      <div className="subjects-marks-page-container">
        <h2>{subject}</h2>

        <div className="top-btn-container">
          <button className="btn btn-primary btn-add">
            <span>+</span>
          </button>
        </div>

        <div className="table-container" >
          <SubjectTable students={students} dates={dates} subject={subject}/>
        </div>

        <div className="form-container">
          <form action="" onSubmit={(event) => this.handleSubmit(event)}>
            <div className="form-container__btn">
              <button className="btn btn-primary" type="submit">Save</button>
            </div>
          </form>
        </div>

      </div>
    )
  }
}
