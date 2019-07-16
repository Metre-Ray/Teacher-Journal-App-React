import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import SubjectsListPage from './subjects/SubjectsListPage.jsx';
import StudentsPage from './students/StudentsPage.jsx';
import StatisticsPage from './statistics/StatisticsPage.jsx';
import ExportPage from './export/ExportPage.jsx';
import Nav from '../nav/Nav.jsx';
import StudentForm from './students/StudentForm.jsx';
import SubjectForm from './subjects/SubjectForm.jsx';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Router>
          <Nav />
          <Switch>
            <Redirect from='/' to='/students' exact/>
            <Route path='/students' exact component={StudentsPage} />
            <Route path='/students/form' exact component={StudentForm} />
            <Route path='/subjects' exact component={SubjectsListPage} />
            <Route path='/subjects/form' exact component={SubjectForm} />
            <Route path='/subjects/:name' exact component={SubjectsListPage} />
            <Route path='/statistics' exact component={StatisticsPage} />
            <Route path='/export' exact component={ExportPage} />
          </Switch>
        </Router>
      </main>
    )
  }
}
