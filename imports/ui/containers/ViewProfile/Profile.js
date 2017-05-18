import React from 'react';
import PropTypes from 'prop-types';
import { Profiles } from '../../../api/profiles';
import { createContainer } from 'meteor/react-meteor-data';

import IconButton from 'material-ui/IconButton';

import Project from '../../components/Project/project';

const Profile = ({ profile }) => {

  const displayProfileImage = ( profile ) => {
    document.getElementById('profile-image').style.background = `url(${ profile.imageupload })`
  }

  return (
    <div>
      <section className='profile-header-area'>

        { profile.imageupload && ( <div id='profile-image' style='background: url("' + {profile.imageupload} + '');' className='profile-image-display'></div> )
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

