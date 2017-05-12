import React, { Component } from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CreateProfileForm from './CreateProfileForm';

class CreateProfile extends Component {
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
