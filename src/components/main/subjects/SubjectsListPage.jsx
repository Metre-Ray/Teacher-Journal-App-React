import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './SubjectsListPage.scss';
import * as data from '../../../assets/data.json';

import { convertSubjectDataToObjects } from './../../../helpers/converters.ts';
import RoundButton from './../../shared/RoundButton.jsx';

export default class SubjectsListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subjects: convertSubjectDataToObjects(data.subjects)
    }
  }

  generateButtons(subjects) {
    return subjects.map((subject) =>
      <button  className="mcontainer__subject" key={subject.id}>
        <span>{ subject.name }</span>
      </button>
    )
  }

  render() {
    const { subjects } = this.state;

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
