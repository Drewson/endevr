import { Meteor } from 'meteor/meteor';

export const Nominations = new Mongo.Collection('nominations');

if ( Meteor.isServer ) {
  Meteor.publish('nominations', function (){
    return Nominations.find({});
  });
}

Meteor.methods({

  'nominations.submitNomination' (nomination) {

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Nominations.insert({...nomination});

  },

  'nominations.deleteNomination' (nominationId) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }


    Nominations.remove({_id: nominationId});
  }

})
