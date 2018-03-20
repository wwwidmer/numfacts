import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import History from './history';
import Trivia from './trivia';
import Random from './random';

const App = () => (
  <div>
    <Nav />

    <div>
      <Route path="/home" component={Home} />
      <Route path="/history" component={History} />
      <Route path="/trivia" component={Trivia} />
      <Route path="/random" component={Random} />
    </div>
  </div>
);

export default App;
