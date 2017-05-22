import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Menu from 'material-ui/Menu';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import MenuItem from 'material-ui/MenuItem';

import PostList from './ProjectList';

import './styles.css';

import { Projects } from '../../../api/projects';



class ProjectListContainer extends Component {

    sortByCategory(){
      this.props.projects.sort((a, b) => a.categories > b.categories);
      this.forceUpdate();
      console.log('By Category',this.props.projects);
    }

    sortByPaid(){
      this.props.projects = this.props.projects.sort((a, b) => a.payment === "unpaid");
      this.forceUpdate();
      console.log('By Payment Type',this.props.projects)
    }

    sortByDate(){
      this.props.projects = this.props.projects.sort((a, b) => a.date > b.date);
      this.forceUpdate();
      console.log('By Date',this.props.projects)
    }

    render(){
        return(
            <div className='content-wrapper'>

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
                {
                  this.props.projects.length === 0 ?
                    <h3 style={{textAlign: 'center', fontSize: '28px'}}>No Projects...</h3> :
                    <PostList projects={this.props.projects} />
                }
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
