import React from 'react';
import './ChartPannel.scss';
import BarChart from './BarChart.jsx';


const ChartPanel = (props) => {
  return (
    <div className="statistics-container__data">
      { props.children }
      <BarChart data={props.data} />
    </div>
  )
}

export default ChartPanel;
