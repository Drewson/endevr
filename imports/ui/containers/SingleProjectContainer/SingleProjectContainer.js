import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import SingleProject from '../../components/SingleProject/SingleProject';

class SingleProjectContainer extends Component {

  render(){
    return (
      <div style={{margin: '30px 100px'}}>
        <SingleProject />
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    // project: Meteor.project??
  }
}, SingleProjectContainer);
