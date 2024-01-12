<!-- Options API works as well
<script>

  import { Links } from '/imports/links/collection.js'

  export default {
    name: 'Links',
    meteor: {
      $subscribe: {
        links_list: []
      },
      links () {
        return Links.find({}).fetch()
      }
    },
    computed: {
      ready () {
        return this.$subReady.links_list
      }
    },
    methods: {
      async submit (form) {
        const title = form.title
        const url = form.url

        await Meteor.callAsync('links_insertOne', {
          title: title.value,
          url: url.value
        }).catch(error => { alert(error.error) })

        title.value = ''
        url.value = ''
      }
    }
  }

</script>
-->

<script setup>

  import { subscribe, autorun } from 'meteor/vuejs:vue3'
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

  <div class='links'>
    <h3>Learn Meteor!</h3>

    <ul v-if='ready'>
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

    <div v-else>Loading...</div>

    <form @submit.prevent='submit($event.target)'>
      <input type='text' name='title' placeholder='Title' required>
      <input type='url' name='url' placeholder='Url' required>
      <input type='submit' name='submit' value='Add new link'>
    </form>
  </div>

</template>
