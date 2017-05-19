import React from 'react';
import { Link } from 'react-router-dom';
import 'url-search-params-polyfill';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import './style.css';

const Project = ({ project }) => {
    console.log(project)
    return (
        <Link to={`/project/${project._id}`} style={{ textDecoration: 'none' }}>
            <Card className='project' >
                <div className='projectInfo'>
                    <CardTitle title={project.projectname} style={{flexBasis:'100%', textDecoration:'underline'}} />
                    <CardText className='projectDescription'>{project.projectdescription}</CardText>
                    <Chip style={{position:'absolute', bottom:'10px', left:'10px'}} >{project.categories}</Chip>
                </div>
                <div className='projectImage'>
                  <img src={project.imageupload} />
                </div>
            </Card>
        </Link>
    );
}

export default Project;
