import React, { Component } from 'react'
import {Cell, Pie, PieChart, Tooltip} from "recharts";

const outerData = [
    {name: 'Part A', value: 400},
    {name: 'Part B', value: 300},
    {name: 'Part C', value: 300},
    {name: 'Part D', value: 200}
    ];

const innerData = [
    {name: 'A1', value: 100},
    {name: 'A2', value: 300},
    {name: 'B1', value: 100},
    {name: 'B2', value: 80},
    {name: 'B3', value: 40},
    {name: 'B4', value: 30},
    {name: 'B5', value: 50},
    {name: 'C1', value: 100},
    {name: 'C2', value: 200},
    {name: 'D1', value: 150},
    {name: 'D2', value: 50}];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.17;
    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy  + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

class TwoLevelPie extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <PieChart width={this.props.width / 3} height={this.props.height / 2}>
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7D93F7" />
                        <stop offset="95%" stopColor="#A6DECF" />
                    </linearGradient>
                </defs>
                <Tooltip />
                <Pie   labelLine={false} data={innerData} cx={250} outerRadius={68} innerRadius={34} fill="url(#colorPv)">
                    {
                        innerData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                    }
                </Pie>
                <Pie   labelLine={false}     data={outerData} cx={250} innerRadius={70} outerRadius={110} fill="url(#colorPv)" label={renderCustomizedLabel}>
                    {
                        outerData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                    }
                </Pie>
            </PieChart>
        )
    }
}

export default TwoLevelPie