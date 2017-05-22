import React from 'react';

import Menu from 'material-ui/Menu';
import Subheader from 'material-ui/Subheader';

import Message from '../../components/Message/Message';

const messagesHeaderStyles = {
  fontSize: '18px',
  textTransform: 'uppercase'
}

const MessagesList = ({ nominations, userProfiles, acceptTeamRequest, rejectTeamRequest  }) => {
  return(
    <Menu>

      {
        nominations.length === 0 ?
          <Subheader style={messagesHeaderStyles}>No Messages...</Subheader> :
          <Subheader style={messagesHeaderStyles}>Join Team Requests</Subheader>
      }

      {
        nominations.map((nomination) => {
          if(nomination.projectOwner === Meteor.userId()) {

            const userProfile = userProfiles.filter((userProfile) => {

              return userProfile._id === nomination.userId && userProfile;

            });

            return <Message
                    details={nomination}
                    userProfile={userProfile[0]}
                    acceptTeamRequest={acceptTeamRequest}
                    rejectTeamRequest={rejectTeamRequest}
                  />
          }
        })
      }
    </Menu>
  )
}

export default MessagesList;
