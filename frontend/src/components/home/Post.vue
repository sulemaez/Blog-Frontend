<template>
    <div class="post col-12 col-sm-12 col-md-5 col-lg-5 post shadow  mb-4 ml-3 p-4" @click="showPost()">
       <div class="row">
           <div class="col-7">
               <h5 class="post-title">{{post.title}}</h5>
               <p class="post-preview">{{post.preview}}</p> 
               <p>{{ properDate(post.created)}}</p>
           </div>
           <div class="col-4 post-img">
               <img :src="post.img" clas="img-responsive" alt="">
           </div>
       </div>
    </div>
</template>


<style>
   .post-title{
       font-weight: 600 !important;
       font-size: 18px !important;
    }

    .post-preview{
       font-size: 15px;
       font-weight: normal;
       color: gba(0,0,0,.54);
    }
    .post-img{
       margin-left: 10px;
       margin-bottom: 10px;
       padding: 0px !important;
       position:relative;
       overflow:hidden;
       padding-bottom:100%;
    
   }
   .post-img img{ 
     position: absolute;
     max-height: 200px !important;
   }
   .post:hover{
       box-shadow: 0px 0px 20px gray !important;
       cursor: pointer;
   }
   
</style>

<script>
export default {
    name : 'postHome',
    props:{
        post : Object
    },
    methods :{
        properDate : (d)=>{
           let date = new Date(d) 
           return date.toDateString()
        },
        showPost(){
            this.$router.push(`/post/${this.post.slug}`)
        }
    }
}
</script>
