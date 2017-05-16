import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import AccountsUIWrapper from '../AccountsUiWrapper/index';

const HeaderBar = () =>  (
  <AppBar
    iconElementLeft={
      <div>
        <FlatButton
        style={{color: 'white'}}
        label='endevr'
        labelStyle={{textTransform: 'lowercase', fontSize: '2rem', padding: '10px', backgroundColor:'#424242'}} />
      </div>
    }
    iconElementRight={
      <div>
        <div className='login-wrapper'>
          <AccountsUIWrapper />
        </div>
      </div>
  } />
  );

export default HeaderBar;
