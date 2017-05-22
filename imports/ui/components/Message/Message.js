import React from 'react';

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

const Message = ({ details, userProfile }) => {

  return (
    <Card style={messagePreviewStyles}>
      <Avatar style={avatarStyles} src={userProfile.imageupload} />

      <p className='message-preview-text'>
        <span className='bold'>{userProfile.name}</span>  wants to join your team: <span className='bold'>{details.project}</span>
      </p>

      <div className='message-button-container'>
        <RaisedButton
          label='Accept'
          backgroundColor="#00800"
        />
        <RaisedButton
          label='Deny'
          secondary={true}
        />
      </div>
    </Card>
  )
}

export default Message;
