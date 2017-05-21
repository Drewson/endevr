import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { Profiles } from '../../../api/profiles';

import Profile from './Profile';

class ViewProfileContainer extends Component {
  constructor() {
    super();
  }


  render() {
    return(
      <div className='content-container' style={{width:'80%!important'}}>
        <h2>Your Profile</h2>

        {
          this.props.profiles.map( (profile) => {

            return profile._id === this.props.match.params.userId ? <Profile profile={profile} key={profile._id} /> : false;
          })
        }
      </div>
    );
  }
}

export default createContainer(() => {

  const handleProfiles = Meteor.subscribe('profiles');
  const readyProfiles = handleProfiles.ready();
  const profiles = Profiles.find({});
  const gotProfiles = readyProfiles && !!profiles;

  return {
    profiles: profiles.fetch()
  }
}, ViewProfileContainer)
