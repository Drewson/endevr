import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Projects } from '../../../api/projects';

import SingleProject from '../../components/SingleProject/SingleProject';

class SingleProjectContainer extends Component {

  constructor() {
    super();

  }

  render(){

    return (
      <div>
        {
          this.props.projects.map( (project) => {
            return project._id === this.props.match.params.projectId && <SingleProject key={project._id} project={project}/>
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
}, SingleProjectContainer);
