
<template>

  <div class="PostList">
    <div class="container">
      <div v-for="item in items | filterBy searchQuery" class="PostList-item">
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

  export default {
    props: ['items'],

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
