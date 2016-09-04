
import Vue from 'vue';
import Vuex from 'vuex';

import post from './store/post.js';
import ui from './store/ui.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    post,
    ui,
  },
  strict: true
});
