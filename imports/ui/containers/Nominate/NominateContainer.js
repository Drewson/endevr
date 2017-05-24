import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Projects } from '../../../api/projects';

import Nominate from './Nominate';

class NominateContainer extends Component {
  constructor() {
    super();

  }

  render() {

    return(
      <div>
      {
        this.props.projects.map((project) => {
          return project._id === this.props.match.params.projectId &&
            <Nominate key={project.name + Date.now()} project={project} />
        })
      }
      </div>
    );
  }
}

export default createContainer(() => {

  const handleProjects = Meteor.subscribe('projects');
  const readyProjects = handleProjects.ready();
  const projects = Projects.find({});
  const gotProjects = readyProjects && !!projects;

  return {
    projects: projects.fetch()
  }

}, NominateContainer)
