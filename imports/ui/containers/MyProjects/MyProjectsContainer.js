import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import './style';
import Project from '../../components/Project/project';

import styles from './styles.css';

class MyProjectsContainer extends Component {
  constructor() {
    super();
  }

  render() {

    return(
      <div className='myProjects'>
        <h2>My Projects</h2>

        {
          this.props.projects.map( (project) => {
            return project.owner === Meteor.userId() && <Project key={project._id + project.owner} project={project} />;
          })
        }
      </div>
    );
  }
}

export default MyProjectsContainer;
