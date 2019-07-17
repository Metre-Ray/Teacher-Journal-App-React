import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './StudentTable.scss';

export default class StudentTable extends Component {

  changeClass(event) {
    const className = 'selected';
    event.currentTarget.classList.toggle(className);
  }

  generateRow(student, index, onRowRemove) {
    return (
      <tr key={student.id} onClick={(event) => this.changeClass(event)}>
        <td>{index + 1}</td>
        <td>{student.name}</td>
        <td>{student.lastName}</td>
        <td>
          <div className="block1">{student.address}</div>
        </td>
        <td>
          <div className="block2">{student.description}</div>
        </td>
        <td className="remove" onClick={() => onRowRemove(index)}>
          <span className="fas fa-times"></span>
        </td>
      </tr>
    );
  }

  render() {
    const { students, onRowRemove } = this.props;

    return (
      <table
        className="table table-striped table-bordered table-hover table-dark student-table"
        tabIndex="0">
        <caption>List of students</caption>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Address</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((student, i) => this.generateRow(student, i, onRowRemove))
          }
        </tbody>
      </table>
    )
  }
}


StudentTable.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    description: PropTypes.string
  }))
};

StudentTable.defaultProps = {
  students: []
};
