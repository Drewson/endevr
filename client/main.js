import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import App from '../imports/ui/containers/app/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './mui-theme';

// Needed for Material Ui onTouchTap prop to work
import injectTapEventPlugin from 'react-tap-event-plugin';

Meteor.startup(() => {

  injectTapEventPlugin();

  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>,
    document.getElementById('root')
  )
});
