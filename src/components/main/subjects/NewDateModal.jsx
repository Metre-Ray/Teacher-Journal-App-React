import React from 'react';
import Modal from '../../shared/Modal.jsx';

const NewDateModal = (props) => {
  const { isOpen, handleClose, handleSubmit } = props;

  if (!isOpen) { return null; }

  return (
    <Modal>
      <label htmlFor="date">
        Enter new date:
      </label>
      <input
        type="date"
        name="date"
        className="form-control"/>
      <div className="btn-container">
        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
          Save
        </button>
        <button className="btn btn-primary" onClick={handleClose}>
          Close
        </button>
      </div>
    </Modal>
  )
}

export default NewDateModal;
