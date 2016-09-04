
<template>

  <div class="PostList">
    <div class="container">

      <loading-state v-if="items.length === 0" v-for="i in [1,2,3]"></loading-state>

      <div v-if="items.length > 0" v-for="item in items | filterBy searchQuery" class="PostList-item">
        <div class="PostList-item_thumbnail">
          <img :src="item.cover" alt="">
          <a class="PostList-item_label" @click.prevent="filterPost(item.category)">{{ item.category }}</a>
        </div>
        <div class="PostList-item_body">
          <h2 class="PostList-item_title"><a v-link="{ path: '/post/' + item.id }">{{ item.title }}</a></h2>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  import UIActions from '../../vuex/actions/ui.js'

  import LoadingState from './loading-state.vue';

  export default {
    props: ['items'],

    components: { LoadingState },

    vuex: {
      getters: {
        searchQuery: ({ ui }) => ui.searchQuery
      },
      actions: { UIActions }
    },

    methods: {
      filterPost(category) {
        this.UIActions('UPDATE_SEARCH_QUERY', category)
      }
    }
  };

</script>
