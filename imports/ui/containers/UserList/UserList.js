import React from 'react';

import User from '../../components/User/user';
import './style.css'

const UserList = ({ profiles, handleChange }) => {
  const selectedSkill = $('.skillsSelect option:selected').val();
  const filteredProfile = profiles.filter( profile => profile.skills.includes(selectedSkill));

  return(
        <div>
          <div className='userFilter'>
            <h4 style={{fontWeight:'400'}}>Filter Users: </h4>
            <select className='skillsSelect' onChange={() => handleChange}>
              {
                profiles.map(profile => profile.skills.map(skill => <option>{skill}</option>))
              }
            </select>
          </div>
          {
            filteredProfile.map(profile => {
              return <User profile={profile} key={profile._id} />
            })
          }
        </div>
    )

}

export default UserList;
