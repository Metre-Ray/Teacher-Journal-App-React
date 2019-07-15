import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SubjectsPage from './subjects/SubjectsPage.jsx';
import StudentsPage from './students/StudentsPage.jsx';
import StatisticsPage from './statistics/StatisticsPage.jsx';
import ExportPage from './export/ExportPage.jsx';
import Nav from '../nav/Nav.jsx';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Router>
          <Nav />
          <Switch>
            <Route path='/students' exact component={StudentsPage} />
            <Route path='/subjects' exact component={SubjectsPage} />
            <Route path={'/subjects/:name'} exact component={SubjectsPage} />
            <Route path={'/statistics'} exact component={StatisticsPage} />
            <Route path={'/export'} exact component={ExportPage} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </Router>
      </main>
    )
  }
}
