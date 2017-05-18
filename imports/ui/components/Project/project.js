import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import 'url-search-params-polyfill';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

const Project = ({ project }) => {

    return (
        <Card>
            <CardTitle title={project.projectname} />
            <p>{project.projectdescription}</p>
            <img src={project.imageupload}  style={{maxWidth:'450px', maxHeight:'450px'}} />
        </Card>
    );
}

export default Project;
