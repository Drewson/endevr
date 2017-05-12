import React, { Component } from 'react';
import PostList from './ProjectList';

import styles from './styles.css'

class ProjectListContainer extends Component {
    render(){
        return(
            <PostList className={styles.projectList} />
        )
    }
}

export default ProjectListContainer;
