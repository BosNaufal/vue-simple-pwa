
import req from 'reqwest';

export default function({ dispatch }, action, arg) {

  switch (action) {
    case 'FETCH_LIST':
      let url = window.location.origin + "/API/lists.json"
      if('caches' in window) {
        caches.match(url).then(function (res) {
          if(res) {
            console.log('THERE\'S CACHES!');
            res.json().then(function (json) {
              dispatch('POST_LIST_UPDATE_ALL', json)
              dispatch('POST_GROUPING_CATEGORIES')
            })
          }
        })
      }

      req('./API/lists.json', (res) => {
        dispatch('POST_LIST_UPDATE_ALL', res)
        dispatch('POST_GROUPING_CATEGORIES')
      })
    break;
  }

};
