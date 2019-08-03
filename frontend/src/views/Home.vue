<template>
  <div class="home"  v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
     <featured/>
     <div class="container">
        <h4 class="text-center mt-4 mb-3">Other Articles</h4>
        <div id="posts" class="row d-flex justify-content-center">
           <post v-for="post in posts" :post="post"/>
        </div>
     </div>
  </div>
</template>

<script>
  import Featured from '../components/home/Featured'
  import Post from '../components/home/Post'
  export default {
    name: 'home',
    components: {
      featured : Featured,
      post : Post
    },
    data(){
      return{
        posts : [],
        nextUrl : `${this.$url}posts`,
        done : false
      }
    },
    methods :{
        loadMore(){
          if(this.nextUrl != null && this.nextUrl != undefined && !this.done){
              this.$http.get(this.nextUrl)
              .then(data=>{
                  data.data.data.forEach(element => {
                    this.posts.push(element)  
                  })
                   
                  if(data.data.data.length == 0)this.done = true 
                  this.nextUrl = data.data.links.pagination.next_page_url
                })  
          }  
        }
    }
  }
</script>


<style>
   *{
      font-family: medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif!important
   }
</style>

