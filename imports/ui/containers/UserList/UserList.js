import React from 'react';

import User from '../../components/User/user';

const UserList = ({ profiles }) => {
  return(
        <div>
          {
            profiles.map(profile => <User profile={profile} key={profile._id} />)
          }
        </div>
    )

}

export default UserList;