<template>
  <div class="search" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
     <div class="container">
        <h4 class="text-center mt-4 mb-3" ref="search-header">Result for "{{key}}"</h4>
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
        posts : [],
        nextUrl : "",
        first : false,
        done : false,
        pageNo : 2,
        key : ""
      }
    },
    mounted(){
       this.$bus.$on('search',()=>{
          this.search()
       })
       this.search()
    },
    
    methods :{
        search(){
             if(this.$route.query.tag != null){
           this.$http.get(`${this.$url}/posts/tags/${this.$route.query.tag}`)
           .then(data=>{
               this.key = this.$route.query.name
               this.posts = data.data
               this.nextUrl = `${this.$url}/posts/tags/${this.$route.query.tag}?page=${this.pageNo}`
               this.pageNo++
               this.first = true
           })
       }else if(this.$route.query.q != null && this.$route.query.q != ""){
            this.key = this.$route.query.q
            this.$http.get(`${this.$url}/posts/search/${this.$route.query.q}`)
           .then(data=>{
               this.posts = data.data
               this.nextUrl = `${this.$url}/posts/search/${this.$route.query.q}?page=${this.pageNo}`
               this.pageNo++
               this.first = true
           })
       } 
        },
         loadMore(){
          if(this.nextUrl != null && this.nextUrl != undefined && !this.done && this.first){
              this.$http.get(this.nextUrl)
              .then(data=>{
                  data.data.forEach(element => {
                    this.posts.push(element)  
                  })
                   
                  if(data.data.length == 0)this.done = true 
                   if(this.$route.query.tag != null)this.nextUrl = `${this.$url}posts/tags/${this.$route.query.tag}?page=${this.pageNo}`
                   else this.nextUrl = `${this.$url}posts/search/${this.$route.query.q}?page=${this.pageNo}` 
                   this.pageNo++
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
