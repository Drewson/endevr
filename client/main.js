import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import MainLayout from './layouts/MainLayout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/mui-theme';

Meteor.startup(() => {
  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
    </MuiThemeProvider>,
    document.getElementById('root')
  )
});