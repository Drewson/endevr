import React, { Component } from 'react';
import PostList from './ProjectList';

class ProjectListContainer extends Component {

    render(){
        console.log(this.props.projects)
        return(
            <div style={{margin: '30px 100px'}}>
                <PostList projects={this.props.projects} />
            </div>
        )
    }
}

export default ProjectListContainer;
