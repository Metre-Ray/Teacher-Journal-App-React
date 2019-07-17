import React, { Component } from 'react';

import './ExportPage.scss';
import { ExportService } from './../../../services/export.service.ts';

export default class ExportPage extends Component {

  pdfExport() {
    ExportService.exportDataToPdf(this.props.students);
  }

  excelExport() {
    ExportService.exportDataToExcel(this.props.students, this.props.subjects);
  }

  render() {
    return (
      <div className="export-page-container">
        <button
          className="export-page-container__pdf"
          aria-label="Export PDF"
          onClick={() => this.pdfExport()}>
          <i className="far fa-file-pdf"></i>
        </button>
        <button
          className="export-page-container__excel"
          aria-label="Export Excel"
          onClick={() => this.excelExport()}>
          <i className="far fa-file-excel"></i>
        </button>
      </div>
    )
  }
}
