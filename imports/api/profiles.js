import { Meteor } from 'meteor/meteor';

export const Profiles = new Mongo.Collection('profiles');

Meteor.publish('userList', function (){
  return Meteor.users.find({}, { fields: { email: 1 }});
});

Meteor.methods({

    'addProfile' (profileInfo){

      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      Profiles.insert({
        author: profileInfo.author,
        picture: profileInfo.picture,
        email: profileInfo.email,
        bio: profileInfo.bio,
        skills: profileInfo.skills,
        socialLinks: profileInfo.socialLinks,
        location: profileInfo.location,
      });
    },


});
