import React, { Component } from 'react';
import PostList from './ProjectList';

class ProjectListContainer extends Component {

    render(){
        return(
            <div style={{margin: '50px 100px'}}>
                <PostList />
            </div>
        )
    }
}

export default ProjectListContainer;
