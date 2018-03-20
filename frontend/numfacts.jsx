import React from 'react';
import ReactDOM from 'react-dom';
import "babel-polyfill";

document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  ReactDOM.render(<div>You're in React</div>, document.getElementById('root'));
})
