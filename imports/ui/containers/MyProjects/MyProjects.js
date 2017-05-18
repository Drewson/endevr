import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Link} from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

import Project from '../../components/Project/project';

const ProjectList = ({ projects }) => {
    return(
        <div style={{margin: '30px 100px'}}>
                <Project
                    key={project.id}
                    title={project.title}
                    author={project.author}
                />
            <Link to='/createproject'><RaisedButton>Create Project</RaisedButton></Link>
        </div>
    )

}

export default createContainer(() => {
  return {
    currentUserId: Meteor.userId()
  }
}, ProjectList);
