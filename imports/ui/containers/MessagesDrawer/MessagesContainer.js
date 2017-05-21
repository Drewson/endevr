import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/FlatButton';
import Menu from 'material-ui/Menu';
import Subheader from 'material-ui/Subheader';

import SpeakerNotes from 'material-ui/svg-icons/action/speaker-notes';

import MessagesList from './MessagesList';

import { Nominations } from '../../../api/nominations';
import { Profiles } from '../../../api/profiles';

const messagesButtonStyles = {
  color: 'white',
  position: 'absolute',
  left: '400px',
  top: '10px',
  display: 'flex',
  justifyContent: 'center',
}

class MessagesDrawer extends Component {

  constructor() {
    super();
    this.state = {open: false};

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <IconButton
          style={messagesButtonStyles}
          onTouchTap={() => this.handleToggle()}
          toolTip='Messages'
        >
        <SpeakerNotes style={{color: 'white', 'marginTop': '25%'}} />
        </IconButton>
        <Drawer open={this.state.open}>

        {
          this.props.nominations.length === 0 ?
            <h3>No messages...</h3> :
            <MessagesList nominations={this.props.nominations} userProfiles={this.props.userProfiles} />
        }

        </Drawer>
      </div>
    );
  }
}

export default createContainer(() => {
  const handleNominations = Meteor.subscribe('nominations');
  const readyNominations = handleNominations.ready();
  const nominations = Nominations.find({});
  const gotNominations = readyNominations && !!nominations;

  const handleProfiles = Meteor.subscribe('profiles');
  const readyProfiles = handleProfiles.ready();
  const profiles = Profiles.find({});
  const gotProfiles = readyProfiles && !!profiles;

  return {
    nominations: gotNominations ? nominations.fetch() : [],
    userProfiles: gotProfiles ? profiles.fetch() : []
  }
}, MessagesDrawer);
