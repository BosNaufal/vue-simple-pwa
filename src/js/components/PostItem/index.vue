
<template>

  <div class="PostItem">
    <div class="PostItem-cover"><img :src="post.cover" alt=""></div>
    <div class="PostItem-inner">
      <div class="container">
        <h2 class="PostItem-title">{{ post.title }}</h2>
        <div class="PostItem-body">
          <p>{{ post.content }}</p>
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
        posts: ({ post }) => post.list
      },

      actions: { UIActions }
    },

    data() {
      return{
        post: {}
      }
    },

    created() {
      let current = this.posts.find((post) => post.id == this.$route.params.id)
      this.post = current
      this.UIActions('ON_POST_ITEM')
    }

  };

</script>
