import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

class BuildProfileSelectContainer extends Component {
  constructor() {
    super();


  }

  render() {
    return (
      <div className='content-container'>
        <h2>Create Your Profile</h2>

        <div className='splash-buttons-container'>
          <button
            className='splash-button'
          >
            <span>Create Profile Using Linkedin</span>
          </button>
          <button
            className='splash-button'
          >
            <span>Create Profile From Scratch</span>
          </button>
        </div>
      </div>
    );
  }
}

export default BuildProfileSelectContainer;
