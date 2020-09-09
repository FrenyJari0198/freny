import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/counter.jsx'
import counter from './components/counter.jsx';
import Counter from './components/counter.jsx';
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
