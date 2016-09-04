
<template>
  <div class="Sidebar-container">
    <aside class="Sidebar u-shadow {{ sidebarOpen ? 'Sidebar--open' : '' }}">
      <h4 class="Sidebar-title">Categories</h4>
      <ul class="list-unstyled Sidebar-menu">
        <li><a href="#" @click.prevent="filterPost('')">All</a></li>
        <li v-for="category in categories"><a href="#" @click.prevent="filterPost(category)">{{ category }}</a></li>
      </ul>
    </aside>
    <div class="Sidebar-overlay {{ sidebarOpen ? 'Sidebar-overlay--open' : '' }}" @click="toggleSidebar"></div>
  </div>
</template>

<script>

  import UIActions from '../../vuex/actions/ui.js';

  export default {

    vuex: {
      getters: {
        sidebarOpen: ({ ui }) => ui.sidebarOpen,
        categories: ({ post }) => post.categories
      },
      actions: { UIActions }
    },

    methods: {
      toggleSidebar() {
        this.UIActions('TOGGLE_SIDEBAR')
      },

      filterPost(category) {
        this.UIActions('UPDATE_SEARCH_QUERY', category)
        this.UIActions('TOGGLE_SIDEBAR')
      }
    }

  };

</script>
