
export default function({ dispatch }, action, arg) {

  switch (action) {
    case 'TOGGLE_SIDEBAR':
      dispatch('TOGGLE_SIDEBAR')
      return ;

    case 'TOGGLE_SEARCHBAR':
      dispatch('TOGGLE_SEARCHBAR')
      return ;

    case 'UPDATE_SEARCH_QUERY':
      dispatch('UPDATE_SEARCH_QUERY', arg)
      return ;

    case 'ON_POST_ITEM':
      dispatch('ON_POST_ITEM')
      return ;

    case 'ON_NETRAL_PAGE':
      dispatch('ON_NETRAL_PAGE')
      return ;
  }

};
