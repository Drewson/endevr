import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateProfileForm from './CreateProfileForm';
import { createContainer } from 'meteor/react-meteor-data';

class CreateProfileContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='content-container'>
        <CreateProfileForm currentUserId={this.props.currentUserId} />
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    currentUserId: Meteor.userId(),
  };
}, CreateProfileContainer);
