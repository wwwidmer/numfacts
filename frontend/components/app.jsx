import React from 'react';
import { Link, HashRouter, Switch, Route } from 'react-router-dom';
import NavContainer from './nav_container';
import HomeContainer from './home_container';
import HistoryContainer from './history_container';
import TriviaContainer from './trivia_container';
import RandomContainer from './random_container';

/* General notes.
*
*
* You mixed js and jsx - you're using babel-loader anyway and search for both, so it really
* didn't matter which extension you used.
*
*
* Thanks for taking part in the assignment. I hope this feedback helps you.
* Feel free to reach out to me with questions.
*/

const App = () => (
    <div>
      {/* You imported Switch and could have wrapped this Routes in it.
        Then you could handle 404s
        / Only renders the Navigation bar, then directs me to /#/
      */}
      <Route path="/" component={NavContainer}/>
      <Route path="/home" component={HomeContainer} />
      <Route path="/history" component={HistoryContainer} />
      <Route path="/trivia" component={TriviaContainer} />
      <Route path="/random" component={RandomContainer} />
    </div>
);

export default App;
