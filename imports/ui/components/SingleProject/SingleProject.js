import React from 'react';
import {Link} from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';

import 'url-search-params-polyfill';

import { Card, CardTitle } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import './styles.css';

const SingleProject = ({ project }) => {
  console.log(project)
  return (
    <Card className='singleProject'>
      <h2>{project.projectname}</h2>
      <div className='projectContent'>
        <div className='singleProjectInfo'>

          <h4>Location: </h4>
          <p>{project.teamlocation}</p>

          <Divider style={{marginTop: '10px'}} />

          <h4>Team Members:</h4>
          <ul>
            { project.team != undefined &&
              project.team.map( teamMember => (
                <Link to={`/users/${teamMember._id}`} style={{textDecoration: 'none'}}>
                  <li className='team-member'>
                    <Avatar src={teamMember.imageupload} />
                    <div className='team-member-info'>
                      <h5 className='team-member-name'>{teamMember.name}</h5>
                      <p className='team-member-role'>{teamMember.role}</p>
                    </div>
                  </li>
                </Link>
              ))
            }
          </ul>

          <Divider style={{marginTop: '10px'}} />

          <h4>Looking For: </h4>
          <ul>
            {
              project.roles.map(role => <p key={role + Date.now()}>{role}</p>)
            }
          </ul>

          <Divider style={{marginTop: '20px'}} />

          <h4>Payment: </h4>
          {
            project.payment === 'paid' ?
              <p>Paid</p> :
              <p>Unpaid</p>
          }
        </div>
        <div className='singleProjectDescription'>
          <img src={project.imageupload} />
          <h3 className='description-header'>Description: </h3>
          <p className='project-description'>{project.projectdescription}</p>
        </div>
      </div>

        {
          project.owner !== Meteor.userId() &&
          <Link to={`/nominate/${project._id}`}>
              <RaisedButton label='Join!' className='join' primary={true} />
          </Link>
        }
        {
          project.owner === Meteor.userId() &&
          <Link to={`/inviteusers`}>
              <RaisedButton label='Invite Team' className='join' primary={true} />
          </Link>
        }
    </Card>
  );
};

export default SingleProject;
