
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.config.debug = true;
Vue.config.devTools = true;

// import components
import app from './components/app.vue';

// import map
import map from './router/map.js';


/**
  VUE ROUTER CONFIGURATION
*/

// Make new VueRouter Instance
Vue.use(VueRouter)
let router = new VueRouter()

// Register Routes
router.map(map)


/**
  MOUNT THE VUE
*/

// Make a new components
let App = Vue.extend(app)

// Mount The App
router.start(App,'app')
