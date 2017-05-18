import { Meteor } from 'meteor/meteor';

export const Profiles = new Mongo.Collection('profiles');

if ( Meteor.isServer ) {
  Meteor.publish('profiles', function (){
    return Profiles.find({}, { fields: { email: 1, name: 1, imageupload: 1,
                              bio: 1, skills: 1, socialLinks: 1, location: 1, _id: 1 }});
  });
}

Meteor.methods({

  'profiles.addProfile' (profileInfo){

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Profiles.insert({
      _id: this.userId,
      name: profileInfo.name,
      imageupload: profileInfo.imageupload,
      email: profileInfo.email,
      bio: profileInfo.bio,
      skills: profileInfo.skills,
      socialLinks: profileInfo.socialLinks,
      location: profileInfo.location,
    });
  },
});
