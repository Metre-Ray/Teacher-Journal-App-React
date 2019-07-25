import React, { Component } from 'react';
import './StatisticsPage.scss';

import { calcRoundedAverage } from './../../../helpers/calculations.ts';
import ChartPanel from './ChartPanel.jsx';
import ListPanel from './ListPanel.jsx';

export default class StatisticsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      student: ''
    }
    this.createChartDataForStudent = this.createChartDataForStudent.bind(this);
    this.chartData = [];
  }

  createChartDataForStudent(item)  {
    this.setState({student: `${item.name} ${item.lastName}`});
    const marks = item.marks;
    this.chartData = [];
    for (const subject in marks) {
      if (marks.hasOwnProperty(subject)) {
        this.chartData.push({
          name: subject,
          x: calcRoundedAverage(Object.values(marks[subject]))
        });
      }
    }
    this.forceUpdate();
  }

  render() {
    return (
      <div className="statistics-page-container">

        <ListPanel subjects={this.props.subjects} students={this.props.students} handleListClick={this.createChartDataForStudent} />
        <div className="statistics-container">
          <ChartPanel data={this.chartData}>
            <div>
              <span>Student:</span> {this.state.student}
            </div>
            <div>
              <span>Average marks</span>
            </div>
          </ChartPanel>
        </div>

      </div>
    )
  }
}
