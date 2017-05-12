import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const HeaderBar = () =>  ( 
  <AppBar iconElementRight={
    <div>
      <FlatButton style={{color: 'white'}} label='Share New Link' />
      <FlatButton style={{color: 'white'}} label='Logout' />
    </div>
  } />
  );

export default HeaderBar;
