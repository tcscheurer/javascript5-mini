import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myName: 'Joe'
    }
  }

  render() {
    return (
      <div className="App">
        My name is { this.state.myName }
      </div>
    );
  }
}

export default App;

/*
misspelled constructor
didn't call super() before making use of the this keyword
*/