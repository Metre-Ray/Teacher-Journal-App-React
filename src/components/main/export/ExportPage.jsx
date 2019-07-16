import React, { Component } from 'react';

import './ExportPage.scss';

export default class ExportPage extends Component {
  render() {
    return (
      <div className="export-page-container">
        <button
          className="export-page-container__pdf"
          aria-label="Export PDF">
          <i className="far fa-file-pdf"></i>
        </button>
        <button
          className="export-page-container__excel"
          aria-label="Export Excel">
          <i className="far fa-file-excel"></i>
        </button>
      </div>
    )
  }
}
