import React, { Component } from 'react';
import './Modal.scss';

export default class Modal extends Component {
  render() {
    const { show, children } = this.props;

    if (!show) { return null; }
    return (
      <div class="modal-container">
        {children}
      </div>
    )
  }
}
