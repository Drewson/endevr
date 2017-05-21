import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

import Project from '../../components/Project/project';

import styles from './styles.css';

class MyProjectsContainer extends Component {
  constructor() {
    super();
  }

  render() {

    return(
      <div className='content-container'>
        <h2>Your Projects</h2>

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
