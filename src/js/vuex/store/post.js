
const state = {
  list: [],
  categories: [],
  current: {},
}


const mutations = {

  POST_LIST_UPDATE_ALL (state,arg) {
    state.list = arg
  },

  POST_GROUPING_CATEGORIES (state,arg) {
    let categories = []
    state.list.forEach((item) => {
      let duplicated = categories.indexOf(item.category)
      if(duplicated === -1) categories.push(item.category)
    })
    state.categories = categories
  },

}

export default { state, mutations };
