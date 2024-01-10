<script setup>

  import { subscribe, autorun } from 'vue-meteor-tracker'
  import { Links } from '/imports/links/collection.js'

  subscribe('links_list')

  const links = autorun(function () {
    return Links.find({}).fetch()
  }).result

</script><template>

  <h2>Learn Meteor!</h2>

  <ul>
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
