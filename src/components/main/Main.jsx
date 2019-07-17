import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import SubjectsListPage from './subjects/SubjectsListPage.jsx';
import StudentsPage from './students/StudentsPage.jsx';
import StatisticsPage from './statistics/StatisticsPage.jsx';
import ExportPage from './export/ExportPage.jsx';
import Nav from '../nav/Nav.jsx';
import StudentForm from './students/StudentForm.jsx';
import SubjectForm from './subjects/SubjectForm.jsx';

import {convertStudentDataToObjects, convertSubjectDataToObjects} from '../../helpers/converters.ts';
import {sortObjects} from '../../helpers/sortObjects.ts';
import * as data from '../../assets/data.json';


export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: sortObjects(convertStudentDataToObjects(data.students), 'lastName'),
      subjects: sortObjects(convertSubjectDataToObjects(data.subjects), 'name')
    }
  }

  render() {
    return (
      <main>
        <Router>
          <Nav />
          <Switch>
            <Redirect from='/' to='/students' exact/>
            <Route path='/students' exact render={(props) => <StudentsPage students={this.state.students} subjects={this.state.subjects} />} />
            <Route path='/students/form' exact component={StudentForm} />
            <Route path='/subjects' exact render={(props) => <SubjectsListPage subjects={this.state.subjects} />} />
            <Route path='/subjects/form' exact component={SubjectForm} />
            <Route path='/subjects/:name' exact render={(props) => <SubjectsListPage subjects={this.state.subjects} />} />
            <Route path='/statistics' exact render={(props) => <StatisticsPage subjects={this.state.subjects} students={this.state.students} />} />
            <Route path='/export' exact render={(props) => <ExportPage subjects={this.state.subjects} students={this.state.students} />} />
          </Switch>
        </Router>
      </main>
    )
  }
}
