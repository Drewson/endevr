import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <Profile user={mockUser}/>
      </div>
    );
  }
}

export default ViewProfileContainer;
