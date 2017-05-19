import React, { Component } from 'react';
import PostList from './ProjectList';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

class ProjectListContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: props.projects
    };
  }

    sortByCategory(){
      let category = [];
      this.state.projects.map(project => category.push(project.categories));
      category.sort();
      let orderedProjects = this.state.projects;
      orderedProjects.map((project, i) => project.categories = category[i] );
      console.log(orderedProjects);

      this.setState((prevState, props) => {
        return { projects: orderedProjects}
      });
    }

    sortByPaid(){
      this.setState((prevState, props) => {
        return { projects: prevState.projects.sort((a, b) => a.payment === "paid")}
      });

    }

    sortByDate(){

      this.setState((prevState, props) => {
        return { projects: prevState.projects.sort((a, b) => a.date - b.date) };
      });

    }

    render(){
        return(
            <div style={{margin: '30px 100px'}}>
              <Link to='/createproject' >
                <RaisedButton label="Create Project" style={{width:'100%', bakcground:'blue'}} />
              </Link>
              <div className='sorter'>
                <p>Sort By: </p>
                <RaisedButton label="Date" onClick={() => this.sortByDate()} />
                <RaisedButton label="Paid/Unpaid" onClick={() => this.sortByPaid()} />
                <RaisedButton label="Category" onClick={() => this.sortByCategory()} />
              </div>
              <PostList projects={this.state.projects} />
            </div>
        )
    }
}

export default ProjectListContainer;
