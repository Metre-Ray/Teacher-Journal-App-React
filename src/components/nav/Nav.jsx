import React from 'react';
import { NavLink } from "react-router-dom";

import './Nav.scss';

const Nav  = () => (
  <nav className="main-navigation">
    <NavLink activeClassName="active-link" to="/students" tabIndex="-1">
      <button type="button" className="btn btn-primary" >
        Students
      </button>
    </NavLink>
    <NavLink activeClassName="active-link" to="/subjects" tabIndex="-1">
      <button type="button" className="btn btn-primary" >
        Subjects
      </button>
    </NavLink>
    <NavLink activeClassName="active-link" to="/statistics" tabIndex="-1">
      <button type="button" className="btn btn-primary" >
        Statistics
      </button>
    </NavLink>
    <NavLink activeClassName="active-link" to="/export" tabIndex="-1">
      <button type="button" className="btn btn-primary" >
        Export
      </button>
    </NavLink>
  </nav>
)

export default Nav;
