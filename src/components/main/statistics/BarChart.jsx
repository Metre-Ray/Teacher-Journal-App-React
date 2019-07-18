import React, { Component } from 'react';
import './BarChart.scss';
import * as d3 from 'd3';

export default class BarChart extends Component {
  constructor(props){
    super(props)
    this.createBarChart = this.createBarChart.bind(this)
  }

  componentDidMount() {
    this.createBarChart()
  }

  componentDidUpdate() {
    this.createBarChart()
  }

  createBarChart() {
    this.data = this.props.data;
    const node = this.node
    const viewBoxWidth = 200;
    const viewBoxHeightUnit = 10;
    const viewBoxRightPadding = 15;
    const xAxisHeight = 20;
    const yAxisWidth = 70;
    const tickSize = 2;
    const rectFill = 'blue';
    const rectFillOnHover = 'rgb(80, 80, 255)';
    const rectTextFill = 'white';
    const initialDataLength = 10;

    let viewBoxHeight = 100;
    let textFontSize = 6;
    let axisFontSize = 6;

    if (this.data.length > initialDataLength) {
      textFontSize = 4;
      axisFontSize = 4;
      viewBoxHeight = viewBoxHeight + viewBoxHeightUnit * (this.data.length - initialDataLength);
    }

    const svg = d3.select(node)
      .attr('viewBox', `0 0 ${viewBoxWidth} ${viewBoxHeight}`);
    svg.selectAll('*').remove();

    const xScale = d3
      .scaleLinear()
      .domain([0, 10])
      .range([yAxisWidth, viewBoxWidth - viewBoxRightPadding]);
    const yScale = d3
      .scaleBand()
      .domain(this.data.map((d) => d.name))
      .range([0, viewBoxHeight - xAxisHeight])
      .padding(0.4);
    const xAxis = d3
      .axisBottom(xScale)
      .tickSize(tickSize);
    const yAxis = d3
      .axisLeft(yScale)
      .tickSize(tickSize);

    const bars = svg.selectAll('rect').data(this.data);
    bars.enter()
      .append('rect')
      .style('width', d => `${xScale(d.x) - xScale(0)}px`)
      .style('height', yScale.bandwidth)
      .attr('fill', rectFill)
      .attr('x', xScale(0))
      .attr('y', (d) => yScale(d.name))
      .on('mouseover', function() {
        d3.select(this)
          .style('fill', rectFillOnHover);
      })
      .on('mouseout', function() {
        d3.select(this)
          .style('fill', rectFill);
      });

    const text = svg.selectAll('text').data(this.data);
    text.enter()
      .append('text')
      .text((d) => {
        if (!d.x) { return ''; }
        return d.x;
      })
      .attr('fill', rectTextFill)
      .style('font-size', `${textFontSize}`)
      .attr('x',  d => `${xScale(d.x) / 2 + xScale(0) / 2 - textFontSize / 2}px`)
      .attr('y', (d) => `${yScale(d.name) + yScale.bandwidth() / 2 + textFontSize / 2}px`);

    svg.append('g')
      .classed('x-axis', true)
      .style('transform', `translateY(${viewBoxHeight - xAxisHeight}px)`)
      .call(xAxis)
      .style('font-size', `${axisFontSize}`);

    svg.append('g')
      .classed('y-axis', true)
      .style('transform', `translateX(${yAxisWidth}px)`)
      .call(yAxis)
      .style('font-size', `${axisFontSize}`);
  }

  render() {
    return <svg ref={node => this.node = node} className="chart"></svg>
  }
}
