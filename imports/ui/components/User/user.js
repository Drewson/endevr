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
    console.log(profile.skills.join(', '))
    return (
        <Link to={`/users/${profile._id}`} style={{textDecoration:'none'}}>
            <Card className='user' containerStyle={{display:'flex', height:'100%'}}>
                <div className='userLeft'>
                    <Avatar src={profile.imageupload} size={120} />
                    <div style={{height:'100%'}}>
                        <h3>{profile.name}</h3>
                        <h4>Email: </h4>
                        <p>{profile.email}</p>
                        <h4>Location: </h4>
                        <p>{profile.location}</p>
                    </div>
                </div>
                <div className='userCenter'>
                    <h4>Bio: </h4>
                    <p>{profile.bio}</p>
                </div>
                <div className='userRight'>
                    <h4>Skills: </h4>
                    <p>{profile.skills.join(', ')}</p>
                    <p>{profile.sociallinks}</p>
                    <FloatingActionButton className='addUser'>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </Card>
        </Link>
    )
}

export default User;
