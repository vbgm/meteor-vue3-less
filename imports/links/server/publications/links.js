import { Meteor } from 'meteor/meteor'
import { Links } from '../../collection.js'

Meteor.publish('links_list', function () {
  return Links.find({})
})
