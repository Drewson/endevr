import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';

import styles from './styles.css';


const splashButtonFlexStyles ={
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-around",
}

class BuildProfileSelectContainer extends Component {
  constructor() {
    super();


  }

  render() {
    return (
      <div className='content-container'>
        <h2>Create Your Profile</h2>

        <div className='splash-buttons-container'>
          <RaisedButton
            className='splash-button'
            style={splashButtonFlexStyles}
          >
            <span>Create Profile Using Linkedin</span>
          </RaisedButton>
          <RaisedButton
            className='splash-button'
            style={splashButtonFlexStyles}
          >
            <span>Create Profile From Scratch</span>
          </RaisedButton>
        </div>
      </div>
    );
  }
}

export default BuildProfileSelectContainer;
