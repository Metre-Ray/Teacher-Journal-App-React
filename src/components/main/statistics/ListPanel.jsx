import React, { useState } from 'react';
import './ListPanel.scss';
import { PropTypes } from 'prop-types';


const ListPanel = (props) => {

  const [state, setState] = useState({
    listName: 'students',
  });

  const changeListName = (name) => {
    setState({listName: name});
  }

  const generateList = () => {
    const { listName } = state;
    const { students, subjects } = props;

    if (listName === 'students') {
      return (
        <ol>
          {
            students.map((student, i) =>
              <li
                tabIndex="0"
                key={i}
                onClick={() => props.handleListClick(student)}
                onKeyPress={(ev) => {
                  if (ev.key === 'Enter') {
                    props.handleListClick(student);
                  }
                }}>
                {student.name + ' ' + student.lastName}
              </li>
            )
          }
        </ol>
      );
    } else if (listName === 'subjects') {
      return (
        <ol>
          {
            subjects.map((subject, i) =>
              <li tabIndex="0" key={i}>
                {subject.name}
              </li>
            )
          }
        </ol>
      );
    }
  }

  return (
    <div className="panel-container">
      <div className="panel-container__buttons">
        <button onClick={() => changeListName('students')}>
          Students
        </button>
        <button onClick={() => changeListName('subjects')}>
          Subjects
        </button>
      </div>
      <div className="panel-container__list">
        { generateList() }
      </div>
    </div>
  )
}

export default ListPanel;


ListPanel.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    lastName: PropTypes.string,
  })),
  subjects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })),
  handleListClick: PropTypes.func
};
