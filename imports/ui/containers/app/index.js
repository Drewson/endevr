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

class App extends Component {

    render(){
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
                            <Route path="/viewprofile" component={ViewProfileContainer} />
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
  const handleUsers = Meteor.subscribe('userList');
  const ready = handleUsers.ready();
  const users = Meteor.users.find({});
  const gotUsers = ready && !!users

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    all: gotUsers ? users.fetch() : []
  };
}, App);
