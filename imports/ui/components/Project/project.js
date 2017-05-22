import React from 'react';
import { Link } from 'react-router-dom';
import 'url-search-params-polyfill';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import './style.css';

const Project = ({ project }) => {
    return (
        <Link to={`/project/${project._id}`} style={{ textDecoration: 'none' }}>
            <Card className='project' >
                <div className='projectInfo'>
                    <h3 className='cardTitle'>{project.projectname}</h3>
                    <div className='projectDescription'>
                        <p>{project.projectdescription}</p>
                        <div className='roles'>
                            <h4>Roles Needed: </h4>
                            <ul>
                            {
                                project.roles.map((role, i) => <li key={i}>{role}</li>)
                            }
                            </ul>
                        </div>
                    </div>
                </div>
                <Chip style={{position:'absolute', left:'10px', bottom:'10px'}}>{project.categories}</Chip>
                <Chip style={{position:'absolute', left:'90px', bottom:'10px'}}>{project.payment}</Chip>
                <div className='projectImage'>
                  <img src={project.imageupload} />
                </div>
            </Card>
        </Link>
    );
}

export default Project;
