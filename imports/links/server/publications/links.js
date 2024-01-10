import { Meteor } from 'meteor/meteor'
import { LinksCollection } from '../../collection.js'


Meteor.publish('links', function () {
  return LinksCollection.find({})
})
