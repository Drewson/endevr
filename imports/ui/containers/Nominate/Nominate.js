import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Meteor } from 'meteor/meteor';

import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';

import Project from '../../components/Project/project';

class Nominate extends Component {
    constructor() {
        super();

        this.state = {
            selectedRole: '',
            message: ''
        }
    }

    updateSelectedRole(event) {
        this.setState({
            selectedRole: event.target.value
        })
    }

    updateMessage(event) {
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit() {
        if(!this.state.selectedRole || !this.state.message) {
            alert('You haven\'t provided all the required information!');
        }

        const formData = {
            userId: Meteor.userId(),
            projectId: this.props.project._id,
            project: this.props.project.name,
            projectOwner: this.props.project.owner,
            role: this.state.selectedRole,
            message: this.state.message
        };

        Meteor.call('nominations.submitNomination', formData, function(err) {
            if(err) {
                alert('Our apologies...Something went wrong when processing your request. Please try again later.')
            } else {
                alert('Thanks! Your request has been sent!');
            }
        });
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent:'center', flexWrap:'wrap', width:'80%', margin:'0 auto'}}>
                <List style={{flexBasis: '100%'}}>

                    <Subheader>Which Position are You Interested In?: </Subheader>

                    <select
                        name='select'
                        id='role-select'
                        value={this.state.selectedRole}
                        defaultValue={'n/a'}
                        onChange={(event) => this.updateSelectedRole(event)}

                    >
                        <option
                            key={`default${Date.now()}`}
                            value='n/a'
                        >
                            Select a role...
                        </option>
                        {
                            this.props.project.roles.map((role, i) => (
                                    <option
                                        key={role + Date.now()}
                                        value={role}
                                    >{role}
                                    </option>
                            ))
                        }
                    </select>
                </List>
                <TextField
                    style={{flexBasis: '100%'}}
                    floatingLabelText="Message:"
                    hintText='enter here'
                    multiLine={true}
                    value={this.state.message}
                    onChange={(event) => this.updateMessage(event)}
                />
                <Link to='/'>
                    <RaisedButton
                        label="Submit"
                        secondary={true}
                        onTouchTap={() => this.handleSubmit()}
                    />
                </Link>
            </div>
        );
    }
}

export default Nominate;
