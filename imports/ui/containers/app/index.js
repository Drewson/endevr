import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { createContainer } from 'meteor/react-meteor-data';

import ProjectListContainer from '../ProjectList/ProjectListContainer'
import MyProjectsContainer from '../MyProjects/MyProjectsContainer';
import SingleProjectContainer from '../SingleProjectContainer/SingleProjectContainer';
import CreateProfileContainer from '../CreateProfile/CreateProfileContainer';
import CreateProfileSelectContainer from '../CreateProfileSelectPage/CreateProfileSelectContainer';
import ViewProfileContainer from '../ViewProfile/ViewProfileContainer';
import CreateProjectContainer from '../CreateProject/CreateProjectContainer';
import UserListContainer from '../UserList/UserListContainer';
import Nominate from '../Nominate/Nominate';
import HeaderBar from '../../components/HeaderBar';
import { Profiles } from '../../../api/profiles';
import { Projects } from '../../../api/projects';

class App extends Component {

    render(){

        let profilesProp = this.props.profiles;
        let projectsProp = this.props.projects;

        return (
            <div>
                <Router>
                    <div>
                        <HeaderBar currentUserId={this.props.currentUserId} />
                        <Switch>
                            <Route exact path="/" render={() => projectsProp && <ProjectListContainer projects={projectsProp} /> } />
                            <Route path="/signup" component={CreateProfileContainer} />
                            <Route path="/createproject" component={CreateProjectContainer} />
                            <Route path="/myprojects" render={() => projectsProp && <MyProjectsContainer projects={projectsProp} /> } />
                            <Route path="/project/:projectId" component={SingleProjectContainer} />
                            <Route path="/newprofile" component={CreateProfileSelectContainer} />
                            <Route path="/createprofile" component={CreateProfileContainer} />
                            <Route path="/viewprofile" render={() => profilesProp && <ViewProfileContainer profiles={profilesProp} /> } />
                            <Route path="/nominate" component={Nominate} />
                            <Route path="/inviteusers" render={() => profilesProp && <UserListContainer profiles={profilesProp} /> } />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

App.propTypes = {
  children: PropTypes.object,
};

export default createContainer(() => {

  const handleProfiles = Meteor.subscribe('profiles');
  const readyProfiles = handleProfiles.ready();
  const profiles = Profiles.find({});
  const gotProfiles = readyProfiles && !!profiles;

  const handleProjects = Meteor.subscribe('projects');
  const readyProjects = handleProjects.ready();
  const projects = Projects.find({});
  const gotProjects = readyProjects && !!projects;

  return {
    currentUserId: Meteor.userId(),
    profiles: gotProfiles && profiles.fetch(),
    projects: gotProjects && projects.fetch(),
  };
}, App);
