import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Users = Meteor.users;
export const Contacts = new Mongo.Collection('contacts');
