import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  let userId = '';

  if ( Meteor.users.find().count() === 0) {
    userId = Accounts.createUser({
      email: 'bilbo@bilbo.com',
      password: '666666'
    })
  }
});