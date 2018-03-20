import React from 'react';
import ReactDOM from 'react-dom';
import "babel-polyfill";
import Root from './components/root';

document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  ReactDOM.render(<Root />, document.getElementById('root'));
})
