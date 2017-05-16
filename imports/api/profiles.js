import { Meteor } from 'meteor/meteor';

export const Profiles = new Mongo.Collection('profiles');

// const profile = {
//     owner: Meteor.userId,
//     name:
// };

Meteor.publish('userList', function (){
  return Meteor.users.find({}, { fields: { email: 1 }});
});