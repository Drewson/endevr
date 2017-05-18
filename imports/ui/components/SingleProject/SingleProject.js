import React from 'react';
import {Link} from 'react-router-dom';

import { Card, CardTitle } from 'material-ui/Card';
import 'url-search-params-polyfill';
import Chip from 'material-ui/Chip';

// const mockData = {
//   roles: ['Senior Dev', 'Beta Tester', 'Field-Man'],
//   team: ['Andrew', 'Bob', 'Emma'],
//   description: 'Blah blah here is the description!',
//   owner: 'Jimmy',
//   title: 'Sub city ultra proposal extreme',
// };

const SingleProject = ({ project }) => {
  return (
    <Card>
      <CardTitle title={project.title} style={{textAlign: 'center' }} />
      <h2>{project.owner}</h2>
      <p>{project.description}</p>


      <Link to="/nominate" >Join the team!</Link>

    </Card>
  );
};

export default SingleProject;
