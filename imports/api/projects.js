import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Projects = new Mongo.Collection('projects');

if (Meteor.isServer){

    Meteor.publish('projects', function (){
        return Projects.find({}, { fields: { categories: 1, imageupload: 1, owner: 1, payment: 1, projectdescription: 1,
                                            projectname: 1, roles: 1, teamlocation: 1, date: 1 }
        })
    });
}


Meteor.methods({

    'projects.addProject' (projectInfo) {

        if(!this.userId) {
            throw new Meteor.Error('not-authorized')
        }

        Projects.insert({
            owner: this.userId,
            ...projectInfo
        });

        console.log(Projects.find().fetch());
    },

    // 'projects.getSingleProject' (projectId) {
    //     if(!projectId) {
    //         throw new Meteor.Error('no project ID provided')
    //     }

    //     const theProject = Projects.find({_id: projectId}).fetch();

    //     return theProject;
    // }

});
