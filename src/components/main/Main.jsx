import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { convertStudentDataToObjects, convertSubjectDataToObjects } from '../../helpers/converters.ts';
import { sortObjects } from '../../helpers/sortObjects.ts';

import SubjectsListPage from './subjects/SubjectsListPage.jsx';
import StudentsPage from './students/StudentsPage.jsx';
import StatisticsPage from './statistics/StatisticsPage.jsx';
import ExportPage from './export/ExportPage.jsx';
import Nav from '../nav/Nav.jsx';
import StudentForm from './students/StudentForm.jsx';
import SubjectForm from './subjects/SubjectForm.jsx';
import SubjectMarksPage from './subjects/SubjectMarksPage.jsx';
import NotFound from './not-found/NotFound.jsx';

export default class Main extends Component {

  render() {
    const { loading, error } = this.props.data;
    let { students, subjects } = this.props.data;

    if (error) {
      return <p>Error occurred.</p>
    }
    if (loading) {
      return <p>Page is loading...</p>
    }

    students = sortObjects(convertStudentDataToObjects(students), 'lastName');
    subjects = sortObjects(convertSubjectDataToObjects(subjects), 'name');

    return (
      <main>
        <Router>
          <Nav />
          <Switch>
            <Redirect from='/' to='/students' exact/>
            <Route path='/students' exact render={ (props) =>
              <StudentsPage students={students} subjects={subjects} /> }
            />
            <Route path='/students/form' exact component={StudentForm} />
            <Route path='/subjects' exact render={ (props) =>
              <SubjectsListPage subjects={subjects} /> }
            />
            <Route path='/subjects/form' exact component={SubjectForm} />
            <Route path='/subjects/:subject' exact render={ (props) =>
              <SubjectMarksPage subjects={subjects} students={students} {...props} /> }
            />
            <Route path='/statistics' exact render={ (props) =>
              <StatisticsPage subjects={subjects} students={students} /> }
            />
            <Route path='/export' exact render={ (props) =>
              <ExportPage subjects={subjects} students={students} /> }
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </main>
    )
  }
}
