
<template>
  <div>
    <post-list :items="posts"></post-list>
  </div>
</template>

<script>

  import postActions from '../../vuex/actions/post.js';

  import PostList from '../PostList/index.vue';

  export default {
    components: { PostList },

    vuex: {
      getters: {
        posts: ({ post }) => post.list
      },
      actions: { postActions }
    },


    created() {
      this.postActions('FETCH_LIST')
    }

  };

</script>
