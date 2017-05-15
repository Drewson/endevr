import React from 'react';
import Project from '../../components/Project/project';
import { createContainer } from 'meteor/react-meteor-data';

const ProjectList = () => {
    return(
        <div style={{margin: '30px 100px'}}>
            this.props.projects.filter(project => {
                project.id === this.props.currentUserId &&
                <Project
                    key={project.id}
                    title={project.title}
                    author={project.author}
                />
            }
            <a>Create Project</a>
        </div>
    )

}

export default createContainer(() => {
  return {
    currentUserId: Meteor.userId()
  }
}, ProjectList);
