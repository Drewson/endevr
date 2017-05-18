import React from 'react';
import { Link } from 'react-router-dom';
import 'url-search-params-polyfill';

import { Card, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

const Project = ({ project }) => {

    return (
        <Link to={`/project/${project._id}`}>
            <Card>
                <CardTitle title={project.projectname} />
                <p>{project.projectdescription}</p>
                <img src={project.imageupload}  style={{maxWidth:'450px', maxHeight:'450px'}} />
            </Card>
        </Link>
    );
}

export default Project;
