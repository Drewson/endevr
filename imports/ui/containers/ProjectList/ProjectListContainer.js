import React, { Component } from 'react';
import PostList from './ProjectList';

import './styles.css'


const styles = {
    width: '50%',
    padding: '50px',
    backgroundColor: 'black',
    height: '100vh',
}

class ProjectListContainer extends Component {

    render(){
        return(
            <div style={{margin: '50px 100px'}}>
                <PostList styles={styles} />
            </div>
        )
    }
}

export default ProjectListContainer;
