import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './SubjectsListPage.scss';
import RoundButton from './../../shared/RoundButton.jsx';

export default class SubjectsListPage extends Component {

  generateButtons(subjects) {
    return subjects.map((subject) =>
      <button  className="mcontainer__subject" key={subject.id}>
        <span>{ subject.name }</span>
      </button>
    )
  }

  render() {
    const { subjects } = this.props;

    return (
      <div className="subject-list-page">
        <div className="mcontainer">
          { this.generateButtons(subjects) }
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
}
