import React, { Component } from 'react';
import PostList from './ProjectList';
import { Link } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Menu from 'material-ui/Menu';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import MenuItem from 'material-ui/MenuItem';
import './styles.css';

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
            <div style={{margin: '40px 100px'}}>

              <div className='sorter'>
                <span className='sortme'>
                  <p>Sort By: </p>
                  <IconMenu
                    iconButtonElement={<IconButton><ContentFilter /></IconButton>}
                    multiple={true}
                  >
                    <MenuItem className='sortButton' primaryText="Date" onClick={() => this.sortByDate()} />
                    <MenuItem className='sortButton' primaryText="Paid/Unpaid" onClick={() => this.sortByPaid()} />
                    <MenuItem className='sortButton' primaryText="Category" onClick={() => this.sortByCategory()} />
                  </IconMenu>
                </span>
                <Link to='/createproject' className='createProject' style={{ textDecoration: 'none' }} >
                <p style={{display:'inline-block', padding:'5px'}}>Create Project: </p>
                <FloatingActionButton backgroundColor='green' mini={true} >
                    <ContentAdd />
                </FloatingActionButton>
              </Link>
              </div>
              <PostList projects={this.state.projects} />
            </div>
        )
    }
}

export default ProjectListContainer;
