import React from 'react';
import PropTypes from 'prop-types';
import { Profiles } from '../../../api/profiles';
import { createContainer } from 'meteor/react-meteor-data';

import IconButton from 'material-ui/IconButton';

import Project from '../../components/Project/project';

const Profile = ({ profile }) => {

  return (
    <div>
      <section className='profile-header-area'>
        <div className='profile-image-display' ></div>
        <h3>Name:<span>{user.name}</span></h3>
      </section>
      <section className='profile-main-section'>
        <h3>Bio:</h3>
        <p className='bio-text'>{user.bio}</p>
        <h3>Location:</h3>
        <p className='location-text'>{user.location}</p>
        <h3>Skills:</h3>
        <ul>
          {
            user.skills.map(skill => {
              return <li key={`${skill} ${Date.now()}`}>{skill}</li>;
            })
          }
        </ul>
        <h3>Projects:</h3>
        <ul className='profile-projects-list'>
          {
            user.projects.map(project => {
            return <Project key={`${project.name} ${Date.now()}`} project={project}></Project>
            })
          }
        </ul>
        <h3>Email:</h3>
        <p className='email-text'>{user.email}</p>
        <h3>Social:</h3>
        <ul className='profile-social-links'>
          {
            user.social.map(platform => {
              switch (platform.id) {
                case 0:
                  return <a key={`${platform.id} ${Date.now()}`} href='platform.link'><IconButton className='fa fa-facebook' aria-hidden='true' ></IconButton></a>
                case 1:
                  console.log(platform);
                  return <a key={`${platform.id} ${Date.now()}`} href='platform.link'><IconButton className='fa fa-twitter' aria-hidden='true' ></IconButton></a>
                case 2:
                  return <a key={`${platform.id} ${Date.now()}`} href='platform.link'><IconButton className='fa fa-linkedin-square' aria-hidden='true' ></IconButton></a>
              }
            })
          }
        </ul>
      </section>
    </div>
  );
}

export default createContainer(() => {
  const handle = Meteor.subscribe('userList')
  return {
    all: Profiles.find({}).fetch(),
  };
}, Profile);

