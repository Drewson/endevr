import { Mongo } from 'meteor/mongo';

export const Projects = new Mongo.Collection('projects');

// const userCanUpdateToDo = (userId, todoOwnerId) => (
//     userId && userId === todoOwnerId
// )

// if (Meteor.isServer){

//     Meteor.publish('todos', function todosPublication(){
//         return ToDos.find({ owner: this.userId })
//     })
    
// }


// Meteor.methods({

//     'todos.addToDo' (inputValue){

//         if(!this.userId){
//             throw new Meteor.Error('not-authorized')
//         }

//         ToDos.insert({ 
//          title: inputValue,
//          complete: false,
//          owner: this.userId
//        })
//     },

//     'todos.removeToDo' (todo){
//         if(!userCanUpdateToDo(this.userId, todo.owner)){
//             throw new Meteor.Error('not-authorized')
//         }
    
//         ToDos.remove( todo._id )
//     },

//     'todos.toggleComplete' (todo){

//         if(!userCanUpdateToDo(this.userId, todo.owner)){
//             throw new Meteor.Error('not-authorized')
//         }

//         ToDos.update( todo._id, 
//             {"$set": {complete: !todo.complete}
//         })
//     },

//     'todos.removeCompleted' (todoIds) {

//         if(!this.userId){
//             throw new Meteor.Error('not-authorized')
//         }

//         const query = {
//             _id: { $in: todoIds},
//             owner: this.userId
//         }
//         ToDos.remove(query);
//     }
// });