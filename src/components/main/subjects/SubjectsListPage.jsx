import React from 'react';
import { Link } from "react-router-dom";

import './SubjectsListPage.scss';

import RoundButton from '../../shared/RoundButton.jsx';

const SubjectsListPage = (props) => {

  const generateButtons = (subjects) => {
    return subjects.map((subject) =>
      <Link to={`/subjects/${subject.name}`} tabIndex="-1" key={subject.id}>
        <button  className="mcontainer__subject" key={subject.id}>
          <span>{ subject.name }</span>
        </button>
      </Link>
    )
  }

  const { subjects } = props;

  return (
    <div className="subject-list-page">
      <div className="mcontainer">
        { generateButtons(subjects) }
      </div>
      <div className="bottom-container">
        <Link to="/subjects/form" tabIndex="-1">
          <RoundButton><span>+</span></RoundButton>
        </Link>
        <RoundButton>
          <span>-</span>
        </RoundButton>
      </div>
    </div>
  )
}

export default SubjectsListPage;
