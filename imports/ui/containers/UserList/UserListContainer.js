import React, { Component } from 'react';
import UserList from './UserList';

class UserListContainer extends Component {

    render(){
        return(
            <div style={{margin: '30px 100px'}}>
                <UserList  profiles={this.props.profiles} />
            </div>
        )
    }
}

export default UserListContainer;
