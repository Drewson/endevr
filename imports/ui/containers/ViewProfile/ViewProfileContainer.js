import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import Profile from './Profile';

const mockUser = {
  name: 'Evan Gray',
  bio: 'Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
  location: 'Vancouver',
  skills: [
    'HTML5',
    'CSS3',
    'SASS',
    'React',
    'Redux',
    'PostgresQL',
    'Meteor'
  ],
  projects: [
    {
      name: 'Super Cool App',
      status: 'Planning',
      team: [
        'Evan Gray', 'Andrew Nelson'
      ]
    }
  ],
  email: 'evanlawgray@gmail.com',
  social: [
    {
      id: 1,
      link: 'https://www.facebook.com/frances.mcgillicutty'
    }
  ]
}

class ViewProfileContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className='content-container'>
        <h2>Your Profile</h2>
        <Profile user={this.props.profiles}/>
      </div>
    );
  }
}

export default createContainer(() => {
  const handle = Meteor.subscribe('userList')
  const ready = handle.ready();
  const users = Meteor.users.find({});
  const gotUsers = ready && !!users
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    profiles: Profiles.find({}).fetch(),
  };
}, ViewProfileContainer);

