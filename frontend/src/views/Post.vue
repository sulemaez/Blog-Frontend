<template>
    <div>
      <div v-if="post != undefined" class="post-read">
          <div class="container-fluid post-header" :style="styleObject">
          </div>
        <div class="container main-read mt-4">
            <div class="row justify-content-center align-content-center">
              <div class="col-12 col-sm-10 col-md-8 col-lg-7">
                  <h1 class="read-title">{{post.title}}</h1>
                  <p>{{ properDate(post.created) }}</p>
                  <div ref="content" class="content mt-4">    
                  </div>
              </div>
            </div> 
        </div>
        <comments/>
       </div>
       <div v-else>
           <div class="container">
              <div class="d-flex justify-content-center align-items-center" style="height:70vh">
                 <h3 class="text-center">POST NOT FOUND !</h3>
              </div>
           </div>  
       </div>
    </div>
</template>

<script>
   import Comments from '../components/Comments'
  export default {
    name: 'postRead',
    components: {
      comments : Comments
    },
    data : function(){
      return{
        post:undefined,
        styleObject:{
            backgroundImage: 'url("")'
        }
      }
    },
    methods:{
        properDate : (d)=>{
           let date = new Date(d) 
           return date.toDateString()
        }
    },
    mounted(){
       this.$http.get(`${this.$url}posts/${this.$route.params.slug}`)
       .then(data=>{
          this.post = data.data
          this.styleObject.backgroundImage = `url("${this.post.img}")`
  
       })
    },
    updated: function () {
      this.$nextTick(function () {
         this.$refs["content"].innerHTML = this.post.body
      })
   }
  }
</script>


<style>
   *{
      font-family: medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif!important
   }

   .post-header{
     height: 30vw;
     background-size: cover;
     background-position: center;
   }

   .read-title{
       font-weight: 400 !important;
       font-size: 40px !important;
       line-height: 48px !important;
       letter-spacing: -.42px!important;
       font-family: medium-content-title-font, Georgia, Cambria, "Times New Roman", Times, serif;
   }

   .content{
      word-wrap: break-word !important;
   }
    .content p{
       letter-spacing: -0.004em;
       line-height: 1.58;
       color: rgba(0, 0, 0, 0.84);
       font-style: normal;
       font-weight: 400;
       font-size: 21px;
    }

    .content img{
       width: 100%;
       height: auto;
    }

    .container h1,.container h2 , 
    .container h3 , .container h4 ,
    .container h5{
       margin-top: 10px; 
    }


</style>
