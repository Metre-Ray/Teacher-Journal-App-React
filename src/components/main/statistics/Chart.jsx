import React, { Component } from "react";
import { VictoryBar } from "victory";
import * as V from 'victory';

export default class Chart extends Component {

  render() {
    const { data } = this.props;

    return (
      <VictoryBar
        data={data}
        x={name}
        y={value}
      />
    )
  }
}
