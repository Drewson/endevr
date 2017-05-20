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

import { Projects } from '../../../api/projects';

import { createContainer } from 'meteor/react-meteor-data';

import RaisedButton from 'material-ui/RaisedButton';

class ProjectListContainer extends Component {

    sortByCategory(){
      let category = [];
      this.props.projects.map(project => category.push(project.categories));
      category.sort();
      let orderedProjects = this.props.projects;
      let newOrder = orderedProjects.map((project, i) => project.categories = category[i] );
      console.log(newOrder);
      this.props.projects = newOrder;
      this.forceUpdate();
    }

    sortByPaid(){
      // this.setState((prevState, props) => {
      //   return { projects: prevState.projects.sort((a, b) => a.payment === "paid")}
      // });
      this.props.projects = this.props.projects.sort((a, b) => a.payment === "paid");
      this.forceUpdate();
      console.log(this.props.projects)
    }

    sortByDate(){

      // this.setState((prevState, props) => {
      //   return { projects: prevState.projects.sort((a, b) => a.date - b.date) };
      // });
      this.props.projects = this.props.projects.sort((a, b) => a.date - b.date);
      this.forceUpdate();
      console.log(this.props.projects)
    }

    render(){
        return(
            <div style={{margin: '40px 100px'}}>

              <div className='sorter'>
                <span className='sortme'>
                  <p>Sort By: </p>
                  <IconMenu
                    iconButtonElement={<IconButton><ContentFilter color={'white'} /></IconButton>}
                    multiple={true}
                  >
                    <MenuItem className='sortButton' primaryText="Date" onClick={() => this.sortByDate()} />
                    <MenuItem className='sortButton' primaryText="Paid/Unpaid" onClick={() => this.sortByPaid()} />
                    <MenuItem className='sortButton' primaryText="Category" onClick={() => this.sortByCategory()} />
                  </IconMenu>
                </span>
                <Link to='/createproject' className='createProject' style={{ textDecoration: 'none', color:'white' }} >
                <p style={{display:'inline-block', padding:'5px'}}>Create Project: </p>
                <FloatingActionButton backgroundColor='black' mini={true} >
                    <ContentAdd />
                </FloatingActionButton>
              </Link>
              </div>
              <PostList projects={this.props.projects} />
            </div>
        )
    }
}

export default createContainer((incomingProps) => {

  const handleProjects = Meteor.subscribe('projects');
  const readyProjects = handleProjects.ready();
  const projects = Projects.find({});
  const gotProjects = readyProjects && !!projects;


  return {
    projects: gotProjects ? projects.fetch() : []
  }

}, ProjectListContainer);
