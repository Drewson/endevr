import React from 'react';
import { Link } from 'react-router-dom';

import { Meteor } from 'meteor/meteor';

import Card from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './styles.css';

const messagePreviewStyles = {
  height: 'auto',
  width: '256px',
  padding: '10px 7px',
  display: 'flex',
  alignItems: 'flex-start'
}

const avatarStyles = {
  marginRight: '5px',
  display: 'inline',
}

const Message = ({ details, userProfile, acceptTeamRequest, rejectTeamRequest }) => {

  return (
    <Card style={messagePreviewStyles}>
      <Link to={{
        pathname: `/users/${details.userId}`,
        state: `/`
      }}>
        <Avatar style={avatarStyles} src={userProfile.imageupload} />
      </Link>

      <p className='message-preview-text'>
        <Link to={{
          pathname: `/users/${details.userId}`,
          state: `/`
        }}>
          <span className='bold'>{userProfile.name}</span>
        </Link>  wants to join your team: <span className='bold'>{details.projectName}</span>
      </p>

      <div className='message-content'>
        <h4>Message:</h4>
        <p>{details.message}</p>
      </div>

      <div className='message-button-container'>
        <RaisedButton
          label='Accept'
          secondary={true}
          onTouchTap={() => acceptTeamRequest( userProfile, details.projectId, details )}
        />
        <RaisedButton
          label='Deny'
          onTouchTap={() => rejectTeamRequest( details._id )}
        />
      </div>
    </Card>
  )
}

export default Message;
