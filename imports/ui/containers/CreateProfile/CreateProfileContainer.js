import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateProfileForm from './CreateProfileForm';

class CreateProfileContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='content-container'>
        <CreateProfileForm />
      </div>
    );
  }
}

export default CreateProfileContainer;
