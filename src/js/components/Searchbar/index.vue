
<template>
  <div class="Searchbar u-shadow {{ searchbarOpen ? 'Searchbar--open' : '' }}">
    <input type="text" placeholder="Filter The Posts..." class="Searchbar-input" @input="updateSearchQuery">
  </div>
</template>

<script>

  import UIActions from '../../vuex/actions/ui.js';

  export default {
    vuex: {
      getters: {
        searchbarOpen: ({ ui }) => ui.searchbarOpen
      },

      actions: { UIActions }
    },

    methods: {
      updateSearchQuery(e) {
        this.UIActions('UPDATE_SEARCH_QUERY', e.target.value)
      }
    }
  };

</script>
