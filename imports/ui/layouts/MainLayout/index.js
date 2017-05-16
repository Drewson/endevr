import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderBar from './../../components/HeaderBar';
import { createContainer } from 'meteor/react-meteor-data';

class MainLayout extends Component{

  componentDidMount(){

  }

  render(){
    console.log(this.props.all);
    return (
      <div>
        <HeaderBar currentUserId={this.props.currentUserId} />
        {this.props.children}
      </div>
    );
  }
};

MainLayout.propTypes = {
  children: PropTypes.object,
};

export default createContainer(() => {
  const handle = Meteor.subscribe('userList')
  const ready = handle.ready();
  const users = Meteor.users.find({});
  const gotUsers = ready && !!users
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    all: gotUsers ? users.fetch() : []
  };
}, MainLayout);