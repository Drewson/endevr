import React from 'react';

import User from '../../components/User/user';
import './style.css'

const UserList = ({ profiles, filteredProfiles, filterProfiles }) => {

  return(
        <div>
          <div className='userFilter'>
            <h4 style={{fontWeight:'400'}}>Filter Users: </h4>
            <select
              name='select'
              className='skillsSelect'
              onChange={(event) => filterProfiles(event.target.value, profiles)}
            >
              {
                profiles.map(profile => profile.skills.map(skill => <option>{skill}</option>))
              }
            </select>
          </div>

          {
            filteredProfiles.map(profile => {
              return <User profile={profile} key={profile._id} />
            })
          }
      </div>
    )

}

export default UserList;
