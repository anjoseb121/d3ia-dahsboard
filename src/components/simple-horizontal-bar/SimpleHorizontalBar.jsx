import React, { Component } from 'react';
import {Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";

const barData = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];


class SimpleHorizontalBar extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <BarChart
                width={this.props.width / 3}
                height={this.props.height / 2}
                data={barData} >
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7D93F7" />
                        <stop offset="95%" stopColor="#A6DECF" />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Bar dataKey="pv" fill="url(#colorPv)"/>
            </BarChart>
        )
    }

}

export default SimpleHorizontalBar