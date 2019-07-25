import React from 'react';

import './ExportPage.scss';
import { ExportService } from './../../../services/export.service.ts';

const ExportPage = () => {

  const pdfExport = () => {
    ExportService.exportDataToPdf(this.props.students);
  }

  const excelExport = () => {
    ExportService.exportDataToExcel(this.props.students, this.props.subjects);
  }

  return (
    <div className="export-page-container">
      <button
        className="export-page-container__pdf"
        aria-label="Export PDF"
        onClick={pdfExport}>
        <i className="far fa-file-pdf"></i>
      </button>
      <button
        className="export-page-container__excel"
        aria-label="Export Excel"
        onClick={excelExport}>
        <i className="far fa-file-excel"></i>
      </button>
    </div>
  )
}

export default ExportPage;
