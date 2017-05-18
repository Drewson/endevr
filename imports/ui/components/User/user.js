import React from 'react';
import { Card, CardTitle, CardHeader } from 'material-ui/Card';
import 'url-search-params-polyfill';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

const User = (profile) => {
    return (
        <Card>
            <CardTitle title={profile.profile.name} />
            <CardHeader
            title="Test"
            />
            <p>{profile.profile.bio}</p>
            <p>{profile.profile.skills}</p>
            <p>{profile.profile.email}</p>
            <p>{profile.profile.location}</p>
            <p>{profile.profile.sociallinks}</p>
            <img src={profile.profile.imageupload} style={{maxWidth:'450px', maxHeight:'450px'}} />
        </Card>
    )
}

export default User;