import { Meteor } from 'meteor/meteor'
import { createApp } from 'vue'
import { VueMeteor } from 'vue-meteor-tracker'

import Layout from './layout/index.vue'
import { router } from './router.js'

Meteor.startup(() => {
  const app = createApp(Layout)
  app.use(router)
  app.use(VueMeteor)
  app.mount('#app')
})

if (Meteor.isDevelopment) {
  global.__VUE_OPTIONS_API__ = true
  global.__VUE_PROD_DEVTOOLS__ = true
  global.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true
} else {
  global.__VUE_OPTIONS_API__ = false
  global.__VUE_PROD_DEVTOOLS__ = false
  global.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false
}
