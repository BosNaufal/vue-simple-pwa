export default {
  '/': {
    component: require('../components/Home/index.vue'),
  },

  '/post/:id': {
    component: require('../components/PostItem/index.vue'),
  },

  '*': {
    component: require('../components/not-found.vue'),
  },
}
