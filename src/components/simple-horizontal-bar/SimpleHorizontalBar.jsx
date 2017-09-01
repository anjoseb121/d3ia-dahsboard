import React, { Component } from 'react';
import {Bar, BarChart, CartesianGrid, Label, Tooltip, XAxis, YAxis} from "recharts";



class SimpleHorizontalBar extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <BarChart layout="vertical"
                width={this.props.width / 3}
                height={this.props.height / 2}
                data={this.props.data} >
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7D93F7" />
                        <stop offset="95%" stopColor="#A6DECF" />
                    </linearGradient>
                </defs>

                <XAxis type="number"/>
                <YAxis type="category" dataKey="name" />
                <CartesianGrid />
                <Tooltip />
                <Bar barSize={20} dataKey="pv" fill="url(#colorPv)"/>
            </BarChart>
        )
    }

}

export default SimpleHorizontalBar