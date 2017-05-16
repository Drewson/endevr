import { Mongo } from 'meteor/mongo';

export const Projects = new Mongo.Collection('projects');

// const userCanUpdateToDo = (userId, todoOwnerId) => (
//     userId && userId === todoOwnerId
// )

if (Meteor.isServer){

    Meteor.publish('projects', function projectsPublication(){
        return Projects.find();
    })

}


// Meteor.methods({

//     'projects.addProject' (projectInfo){

//         if(!this.userId){
//             throw new Meteor.Error('not-authorized')
//         }

//         Projects.insert({
//          title: inputValue,
//          complete: false,
//          owner: this.userId
//        })
//     },


// });
