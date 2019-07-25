import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { convertStudentDataToObjects, convertSubjectDataToObjects } from '../../helpers/converters.ts';
import { sortObjects } from '../../helpers/sortObjects.ts';

import SubjectsListPage from './subjects/SubjectsListPage.jsx';
import StudentsPage from './students/StudentsPage.jsx';
import StatisticsPage from './statistics/StatisticsPage.jsx';
import ExportPage from './export/ExportPage.jsx';
import Nav from '../nav/Nav.jsx';
import SubjectForm from './subjects/subject-form/SubjectForm.jsx';
import SubjectMarksPage from './subjects/SubjectMarksPage.jsx';
import NotFound from './not-found/NotFound.jsx';
import StudentFormContainer from './students/student-form/StudentFormContainer.jsx';
import SubjectFormContainer from './subjects/subject-form/SubjectFormContainer.jsx';

const Main = (props) => {
  const { loading, error } = props.data;
  let { students, subjects } = props.data;

  if (error) {
    return (
      <React.Fragment>
        <p>Oops, Error occurred.</p>
        <p>{error.message}</p>
      </React.Fragment>
    )
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
          <Route path='/students/form' exact component={StudentFormContainer} />
          <Route path='/subjects' exact render={ (props) =>
            <SubjectsListPage subjects={subjects} /> }
          />
          <Route path='/subjects/form' exact component={SubjectFormContainer} />
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

export default Main;
