<template>
    <div class="feature col-12 col-sm-5 col-md-5 col-lg-3 shadow">
        <div class="row">
            <div class="col-md-12 featured-img p-0">
                <img class="img-responsive" :src="article.img" alt="">
            </div>
            <div class="col-md-12 p-3">
                <h4 class="preview-header">{{article.title}}</h4>
                <p class="preview-text">{{article.preview}}</p>
                <p class="preview-time">{{ properDate(article.created) }}</p>
            </div>
        </div>
    </div>
</template>


<style>

   .feature{
       margin-left: 10px;
       margin-bottom: 10px;
   }
   .featured-img img{ 
       width: 100%;
       max-height:200px;
   }

   .preview-header{
       font-weight: 600 !important;
       font-size: 24px !important;
       line-height: 28px !important;
       letter-spacing: 0px!important;
       color: rgba(0, 0, 0, 0.84);
   }

   .preview-text, .preview-time{
       font-size: 15px;
       font-weight: normal;
       color: gba(0,0,0,.54);
   }

   .feature:hover{
       box-shadow: 0px 0px 20px gray !important;
       cursor: pointer;
   }
</style>

<script>
export default {
    name : 'feature',
    props : {
        article:Object
        },
    data : ()=>{
       return{

       }
    },
    methods :{
        properDate : (d)=>{
           let date = new Date(d) 
           return date.toDateString()
        }
    },
  
}
</script>
