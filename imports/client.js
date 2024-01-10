import './ui/main.js'



if (Meteor.isDevelopment) {
  global.__VUE_OPTIONS_API__ = true
  global.__VUE_PROD_DEVTOOLS__ = true
  global.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true
} else {
  global.__VUE_OPTIONS_API__ = false
  global.__VUE_PROD_DEVTOOLS__ = false
  global.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false
}
