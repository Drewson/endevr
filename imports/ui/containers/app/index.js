import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { createContainer } from 'meteor/react-meteor-data';

import ProjectListContainer from '../ProjectList/ProjectListContainer'
import YourProjects from '../YourProjects/YourProjects';
import SingleProjectContainer from '../SingleProjectContainer/SingleProjectContainer';
import CreateProfileContainer from '../CreateProfile/CreateProfileContainer';
import CreateProfileSelectContainer from '../CreateProfileSelectPage/CreateProfileSelectContainer';
import ViewProfileContainer from '../ViewProfile/ViewProfileContainer';
import CreateProjectContainer from '../CreateProject/CreateProjectContainer';
import Nominate from '../Nominate/Nominate';
import HeaderBar from '../../components/HeaderBar';
import { Profiles } from '../../../api/profiles';
import { Projects } from '../../../api/projects';

class App extends Component {

    render(){

        let profilesProp = this.props.profiles;

        return (
            <div>
                <Router>
                    <div>
                        <HeaderBar currentUserId={this.props.currentUserId} />
                        <Switch>
                            <Route exact path="/" component={ProjectListContainer} />
                            <Route path="/signup" component={CreateProfileContainer} />
                            <Route path="/createproject" component={CreateProjectContainer} />
                            <Route path="/myprojects" component={YourProjects} />
                            <Route path="/project" component={SingleProjectContainer} />
                            <Route path="/newprofile" component={CreateProfileSelectContainer} />
                            <Route path="/createprofile" component={CreateProfileContainer} />
                            <Route path="/viewprofile" render={() => <ViewProfileContainer profiles={profilesProp} /> } />
                            <Route path="/nominate" component={Nominate} />
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
  const handleUsers = Meteor.subscribe('profiles');
  const ready = handleUsers.ready();
  const users = Meteor.users.find({});
  const gotUsers = ready && !!users
  const profiles = Profiles.find({});
  const projects = Projects.find({});

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    users: gotUsers ? users.fetch() : [],
    profiles: profiles.fetch(),
    projects: projects.fetch()
  };
}, App);
