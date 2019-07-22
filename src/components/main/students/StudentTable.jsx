import React from 'react';
import { PropTypes } from 'prop-types';

import './StudentTable.scss';

const StudentTable  = (props) => {

  const changeClass = (event) => {
    const className = 'selected';
    event.currentTarget.classList.toggle(className);
  }

  const generateRow = (student, index, onRowRemove) => {
    const { id, name, lastName, address, description } = student;
    return (
      <tr key={id} onClick={changeClass}>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{lastName}</td>
        <td>
          <div className="block1">
            {address}
          </div>
        </td>
        <td>
          <div className="block2">
            {description}
          </div>
        </td>
        <td className="remove" onClick={() => onRowRemove(index)}>
          <span className="fas fa-times"></span>
        </td>
      </tr>
    )
  };

  const generateHeadRow = () => (
    <tr>
      <th>Index</th>
      <th>Name</th>
      <th>Surname</th>
      <th>Address</th>
      <th>Description</th>
      <th></th>
    </tr>
  )

  const { students, onRowRemove } = props;

  return (
    <table
      className="table table-striped table-bordered table-hover table-dark student-table"
      tabIndex="0">
      <caption>List of students</caption>
      <thead>
        {
          generateHeadRow()
        }
      </thead>
      <tbody>
        {
          students.map((student, i) => generateRow(student, i, onRowRemove))
        }
      </tbody>
    </table>
  )
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


export default StudentTable;
