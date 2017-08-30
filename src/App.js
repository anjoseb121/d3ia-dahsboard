import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WorldMap from "./components/world-map/WorldMap";
import BarChart from "./components/bar-chart/BarChart";
import worlddata from "./world";
import {range} from "d3-array";
import {scaleThreshold} from "d3-scale";
import {geoCentroid} from "d3-geo";
import StreamGraph from "./components/stream-graph/StreamGraph";
import Brush from "./components/brush/Brush";

const appData = worlddata.features.filter(d => geoCentroid(d)[0] < -20)

appData.forEach((d, i) => {
    const offset = Math.random();
    d.launchday = i;
    d.data = range(30).map((p, q) => q < i ? 0 : Math.random() * 2 + offset)
});

class App extends Component {

    constructor(props) {
        super(props);
        this.onResize = this.onResize.bind(this);
        this.onHover = this.onHover.bind(this);
        this.onBrush = this.onBrush.bind(this);
        this.state = { screenWidth: 1000, screenHeight: 500, hover: "none", brushExtent: [0, 40]}
    }

    onBrush(d) {
        this.setState({ brushExtent: d})
    }

    onHover(d) {
        this.setState({ hover: d.id })
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize, false);
        this.onResize();
    }

    onResize() {
        this.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight - 70})
    }

    render() {

        const colorScale = scaleThreshold().domain([5, 10, 20, 30, 50]).range(["#75739F", "#5EAFC6", "#41A368", "#93C464"]);
        const filteredAppdata = appData.filter((d, i) => d.launchday >= this.state.brushExtent[0] && d.launchday <= this.state.brushExtent[1]);
        return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dashboard</h2>
        </div>
          <StreamGraph hoverElement={this.state.hover} onHover={this.onHover} colorScale={colorScale} data={filteredAppdata} size={[this.state.screenWidth, this.state.screenHeight / 2]} />
          <Brush changeBrush={this.onBrush} size={[this.state.screenWidth, 50]}/>
          <WorldMap hoverElement={this.state.hover} onHover={this.onHover} colorScale={colorScale} data={filteredAppdata} size={[this.state.screenWidth / 3, this.state.screenHeight / 2]} />
          <BarChart hoverElement={this.state.hover} onHover={this.onHover} colorScale={colorScale} data={filteredAppdata}  size={[this.state.screenWidth / 3, this.state.screenHeight / 2]} />
      </div>
    );
  }
}

export default App;
