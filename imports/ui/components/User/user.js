import React from 'react';
import { Card, CardTitle, CardHeader } from 'material-ui/Card';
import 'url-search-params-polyfill';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { Link } from 'react-router-dom';

const User = ({ profile }) => {
    return (
        <Link to={`/users/${profile._id}`}>
            <Card>
                <CardTitle title={profile.name} />
                <CardHeader
                    title="Test"
                />
                <p>{profile.bio}</p>
                <p>{profile.skills}</p>
                <p>{profile.email}</p>
                <p>{profile.location}</p>
                <p>{profile.sociallinks}</p>
                <img src={profile.imageupload} style={{maxWidth:'450px', maxHeight:'450px'}} />
                <FloatingActionButton>
                    <ContentAdd />
                </FloatingActionButton>
            </Card>
        </Link>
    )
}

export default User;
