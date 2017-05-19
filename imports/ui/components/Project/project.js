import React from 'react';
import { Link } from 'react-router-dom';
import 'url-search-params-polyfill';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import './style.css';

const Project = ({ project }) => {
    console.log(project.roles)
    return (
        <Link to={`/project/${project._id}`} style={{ textDecoration: 'none' }}>
            <Card className='project' >
                <div className='projectInfo'>
                    <CardTitle title={project.projectname} style={{flexBasis:'100%', textDecoration:'underline'}} />
                    <CardText className='projectDescription'>{project.projectdescription}</CardText>
                    <h4>Roles Needed: </h4>
                    <ul>
                      {
                        project.roles.map(role => <li>{role}</li>)
                      }
                    </ul>
                </div>
                <Chip style={{position:'absolute', left:'10px', bottom:'10px'}}>{project.categories}</Chip>
                <div className='projectImage'>
                  <img src={project.imageupload} />
                </div>
            </Card>
        </Link>
    );
}

export default Project;
