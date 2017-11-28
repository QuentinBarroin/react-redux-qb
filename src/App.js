import React, { Component } from 'react';
import logo from './logo.svg';
import Counter from './counter.js';
import TechRadar from './techradar.js';
import {loadJSON} from './utils/utils';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = { };

    const urlJSON = '/data/tech_radar.json';

    loadJSON(urlJSON, function(response){
      // console.log('coucou json');
      this.setState(JSON.parse(response));
    }.bind(this));
  }

  componentWillMount(){
    // console.log('componentWillMount');
  }

  componentDidMount(){
    // console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps){
    //console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState){
    // console.log('shouldComponentUpdate');
    return this.state !== nextState;
  }

  componentWillUpdate(nextProps, nextState){
    // console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState){
      // console.log('componentDidUpdate');
  }



  render() {
    //console.log('render -- this.state : ', this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Counter />

        <TechRadar props={this.state} />
      </div>
    );
  }
}

export default App;
