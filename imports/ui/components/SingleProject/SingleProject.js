import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import 'url-search-params-polyfill';
import FlatButton from 'material-ui/FlatButton';
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
        <a>Join the team!</a>

      </Card>
    );
};

export default SingleProject;