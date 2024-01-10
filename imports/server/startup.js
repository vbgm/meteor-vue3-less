import { Meteor } from 'meteor/meteor'
import { Links } from '/imports/links/collection.js'
import { links_insertMany } from '/imports/links/server/methods/insert-many.js'

Meteor.startup(async function () {
  const linksCount = await Links.find().countAsync()

  // If the Links collection is empty, add some data
  if (linksCount === 0) {
    await links_insertMany([
      {
        title: 'Do the Tutorial',
        url: 'https://vuejs.org/guide/quick-start.html'
      },{
        title: 'Follow the Guide',
        url: 'https://guide.meteor.com'
      },{
        title: 'Read the Docs',
        url: 'https://docs.meteor.com'
      },{
        title: 'Discussions',
        url: 'https://forums.meteor.com'
      }
    ])
  }
})
