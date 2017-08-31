
import React, { Component } from 'react'
import {Bar, BarChart, CartesianGrid, Cell, Tooltip, XAxis, YAxis} from "recharts";

const barData = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const COLORS = ['#7D93F7', '#A6DECF'];


class SimpleBar extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <BarChart
                width={this.props.width / 1.57 }
                height={this.props.height / 3}
                data={barData} >
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Bar dataKey="pv" fill="#7583FF">
                    {
                        barData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                    }
                </Bar>
            </BarChart>
        );
    }
}

export default SimpleBar