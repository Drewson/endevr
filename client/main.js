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
import CreateProfileSelectContainer from '../imports/ui/containers/CreateProfileSelectPage/CreateProfileSelectContainer';
import ViewProfileContainer from '../imports/ui/containers/ViewProfile/ViewProfileContainer';
import CreateProjectContainer from '../imports/ui/containers/CreateProject/CreateProjectContainer';
import Nominate from '../imports/ui/containers/Nominate/Nominate';
import MainLayout from '../imports/ui/layouts/MainLayout';
import App from '../imports/ui/containers/app/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './mui-theme';

// Needed for Material Ui onTouchTap prop to work
import injectTapEventPlugin from 'react-tap-event-plugin';

Meteor.startup(() => {

  injectTapEventPlugin();

  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router>
        <MainLayout>
          <App>
            <Switch>
              <Route exact path="/" component={ProjectListContainer} />
              <Route path="/signup" component={CreateProfileContainer} />
              <Route path="/createproject" component={CreateProjectContainer} />
              <Route path="/myprojects" component={YourProjects} />
              <Route path="/project" component={SingleProjectContainer} />
              <Route path="/newprofile" component={CreateProfileSelectContainer} />
              <Route path="/createprofile" component={CreateProfileContainer} />
              <Route path="/viewprofile" component={ViewProfileContainer} />
              <Route path="/nominate" component={Nominate} />
            </Switch>
          </App>
        </MainLayout>
      </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
  )
});
