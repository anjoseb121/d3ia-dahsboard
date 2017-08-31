import React, { Component } from 'react'
import {CartesianGrid, Scatter, ScatterChart, Tooltip, XAxis, YAxis} from "recharts";

const scatterData = [{x: 100, y: 200, z: 200}, {x: 120, y: 100, z: 260},
    {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
    {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}];

class SimpleScatter extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScatterChart
                width={this.props.width / 3}
                height={this.props.height / 3}
                margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                <XAxis dataKey={"x"} name="Stature" unit="cm"/>
                <YAxis dataKey={"y"} name="Weight" unit="kg"/>
                <Scatter name="A school" data={scatterData} fill="#8884d8"/>
                <CartesianGrid/>
                <Tooltip cursor={{ strokeDasharray: '3 3'}}/>
            </ScatterChart>
        )
    }
}

export default SimpleScatter