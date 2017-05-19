import React from 'react';
import PropTypes from 'prop-types';
import { Profiles } from '../../../api/profiles';
import { createContainer } from 'meteor/react-meteor-data';

import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';


const Profile = ({ profile }) => {

  const avatarStyles = {
    height: '180px',
    width: '180px',
    boxShadow: '0px 4px 10px -2px rgba(209,209,209,1)'
  }

  return (
    <div>
      <section className='profile-header-area'>

        {
          profile.imageupload ? (
            <Avatar
              src={profile.imageupload}
              style={avatarStyles}
            >
            </Avatar>
            ) : ( <Avatar style={avatarStyles}></Avatar> )
        }

        <h3>Name:<span>{ profile.name }</span></h3>
      </section>
      <section className='profile-main-section'>
        <h3>Bio:</h3>
        <p className='bio-text'>{ profile.bio }</p>
        <h3>Location:</h3>
        <p className='location-text'>{ profile.location }</p>
        <h3>Skills:</h3>

        <h3>Projects:</h3>

        <h3>Email:</h3>
        <p className='email-text'>{ profile.email }</p>
        <h3>Social:</h3>
      </section>
    </div>
  );
}

export default Profile;

