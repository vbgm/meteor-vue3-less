import { Meteor } from 'meteor/meteor'
import { LinksCollection } from '../../collection.js'


export async function insertLink ({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() })
}


Meteor.methods({
  insertLink
})
