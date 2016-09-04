
const state = {
  sidebarOpen: false,
  searchbarOpen: false,
  searchQuery: '',
  onPostItem: false,
}


const mutations = {

  TOGGLE_SIDEBAR (state,arg) {
    state.searchbarOpen = false
    state.sidebarOpen = !state.sidebarOpen
  },

  TOGGLE_SEARCHBAR (state,arg) {
    state.sidebarOpen = false
    state.searchbarOpen = !state.searchbarOpen
  },

  UPDATE_SEARCH_QUERY (state,arg) {
    state.searchQuery = arg
  },

  ON_POST_ITEM (state,arg) {
    state.onPostItem = true
  },

  ON_NETRAL_PAGE (state,arg) {
    state.onPostItem = false
  },

}

export default { state, mutations };
