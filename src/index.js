import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import './components/counter'
import Counter from './components/counter.jsx';
ReactDOM.render(
  <Counter></Counter>,
  document.getElementById('root')
);
