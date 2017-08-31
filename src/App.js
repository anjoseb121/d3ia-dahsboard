import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleScatter from "./components/simple-scatter/SimpleScatter";
import SimpleBar from "./components/simple-bar/SimpleBar";
import TwoLevelPie from "./components/two-level-pie/TwoLevelPie";

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
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Dashboard</h2>
            </div>
        <div>
            <TwoLevelPie height={this.state.screenHeight} width={this.state.screenWidth}/>
            <SimpleBar height={this.state.screenHeight} width={this.state.screenWidth} />
            <SimpleScatter height={this.state.screenHeight} width={this.state.screenWidth}/>
        </div>

        </div>
    );
  }
}

export default App;
