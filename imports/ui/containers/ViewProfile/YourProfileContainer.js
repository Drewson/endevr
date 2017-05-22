import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Profile from './Profile';

class ViewProfileContainer extends Component {
  constructor() {
    super();
  }


  render() {
    return(
      <div>
        <h2 className='profileHeaderTab'>Your Profile</h2>


        {
          this.props.profiles.map( (profile) => {

            return profile._id === Meteor.userId() ? <Profile profile={profile} key={profile._id} /> : false;
          })
        }
      </div>
    );
  }
}

export default ViewProfileContainer;
