import React from 'react';
import PropTypes from 'prop-types';
import { Profiles } from '../../../api/profiles';
import { createContainer } from 'meteor/react-meteor-data';

import Card from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';

import './styles.css';


const Profile = ({ profile }) => {

  const avatarStyles = {
    height: '180px',
    width: '180px',
    boxShadow: '0px 4px 10px -2px rgba(209,209,209,1)'
  }

  const singleProfileStyles = {
    width: '85%',
    margin: '20px auto',
    position: 'relative',
    flexWrap: 'wrap'
  }

  if(!profile) {
    return <h2>This user doesn't have a profile yet...</h2>
  }

  return (

    <Card className='singleProfile' >
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

        <h3>Name:</h3>
        <p>{ profile.name }</p>
      </section>
      <section className='profile-main-section'>
        <h3>Bio:</h3>
        <p className='bio-text'>{ profile.bio }</p>
        <h3>Location:</h3>
        <p className='location-text'>{ profile.location }</p>
        <h3>Skills:</h3>
        <p>{profile.skills.join(', ')}</p>
        <h3>Email:</h3>
        <p className='email-text'>{ profile.email }</p>
        <h3>Linkedin:</h3>
      </section>
    </Card>
  );
}

export default Profile;

