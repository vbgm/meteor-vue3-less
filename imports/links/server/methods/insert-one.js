import { Meteor } from 'meteor/meteor'
import { Links } from '../../collection.js'

export async function links_insertOne ({ title, url }) {
  await Links.insertAsync({ title, url, createdAt: new Date() })
}

Meteor.methods({
  links_insertOne
})
