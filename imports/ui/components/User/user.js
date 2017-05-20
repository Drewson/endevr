import React from 'react';
import { Card, CardTitle, CardHeader } from 'material-ui/Card';
import 'url-search-params-polyfill';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Avatar from 'material-ui/Avatar';
import './style.css';

import { Link } from 'react-router-dom';

const User = ({ profile }) => {
    return (
        <Link to={`/users/${profile._id}`} style={{textDecoration:'none'}}>
            <Card className='user' containerStyle={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div className='userLeft'>
                    <Avatar src={profile.imageupload} size={200} />
                    <CardTitle title={profile.name} />
                    <CardHeader
                        title={profile.email}
                    />
                    <p>Location: {profile.location}</p>
                </div>
                <div className='userCenter'>
                    <p>{profile.bio}</p>
                    <p>Skills: </p>
                    <ul>
                        {
                            profile.skills.map(skill => <li>{skill}</li>)
                        }
                    </ul>
                    <p>{profile.sociallinks}</p>
                </div>
                <div className='userRight'>
                    <FloatingActionButton className='addUser'>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </Card>
        </Link>
    )
}

export default User;
