import { Meteor } from 'meteor/meteor'
import { links_insertOne } from './insert-one.js'

export async function links_insertMany ({ title, url }) {
  for (const link in links) {
    await links_insertOne({
      title: link.title,
      url: link.url
    })
  }
}

Meteor.methods({
  links_insertMany
})
