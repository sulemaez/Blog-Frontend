<template>
  <div class="search">
     <div class="container">
        <h4 class="text-center mt-4 mb-3" ref="search-header">Result for "search keyword"</h4>
        <div id="posts" class="row d-flex justify-content-center">
           <post v-for="post in posts" :post="post"/>
        </div>
     </div>
  </div>
</template>

<script>

  import Post from '../components/home/Post'
  export default {
    name: 'search',
    components: {
      post : Post
    },
    data(){
      return{
        posts : []
      }
    },
    mounted(){
      this.$http.get(`${this.$url}admin/posts`)
      .then(data=>{
         this.posts = data.data.data
      })
    }
  }
</script>


<style>
   *{
      font-family: medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif!important
   }
</style>
