import React from 'react';
import {Link} from 'react-router-dom';

import { Card, CardTitle } from 'material-ui/Card';
import 'url-search-params-polyfill';
import Chip from 'material-ui/Chip';

const mockData = {
  roles: ['Senior Dev', 'Beta Tester', 'Field-Man'],
  team: ['Andrew', 'Bob', 'Emma'],
  description: 'Blah blah here is the description!',
  owner: 'Jimmy',
  title: 'Sub city ultra proposal extreme',
};

const SingleProject = () => {
  return (
    <Card>
      <CardTitle title={mockData.title} style={{textAlign: 'center' }} />
      <h2>{mockData.owner}</h2>
      <p>{mockData.description}</p>

        mockData.roles.map(role => (
          <p>{this.role}</p>
        ))

      mockData.team.map(member => (
        <Chip>
          {this.member}
        </Chip>
      ));
      <Link to="/nominate" >Join the team!</Link>

    </Card>
  );
};

export default SingleProject;