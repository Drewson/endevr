import React from 'react';
import Project from '../../components/Project/project';

import { Meteor } from 'meteor/meteor';

import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';


let selectedRole = '';
let message = '';

const addRoleToList = (event) => {
    selectedRole = event.target.value;
}

const getMessage = (event) => {
    message = event.target.value;
}

const Nominate = ({ project }) => {

    const handleSubmit = () => {
        if(!selectedRole || !message) {
            alert('You haven\'t provided all the required information!');
        }

        const formData = {userId: Meteor.userId(), projectId: project._id, project: project.name, projectOwner: project.owner, role: selectedRole, message: message};

        Meteor.call('nominations.submitNomination', formData);
    }

    return(
        <div style={{display: 'flex', justifyContent:'center', flexWrap:'wrap', width:'80%', margin:'0 auto'}}>
            <List style={{flexBasis: '100%'}}>
                <Subheader>Which Position are You Interested In?: </Subheader>
                <select
                    name='select'
                    onChange={(event) => addRoleToList(event)}

                >
                {
                    project.roles.map(role => (
                        <option
                            key={role + Date.now()}
                            value={role}
                            // {selected = role.value ===  ? true : false}
                        >
                            {role}
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
                onChange={(event) => getMessage(event)}
            />
            <RaisedButton
                label="Submit"
                secondary={true}
                onTouchTap={() => handleSubmit()}
            />
        </div>
    )

}

export default Nominate;
