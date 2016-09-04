

<template>
  <div class="PrimaryNav u-shadow">
    <div class="container">
      <div class="row">
        <div class="col-xs-3 PrimaryNav-button_nav_container text-center">
          <button v-if="!onPostItem" class="btn PrimaryNav-button_nav PrimaryNav-button" @click="toggleSidebar">
            <i class="{{ sidebarOpen ? 'ion-close' : 'ion-navicon' }}"></i>
          </button>
          <button v-if="onPostItem" class="btn PrimaryNav-button_nav PrimaryNav-button" @click="backToHome">
            <i class="ion-arrow-left-c"></i>
          </button>
        </div>
        <div class="col-xs-6 PrimaryNav-logo_container text-center">
          <h1 class="PrimaryNav-logo"><a v-link="{ path: '/' }">Simple PWA</a></h1>
        </div>
        <div class="col-xs-3 PrimaryNav-button_search_container text-center">
          <button v-if="!onPostItem" class="btn PrimaryNav-button_search PrimaryNav-button" @click="toggleSearchbar">
            <i class="{{ searchbarOpen ? 'ion-close' : 'ion-ios-search-strong' }}"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import UIActions from '../../vuex/actions/ui.js';

  export default {

    vuex: {
      getters: {
        onPostItem: ({ ui }) => ui.onPostItem,
        searchbarOpen: ({ ui }) => ui.searchbarOpen,
        sidebarOpen: ({ ui }) => ui.sidebarOpen
      },
      actions: { UIActions }
    },

    methods: {
      toggleSearchbar() {
        this.UIActions('TOGGLE_SEARCHBAR')
      },

      toggleSidebar() {
        this.UIActions('TOGGLE_SIDEBAR')
      },

      backToHome() {
        window.history.back()
        this.UIActions('ON_NETRAL_PAGE')
      },

    }

  };

</script>
