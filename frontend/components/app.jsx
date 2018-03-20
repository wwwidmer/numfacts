import React from 'react';
import { Link, HashRouter, Switch, Route } from 'react-router-dom';
import NavContainer from './nav_container';
import HomeContainer from './home_container';
import HistoryContainer from './history_container';
import TriviaContainer from './trivia_container';
import RandomContainer from './random_container';

const App = () => (
    <div>
      <Route path="/" component={NavContainer}/>
      <Route path="/home" component={HomeContainer} />
      <Route path="/history" component={HistoryContainer} />
      <Route path="/trivia" component={TriviaContainer} />
      <Route path="/random" component={RandomContainer} />
    </div>
);

export default App;
