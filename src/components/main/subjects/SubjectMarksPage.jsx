import React, { useState } from 'react';

import './SubjectMarksPage.scss';

import SubjectTable from './SubjectTable.jsx';
import NewDateModal from './NewDateModal.jsx';

import { validateMark } from '../../../helpers/validators.ts';


const SubjectMarksPage = props => {

  const { students, match: { params: { subject } }, subjects, saveEditedData } = props;
  if (!subject) return;

  const [show, setShow] = useState(false);
  const newMarks = {};

  const handleModalSubmit = (event) => {
    event.preventDefault();
  }

  const handleEdit = (subjectName, id, date, event) => {    // tableName, row, column, data
    const mark = event.target.textContent;
    if (!validateMark(mark)) {
      event.target.classList.add('invalid');
      return;
    }
    else {
      event.target.classList.remove('invalid');
    }
    if (!newMarks[subjectName]) {
      newMarks[subjectName] = {};
    }
    if (!newMarks[subjectName][id]) {
      newMarks[subjectName][id] = {}
    }
    newMarks[subjectName][id][date] = mark;
  }

  const showModal = () => {
    setShow(!show);
  }

  let dates = [];
  subjects.forEach((subj) => {
    if (subj.name === subject) {
      dates = subj.dates;
    }
  });

  return (
    <div className="subjects-marks-page-container">
      <h2>{subject}</h2>

      <div className="top-btn-container">
        <button className="btn btn-primary btn-add" onClick={showModal}>
          <span>+</span>
        </button>
      </div>

      <div className="table-container" >
        <SubjectTable students={students} dates={dates} subject={subject} handleEdit={handleEdit}/>
      </div>

      <div className="form-container">
        <form action="" onSubmit={(e) => {e.preventDefault()}}>
          <div className="form-container__btn">
            <button className="btn btn-primary" type="submit">Save</button>
          </div>
        </form>
      </div>

      <NewDateModal isOpen={show} handleClose={showModal} handleSubmit={handleModalSubmit} />
    </div>
  )
}

export default SubjectMarksPage;
