import React, { Component } from 'react';
import UserList from './UserList';

class UserListContainer extends Component {

    constructor(props) {
    super(props);

    }
    handleChange(){
        console.log('hi');
        this.forceUpdate()
    }

    render(){
        return(
            <div style={{margin: '30px 100px'}}>
                <h2 style={{fontWeight:'400'}}>Users: </h2>
                <UserList  profiles={this.props.profiles} handleChange={this.handleChange} />
            </div>
        )
    }
}

export default UserListContainer;
