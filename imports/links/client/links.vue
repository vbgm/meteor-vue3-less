<script setup>

  import { subscribe, autorun } from 'vue-meteor-tracker'
  import { Links } from '/imports/links/collection.js'

  const { ready } = subscribe('links_list')

  const links = autorun(function () {
    return Links.find({}).fetch()
  }).result

  async function submit (form) {
    const title = form.title
    const url = form.url

    await Meteor.callAsync('links_insertOne', {
      title: title.value,
      url: url.value
    }).catch(error => { alert(error.error) })

    title.value = ''
    url.value = ''
  }

</script><template>

  <h2>Learn Meteor!</h2>

  <form @submit.prevent='submit($event.target)'>
    <input type='text' name='title' placeholder='Title' required>
    <input type='url' name='url' placeholder='Url' required>
    <input type='submit' name='submit' value='Add new link'>
  </form>

  <div v-if='!ready'>Loading...</div>

  <ul v-else>
    <li
    v-for='link of links'
    :key='link._id'
    >
      <a
      :href='link.url'
      target='_blank'
      >{{ link.title }}</a>
    </li>
  </ul>

</template>
