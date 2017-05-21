import React from 'react';
import {Link} from 'react-router-dom';

import { Card, CardTitle } from 'material-ui/Card';
import 'url-search-params-polyfill';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './style.css'

const SingleProject = ({ project }) => {
  console.log(project)
  return (
    <Card className='singleProject'>
      <h2>{project.projectname}</h2>
      <div className='projectContent'>
        <div className='singleProjectInfo'>
          <h4>Location: </h4>
          <p>{project.teamlocation}</p>
          <h4>Roles: </h4>
          <ul>
          {
            project.roles.map(role => <li>{role}</li>)
          }
          </ul>
          <h4>Payment: </h4>
          <p>{project.payment}</p>
        </div>
        <div className='projectDescription'>
          <h4>Description: </h4>
          <p>{project.projectdescription}</p>
          <img src={project.imageupload} />
        </div>
      </div>

        {
          project.owner !== Meteor.userId() &&
          <Link to={`/nominate/${project._id}`}>
            <RaisedButton label='Join!' className='join' primary={true} />
          </Link>
        }
    </Card>
  );
};

export default SingleProject;
