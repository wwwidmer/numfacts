import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { HashRouter } from 'react-router-dom';
import App from './app';

const muiTheme = getMuiTheme({
  palette: {
      primary1Color: '#000000',
      primary2Color: '#000000',
      accent1Color: '#000000',
  }
})

const Root = () => (
  <div className="root">
    <HashRouter>
      <MuiThemeProvider muiTheme={muiTheme}><App/></MuiThemeProvider>
    </HashRouter>
  </div>
);

export default Root;
