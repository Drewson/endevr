import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const HeaderBar = () =>  ( 
  <AppBar 
    // title='endevr'
    iconElementLeft={
      <div>
        <FlatButton style={{color: 'white'}} label='endevr' />
      </div>
    }
    iconElementRight={
      <div>
        <FlatButton style={{color: 'white'}} label='Login' />
        <FlatButton style={{color: 'white'}} label='Sign-Up' />
      </div>
  } />
  );

export default HeaderBar;
