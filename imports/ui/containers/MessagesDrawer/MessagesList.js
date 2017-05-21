import React from 'react';

import Menu from 'material-ui/Menu';
import Subheader from 'material-ui/Subheader';

import Message from '../../components/Message/Message';

const messagesHeaderStyles = {
  fontSize: '18px',
  textTransform: 'uppercase'
}

const MessagesList = ({ nominations, userProfiles  }) => {
  return(
    <Menu>
      <Subheader style={messagesHeaderStyles}>Join Team Requests</Subheader>

      {
        nominations.map((nomination) => {
          if(nomination.projectOwner === Meteor.userId()) {
            console.log('project owner and current user match');

            const userProfile = userProfiles.filter((userProfile) => {

              return userProfile._id === nomination.userId && userProfile;

            });

            return <Message details={nomination} userProfile={userProfile[0]} />
          }
        })
      }
    </Menu>
  )
}

export default MessagesList;
