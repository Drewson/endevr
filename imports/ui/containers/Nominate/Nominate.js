import React from 'react';
import Project from '../../components/Project/project';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';


const Nominate = () => {
    return(
        <div style={{display: 'flex', justifyContent:'center', flexWrap:'wrap', width:'80%', margin:'0 auto'}}>
            <List style={{flexBasis: '100%'}}>
                <Subheader>Position Interested In: </Subheader>
                this.props.roles.map(role => (
                    <ListItem>test role</ListItem>
                ))
            </List>
            <TextField
                style={{flexBasis: '100%'}}
                floatingLabelText="Message:"
                hintText='enter here'
                multiLine={true}
            />
            <RaisedButton label="Submit" secondary={true} />
        </div>
    )

}

export default Nominate;