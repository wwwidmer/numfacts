import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store';;
import Root from './components/root';
import "babel-polyfill";

document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  ReactDOM.render(<Root store={configureStore()} />, document.getElementById('root'));
})
