import React, { Component } from 'react';
import UserList from './UserList';

class UserListContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedSkill: '',
            filteredProfiles: this.props.profiles
        }

        this.filterProfiles = this.filterProfiles.bind(this);

    }

    updateSelectedSkill(skill) {
    }

    filterProfiles(filterValue, unfilteredProfiles) {

        let profiles = unfilteredProfiles.map( profile => profile);
        let selectedSkill = filterValue;

        profiles = profiles.filter( profile => profile.skills.includes(selectedSkill));

        this.setState({
            filteredProfiles: profiles
        });
    }


    render(){
        return(
            <div style={{margin: '30px 100px'}}>
                <h2 style={{fontWeight:'400'}}>Users: </h2>

                <UserList
                    profiles={this.props.profiles}
                    filteredProfiles={this.state.filteredProfiles}
                    filterProfiles={this.filterProfiles}
                />
            </div>
        )
    }
}

export default UserListContainer;
