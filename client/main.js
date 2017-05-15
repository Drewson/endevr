import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import ProjectListContainer from '../imports/ui/containers/ProjectList/ProjectListContainer'
import YourProjects from '../imports/ui/containers/YourProjects/YourProjects';
import SingleProjectContainer from '../imports/ui/containers/SingleProjectContainer/SingleProjectContainer';
import CreateProfileContainer from '../imports/ui/containers/CreateProfile/CreateProfileContainer';
import MainLayout from '../imports/ui/layouts/MainLayout';
import App from '../imports/ui/containers/app/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './mui-theme';

Meteor.startup(() => {
  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router>
        <MainLayout>
          <App>
            <Switch>
              <Route exact path="/" component={ProjectListContainer} />
              <Route path="/signup" component={CreateProfileContainer} />
              <Route path="/myprojects" component={YourProjects} />
              <Route path="/project" component={SingleProjectContainer} />
            </Switch>
          </App>
        </MainLayout>
      </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
  )
});
