import { createContainer } from 'meteor/react-meteor-data';
import React from 'react';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import AccountsUIWrapper from '../AccountsUiWrapper/index';

const HeaderBar = ({ currentUserId }) =>  (
  <AppBar
    iconElementLeft={
      <div>
        <Link to='/' >
              <FlatButton
              style={{color: 'white'}}
              label='endevr'
              labelStyle={{textTransform: 'lowercase', fontSize: '2rem', padding: '10px', backgroundColor:'#424242'}} />
        </Link>
        { currentUserId &&
          <Link to='/myprojects'><FlatButton label="MyProjects" style={{color:'white'}} /></Link>
        }
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

