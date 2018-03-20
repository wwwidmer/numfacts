import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { Provider } from 'react-redux';
import App from './app';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider><App/></MuiThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default Root;
