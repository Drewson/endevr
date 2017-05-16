import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateProjectForm from './CreateProjectForm';

class CreateProjectContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='content-container'>
        <CreateProjectForm />
      </div>
    );
  }
}

export default CreateProjectContainer;
