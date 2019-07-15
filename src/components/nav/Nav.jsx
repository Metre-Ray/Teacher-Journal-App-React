import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './nav.scss';


export default class Nav extends Component {
  render() {
    return (
      <nav className="main-navigation">
        <Link to="/students">
          <button type="button" className="btn btn-primary" >
            Students
          </button>
        </Link>
        <Link to="/subjects">
          <button type="button" className="btn btn-primary" >
            Subjects
          </button>
        </Link>
        <Link to="/statistics">
          <button type="button" className="btn btn-primary" >
            Statistics
          </button>
        </Link>
        <Link to="/students">
          <button type="button" className="btn btn-primary" >
            Export
          </button>
        </Link>
      </nav>
    )
  }
}
