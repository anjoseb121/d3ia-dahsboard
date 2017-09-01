import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleScatter from "./components/simple-scatter/SimpleScatter";
import SimpleBar from "./components/simple-bar/SimpleBar";
import TwoLevelPie from "./components/two-level-pie/TwoLevelPie";
import SimpleHorizontalBar from "./components/simple-horizontal-bar/SimpleHorizontalBar";

const data = [
    {name: 'A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'G', uv: 3490, pv: 4300, amt: 2100},
];


class App extends Component {

    constructor(props) {
        super(props);
        this.onResize = this.onResize.bind(this);
        this.state = { screenWidth: 1000, screenHeight: 500, hover: "none", brushExtent: [0, 40]}
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize, false);
        this.onResize();
    }

    onResize() {
        this.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight - 70})
    }

    render() {
        return (
        <div className="App">
            <div className="App-header">
                <h2>Dashboard</h2>
            </div>
            <div className="container">
                <TwoLevelPie data={data} height={this.state.screenHeight} width={this.state.screenWidth}/>
                <SimpleHorizontalBar data={data} height={this.state.screenHeight} width={this.state.screenWidth}/>
                <SimpleBar data={data} height={this.state.screenHeight} width={this.state.screenWidth} />
                <SimpleScatter height={this.state.screenHeight} width={this.state.screenWidth}/>
            </div>
        </div>
    );
  }
}

export default App;
