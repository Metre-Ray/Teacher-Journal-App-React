import React from 'react';
import './Modal.scss';

const Modal = (props) => {
  const { children } = props;
  return (
    <div className="modal-container">
      {children}
    </div>
  )
}

export default Modal;
