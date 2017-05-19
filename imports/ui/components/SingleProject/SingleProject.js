import React from 'react';
import {Link} from 'react-router-dom';

import { Card, CardTitle } from 'material-ui/Card';
import 'url-search-params-polyfill';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';

const SingleProject = ({ project }) => {
  return (
    <Card>
      <CardTitle title={project.title} style={{textAlign: 'center'}} />
      <h2>{project.owner}</h2>
      <p>{project.description}</p>

      {
        project.owner !== Meteor.userId() &&
        <Link to={`/nominate/${project._id}`}><FlatButton label='Join the Team!'></FlatButton></Link>
      }

    </Card>
  );
};

export default SingleProject;
