import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import {max, sum} from 'd3-array';
import { select } from 'd3-selection';
import '../../App.css';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }

  componentDidMount() {
    this.createBarChart();
  }

  componentDidUpdate() {
    this.createBarChart();
  }

  createBarChart() {
    const node = this.node;
    const barWidth = this.props.size[0] / this.props.data.length
    const dataMax = max(this.props.data.map(d => sum(d.data)));
    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.size[1]]);

    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect');

    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove();

    select(node)
        .selectAll('rect')
        .data(this.props.data)
        .style('fill', (d, i) => this.props.colorScale(d.launchday))
        .attr('x', (d, i) => i * 25)
        .attr('y', d => this.props.size[1] - yScale(sum(d.data)))
        .attr('height', d => yScale(sum(d.data)))
        .attr('width', barWidth)
        .style('stroke', 'black')
        .style('stroke-opacity', 0.25);
  }

  render() {
    return <svg ref={node => this.node = node} width={this.props.size[0]} height={this.props.size[1]} />;
  }
}

export default BarChart;
